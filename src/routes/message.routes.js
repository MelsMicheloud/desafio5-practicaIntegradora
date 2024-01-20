import { Router } from "express";
import messageModel from "../dao/models/message.model.js";

export const messageRouter = Router()

messageRouter.get('/', (req,res)=>{
    res.render('chat', {})
})
.post('/', async (request, responses)=>{
    try {
        const { body } = request
        const result = await messageModel.create(body)

        responses.send({
            status: 'success',
            result
        })
    } catch (error) {
        console.log(error)
    }
})