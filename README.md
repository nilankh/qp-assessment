To execute this program npm run dev is the command

# Adimn api's 

Admin can add grocery items
curl --location 'localhost:3000/api/v1/admin/add/grocery' \
--header 'Content-Type: application/json' \
--data '{
    "product_name":"oil",
    "price":11.2,
    "quantity":1
}'
Get all grocery details
curl --location 'localhost:3000/api/v1/admin/grocery-items/all'

Admin can delete grocery item by id
curl --location --request DELETE 'localhost:3000/api/v1/admin/grocery-items/?id=9'

Admin can update the grocery
curl --location --request PUT 'localhost:3000/api/v1/admin/grocery-items/?id=10' \
--header 'Content-Type: application/json' \
--data '{
    "product_name":"rajma CHAWAL",
    "price":11.2,
    "quantity":1
}'

Admin can manage inventory
curl --location --request PATCH 'localhost:3000/api/v1/admin/grocery-items/manage-inventory/?id=10' \
--header 'Content-Type: application/json' \
--data '{
    "action":"increment",
    "quantity":12
}'

#User api's
User can get grocery items details
curl --location 'localhost:3000/api/v1/user/grocery-items'

User can book order(multple order can book at a time)
curl --location 'localhost:3000/api/v1/user/order' \
--header 'Content-Type: application/json' \
--data '{
    "items":[
        {
          "order_id":10,
          "quantity":11  
        },
        {
          "order_id":12,
          "quantity":11  
        }
    ]
}'

I have attached the postman collection too.



