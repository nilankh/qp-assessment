import { createPool } from "mysql2/promise";

export async function connect(){
    const connection = createPool({
        host: 'localhost',
        user: 'root',
        password: 'NILANKNIKHIL',
        database: 'grocery_items',
        connectionLimit: 10

    })
    return connection
}