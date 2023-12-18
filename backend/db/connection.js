import mongoose from "mongoose";

const connectedDB = async() => {
   try {
     const {connection} = await mongoose.connect(process.env.MONGO_URI);
     console.log("mongodb is CONNECTED ON HOST", connection.host);
   } catch (error) {
        console.log("mongodb connection fail :", error);
   }
}


export default connectedDB