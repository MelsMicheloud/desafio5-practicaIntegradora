import { connect } from "mongoose"

export const connectDB = async ()=>{
    try {
        await connect('mongodb+srv://Db-ecommerce1:Lm0B2SIOL9eCrjnc@cluster0.3mxdjl3.mongodb.net/ecommerce')
        console.log('Base de datos conectada')
    } catch (err) {
        console.log(err)
    }
}