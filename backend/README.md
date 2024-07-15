## App Produtos

### Depends on
- NodeJs (v20.13.1)
- Yarn (v1.22.22)

### Installation

#### Docker

You can start the database locally by going to the backend project directory and simply running:
    ```
    docker compose up -d
    ```
This will start a docker container for a **PostgreeSQL database**

>**NOTE:** If you change the database setting in the env file you'll alse need to change in the compose.yaml

#### Application

- After your **configure the database**, go to the backend project directory and follow the instructions bellow:

- First install all the packages needed for the application:
    ```sh
    yarn add
    ```
>**NOTE:** You can use **npm install** or **npm i** instead

- Start the application by running:
    ```sh
    yarn dev
    ```
>**NOTE:** You can use **npm run dev** instead

- Now you can check if the application is ruuning by going to [LOCALHOST:3000](http://localhost:3000)

### Endpoints

1. **/products [POST]** --> Create a new product and returns its data. If the name you provided exists, it returns error. **Data is case sensetive**
Body:
```json
{
    "name": "pen",
    "description": "It writes pretty words",
    "price": "1.50"
}
```
>**NOTE:** You need to send these three keys

2. **/products [GET]** --> Returns the products for that filter by name.

Params:
- filter -> The product name you are looking for
- limit -> The amount of items you want
- page -> The page you need
- orderBy -> Can be 'asc' or 'desc'. It means from A to Z or Z to A, respectfully
>**NOTE:** By default the limit is set to 7, page to 1 and orderBy to 'asc'

3. **/products/:id [GET]** --> Returns the product for that id, if it exists

4. **/products/:id [DELETE]** --> Deletes the product for the id, if it exists. It return the old product data

5. **/products/:id [PUT]** --> Updates the product for the id, if it exists. Ir returns the new product data

#### The responses will be as follow:

- Success
```json
{
    "message": "Products found successfully",
    "xTotalCount": 0,
    "products": [],
    "statusCode": 200
}
```
>**NOTE:** For the get by id endpoint it will return only one product and no xTotalCount key

- Error 
```json
{
    "message": "Not found",
    "errors": {
        "default": "This product does not exists"
    },
    "statusCode": 500
}
```
>**NOTE:** If more errors occur, there won't be a deafault message in the error array

### External Deploy

- After configuration, your will only need to run the following command in your server

```sh
yarn start
```
>**NOTE:** This will execute **tsc && node dist/index.js** and start the application. You can use **npm run start** instead
