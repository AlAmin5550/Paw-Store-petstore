import { MongoClient } from "mongodb";

let client;
let db;
export const connectDB = async () => {
    if (db && client) {
        return db;
    }

    try {
        const uri = process.env.MONGODB_URI || process.env.NEXT_PUBLIC_MONGODB_URI;

        if (!uri) {
            throw new Error("MongoDB URI is missing. Set MONGODB_URI or NEXT_PUBLIC_MONGODB_URI.");
        }

        client = new MongoClient(uri);

        await client.connect();
        db = client.db("PawStore");
        console.log("Connected to the database successfully!");
        return db;

    } catch (error) {
        console.error("Error connecting to the database:", error);
        throw error;
    }

}