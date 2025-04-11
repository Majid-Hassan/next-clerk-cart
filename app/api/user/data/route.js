import { getAuth } from "@clerk/nextjs/server";  
import { NextResponse } from "next/server";  
import connectDB from "@/config/db";  
import User from "@/models/User";  

export async function GET(request) {  
    try {  
        const { userId } = getAuth(request);  
        console.log("User ID:", userId); // This is the clerk user ID  

        await connectDB();  

        // Directly search using the string user ID as per your schema  
        const user = await User.findById(userId); // directly using userId  

        console.log("Found User:", user); // Log found user object  

        if (!user) {  
            console.log("User not found for ID:", userId);  
            return NextResponse.json({ success: false, message: "User Not Found" });  
        }  

        // Continue with your logic (e.g., return user data)  
        return NextResponse.json({ success: true, user });  

    } catch (error) {  
        console.error("Error occurred:", error);  
        return NextResponse.json({ success: false, message: error.message });  
    }  
}  