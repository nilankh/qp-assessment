
// import {customeError} from "../helper/helper"

export const createGroceryItems = async(connection: any, req: any) => {
    const {product_name, price, quantity} = req.body

    const cmd = `
        INSERT INTO 
        items (product_name,
            price,
            quantity) 
        VALUES('${product_name}', '${price}', '${quantity}')
    `
    const k = await connection.query(cmd)
    
    return k[0]
}

export const getAllItemGroceryDetails = async(connection:any) => {
    const grocery_query = `select * from items`
    const query_output = await connection.query(grocery_query)
    return query_output[0]
}

export const deleteGroceryItem = async(id:any,connection:any) => {
    const grocery_query = `delete from items where id=${id}`;
    const query_output = await connection.query(grocery_query);
   
    return query_output
}

export const updateGroceryItem = async(req:any, id:any, connection:any) => {

    
    const grocery_query = `UPDATE items SET product_name = '${req.body.product_name}', price = ${req.body.price}, quantity = ${req.body.quantity} WHERE id=${id}`;
    
    const query_output = await connection.query(grocery_query);
    
    return query_output
}

export const updateInventoryItem = async(req:any, id:any, connection:any) => {

    
    const grocery_query = `UPDATE items SET quantity = ${req.body.quantity} WHERE id=${id}`;
    
    const query_output = await connection.query(grocery_query);
    
    return query_output
}

export const createOrder = async(req:any, connection:any) => {
    
    for (const order of req.body.items) {
        const cmd = `
            INSERT INTO 
            order_booked (order_id,
                quantity)
            VALUES(${order.order_id},${order.quantity})
        `
        await connection.query(cmd);
        
    }
    return 
}

