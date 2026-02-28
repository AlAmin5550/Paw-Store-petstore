import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";


export const POST = async (req) => {
    const newUser = await req.json();
    try{
        const db = await connectDB();
        const userCollection = db.collection("users");
        const existingUser = await userCollection.findOne({email: newUser.email});
        if(existingUser){
            return Response.json({message: "User already exists"}, {status: 400});
        };
        const hashPassword = bcrypt.hashSync(newUser.password, 10);
        newUser.password = hashPassword;
        const resp = await userCollection.insertOne({...newUser, password: hashPassword});
        return Response.json({message: "User created successfully",}, {status: 200});
    }catch(error){
        return Response.json({message: "Error creating user", error: error.message}, {status: 500});

    }

}