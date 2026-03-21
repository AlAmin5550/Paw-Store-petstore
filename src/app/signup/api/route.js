import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async (req) => {
    const newUser = await req.json();
    try {
        const name = newUser?.name?.trim();
        const email = newUser?.email?.trim()?.toLowerCase();
        const password = newUser?.password;

        if (!name || !email || !password) {
            return Response.json({ message: "Name, email and password are required" }, { status: 400 });
        }

        if (password.length < 6) {
            return Response.json({ message: "Password must be at least 6 characters" }, { status: 400 });
        }

        const db = await connectDB();
        const userCollection = db.collection("users");
        const existingUser = await userCollection.findOne({ email });
        if (existingUser) {
            return Response.json({ message: "User already exists" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await userCollection.insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
        });

        return Response.json({ message: "User created successfully" }, { status: 201 });
    } catch (error) {
        return Response.json({ message: "Error creating user", error: error.message }, { status: 500 });

    }

}