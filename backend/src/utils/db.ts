import mongoose from "mongoose";

export const Connect = async (url: string) => {
    try {
       await mongoose.connect(url)
       console.log("Successfully connected to MongoDB"); 
    } catch (error) {
        console.error(error);   
    }
}