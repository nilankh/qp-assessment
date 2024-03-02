import { NextFunction, Request, Response } from "express";
import {connect} from '../sqldb';
import { getAllItemGroceryDetails} from "../models/groceryItems"
import {orderJoiValidation} from "../helper/validation"
import {createOrder} from "../models/groceryItems"

export const getAllGrocery = async(req: Request, res: Response, next: NextFunction) => {
    
    const conn = await connect();
    const all_grocery_items = await getAllItemGroceryDetails(conn)
    
    
    return res.status(200).json({
        status:"success",
        all_grocery_items
    })

}

export const createUserOrder = async(req: Request, res: Response, next: NextFunction) => {
    
    await orderJoiValidation(req, res)

    const conn = await connect();
     await createOrder(req, conn)
    
    return res.status(200).json({
        status:"success"
    })

}