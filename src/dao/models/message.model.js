import { Schema, model } from "mongoose"

const messageSchema = new Schema({
    user: String,
    message: String,
    isActive: {
        type: Boolean,
        default: true
    }
})

export default model('messages', messageSchema)