import { connectDB } from "@/lib/connectDB";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 60 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          return null;
        }

        const email = credentials.email.trim().toLowerCase();
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) {
          return null;
        }

        const passwordMatch = bcrypt.compareSync(credentials.password, currentUser.password);
        if (!passwordMatch) {
          return null;
        }

        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const email = user?.email?.trim()?.toLowerCase();
        const name = user?.name;

        if (!email) {
          return false;
        }
        try {
          const db = await connectDB();
          const existingUser = await db.collection("users").findOne({ email });
          if (!existingUser) {
            const newUser = {
              email,
              name,
              password: null,
              role: "user",
              createdAt: new Date(),
            };
            await db.collection("users").insertOne(newUser);
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    async jwt({ token, user }) {
      if (user?.email) {
        token.email = user.email.trim().toLowerCase();
      }

      if (user?.name) {
        token.name = user.name;
      }

      if (user?.role) {
        token.role = String(user.role).trim().toLowerCase();
      }

      if (!token.role && token.email) {
        try {
          const db = await connectDB();
          const dbUser = await db.collection("users").findOne({ email: token.email.toLowerCase() });
          token.role = String(dbUser?.role || "user").trim().toLowerCase();
        } catch {
          token.role = token.role || "user";
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.role = String(token.role || "user").trim().toLowerCase();
      }

      return session;
    },
  },
  pages: {
    signIn: "/signin",
  },
};
