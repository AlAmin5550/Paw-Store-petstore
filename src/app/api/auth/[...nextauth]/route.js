import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcrypt";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 60 * 60 * 60, // 24 hours
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
        const db = await connectDB();
        const currentUser = await db
          .collection("users")
          .findOne({ email: credentials.email });
        if (!currentUser) {
          return null;
        }
        const passwordMatch = bcrypt.compareSync(
          credentials.password,
          currentUser.password,
        );
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
        const { email, name } = user;
        try {
          const db = await connectDB();
          const existingUser = await db.collection("users").findOne({ email });
          if (!existingUser) {
            const newUser = {
              email,
              name,
              password: null,
            };
            await db.collection("users").insertOne(newUser);
            return newUser;
          }else{
            return user;
          }
        } catch (error) {
          console.log(error);
          
        }
      }else{
        return user;
      }
    }
  },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
