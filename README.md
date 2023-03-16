# URL shortner


 ## Backend Service:

 run the following command in the root directory.

```
 cd short-url-backend
 npm install
 node index.js
```
Test API :

Create short URL : 
```
curl --location --request POST 'localhost:3001' \
--header 'Content-Type: application/json' \
--data-raw '{"url":"YOUR-URL"}'

//replace "YOUR-URL" with the URL that to be shortned.
```

```
API RESPONSE:
 1. Success: Status code: 201
        {
            "message": "url hash generated",
            "urlhash": "HASH"
        }


 2. Failed : Status code: 400 / 500
     400 - Bad Request
     500 - Internal server error
```

To load the Shortned URL 

```
curl --location --request GET 'localhost:3001/HASH'

// replace HASH with "urlhash" in create api
```
Check Postman colletion(**"URL Shortner.postman_collection"**) for API Tool testing.


# (Optional- FrontEnd)


### **Make sure the backend service is up and running**

Run the following command in the root directory.

``` 
cd front-end
npm install
npm start
```
Front end works in PORT **3000**

Load [React-app](localhost:3000)


