import { Request, Response, NextFunction } from "express";
import * as itemService from "../services/itemService";

// export async and returns back in promise function
export const getAllItems = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    // fetching all items from itemsService and storing it in items
    // if successful, status in 200, prints message items received
    try {
        const items = await itemService.fetchAllItems();
        res.status(200).json({message: "Items Received", data: items});
    }catch(error){
        // if error, pass it to the next function 
        next(error);
    }
};

export const createItem = async (
    req: Request,
    res: Response,
    next: NextFunction    
): Promise<void> => {
    try {
        const newItem = await itemService.createItem(req.body);
        // 201 means successful creation
        res.status(201).json({message: "Item created", data: newItem});
    }catch(error){
        next(error);
    }
};

export const updateItem = async(
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const updatedItem = await itemService.updateItem(
            req.params.id,
            req.body
        );
        res.status(200).json({message: "Item updated", data:updatedItem});
    }catch(error){
        next(error);
    }
};

export const deleteItem = async(
    req: Request, 
    res: Response,
    next: NextFunction
): Promise<void> => {
    try{
        await itemService.deleteItem(req.params.id);
        res.status(200).json({message: "Item deleted"});
    }catch(error){
        next(error);
    }
};