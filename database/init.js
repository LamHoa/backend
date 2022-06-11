import mongoose from "mongoose"

const uri = process.env.URL_CONNECT_MONGO || "mongodb+srv://giang:giangvippro@cluster0.pffyt.mongodb.net/recipe?retryWrites=true&w=majority";
const database = 'recipe'; // REPLACE WITH YOUR DB NAME
const connectMongo= async ()=> {
  try {
     mongoose.connect(uri ,{ useNewUrlParser: true, useUnifiedTopology: true }, ()=> console.log("Mongoose is connected"))
  } catch (error) {
    console.log(error)
  }
}
export const dbconnection= mongoose.connection
export default connectMongo