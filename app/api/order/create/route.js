import { inngest } from "@/config/inngest";  
import Product from "@/models/Product";  
import User from "@/models/User";  
import { getAuth } from "@clerk/nextjs/server";  
import { NextResponse } from "next/server";  

export async function POST(request) {  
    try {  
        const { userId } = getAuth(request);  
        const { address, items } = await request.json();  

        // Validate input data  
        if (!address || !items || items.length === 0) {  
            return NextResponse.json({ success: false, message: "Invalid data" });  
        }  

        // Calculate amount using items  
        const amount = await items.reduce(async (accPromise, item) => {  
            const acc = await accPromise; // Await the accumulator  
            const product = await Product.findById(item.product);  
            if (!product) {  
                throw new Error(`Product with ID ${item.product} not found`);  
            }  
            return acc + product.offerPrice * item.quantity;  
        }, Promise.resolve(0)); // Start with an accumulator of 0  

        // Sending order event to Inngest  
        await inngest.send({  
            name: 'order/created',  
            data: {  
                userId,  
                address,  
                items,  
                amount: amount + Math.floor(amount * 0.02), // Apply tax  
                date: Date.now(),  
            }  
        });  

        // Clear user cart  
        const user = await User.findById(userId);  
        if (!user) {  
            return NextResponse.json({ success: false, message: "User not found" });  
        }  

        user.cartItems = {}; // Clear the cart  
        await user.save(); // Save the user data  

        return NextResponse.json({ success: true, message: 'Order Placed' });  

    } catch (error) {  
        console.log(error);        
        return NextResponse.json({ success: false, message: error.message });  
    }  
}  