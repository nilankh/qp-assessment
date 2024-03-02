import { NextFunction, Request, Response } from "express";
import {connect} from '../sqldb';
import {groceryJoiValidation, inventoryJoiValidation} from "../helper/validation"

import { StatusCodes } from "http-status-codes";
import {createGroceryItems, getAllItemGroceryDetails, deleteGroceryItem, updateGroceryItem, updateInventoryItem} from "../models/groceryItems"

export const adminCreateGrocery = async(req: Request, res: Response, next: NextFunction) => {
            
            const conn = await connect();
            await groceryJoiValidation(req, res)
            
            const id = await createGroceryItems(conn, req)
            
            return res.status(200).json({
                status:"success",
                id:id.insertId
                
            })
        

}

export const getAllItemGrocery = async(req: Request, res: Response, next: NextFunction) => {
        const conn = await connect();
        const all_grocery_items = await getAllItemGroceryDetails(conn)
        
        
        return res.status(200).json({
            status:"success",
            all_grocery_items
        })

}

export const deleteItemGrocery = async(req: Request, res: Response, next: NextFunction) => {
    
    if(!req.query.id){
        return res.status(400).json({ "message": 'please the the id' });
    }

    const conn = await connect();
    const data = await deleteGroceryItem(req.query.id, conn)
    return res.status(200).json({
        status:"success"
    })
}

export const updateItemGrocery = async(req: Request, res: Response, next: NextFunction) => {
        if(!req.query.id){
            return res.status(400).json({ "message": 'please the the id' });
            
        }
        await groceryJoiValidation(req, res)
        const conn = await connect()
        const data = await updateGroceryItem(req, req.query.id, conn)
        return res.status(200).json({
            status:"success"
        })

}

export const manageInventoryGrocery = async(req: Request, res: Response, next: NextFunction) => {
        if(!req.query.id){
            return res.status(400).json({ "message": 'please the the id' });
            
        }
        await inventoryJoiValidation(req, res)
        const conn = await connect()
        const data = await updateInventoryItem(req, req.query.id, conn)
        return res.status(200).json({
            status:"success"
        })

}
