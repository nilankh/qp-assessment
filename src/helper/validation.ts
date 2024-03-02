import { Response,Request } from "express"
import { StatusCodes } from "http-status-codes"
import { exit } from "process"
// import {customeError} from "../helper/helper"




const joi = require("joi");

export const groceryJoiValidation = async(req:Request, res: Response) => {

    const schema = joi.object({
        product_name: joi.string().alphanum().min(3).max(25).trim(true).required(),
        
        price: joi.number().min(1),
        quantity: joi.number().integer()
    });


    const {error} = schema.validate(req.body)
    
    if(error){
        return res.status(400).json({ error: error.details[0].message });
    }
    
}

export const inventoryJoiValidation = async(req:Request, res: Response) => {

    const schema = joi.object({
        action: joi.string().valid('increment', 'decrement').required(),
        quantity: joi.number().integer().required()
    });


    const {error} = schema.validate(req.body)
    
    if(error){
        return res.status(400).json({ error: error.details[0].message });
    }
    
}

export const orderJoiValidation = async(req:Request, res: Response) => {

    const itemsSchema = joi.array().items(
        joi.object({
            order_id: joi.number().integer().min(1).required(),
            quantity: joi.number().integer().required()
        })
    ).required();
    
    const schema = joi.object({
        items: itemsSchema
    }).required();
    const {error} = schema.validate(req.body)
    
    if(error){
        return res.status(400).json({ error: error.details[0].message });
    }
    
}

