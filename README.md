# Rule Of Thumb

Rule Of Thumb voting system
v 1.0 Jan 2019

## Getting Started

The solution contains all de build pipeline necessary to deploy the Front End App, Web API and Database. Follow the instructions in order to run the Solution in your dev machine

### Front End App

To run the front end app, cd into the App directory and run:

```
    npm i
```

to install all dependencies. Then set the API URL in the .env file in order to receive request from the back-end.

Finally, run the following command in order to run the application in your local machine (By default the App port is 3000)

```
    npm run dev
```

The Front End is configured to fetch data from the Back-End, so please start the Web API Project in order to run the solution smoothly.

### Web API

In order to run the Api project, cd into the Api folder and run

```
npm run dev

```

You may find that the project encounters an error before executing the solution pipeline given that there are some environment variables that you first must set up.

First set:

```
If you are using mac:

    export ruleOfThumb_jwtPrivateKey=<AnyPrivateKeyHere>
    export ruleOfThumb_db=<AnyMongoDbConnectionString>

If you are using windows command line:

    set ruleOfThumb_jwtPrivateKey=<AnyPrivateKeyHere>
    set ruleOfThumb_db=<AnyMongoDbConnectionString>

If you are using Windows Powershell:

    $env:ruleOfThumb_jwtPrivateKey="<AnyPrivateKeyHere>"
    $env:ruleOfThumb_db="<AnyMongoDbConnectionString>"
```

Then run again the dev command.

To user a local MongoDB database just type: 'mongodb://localhost:/rule-of-thumb'. Also don't forget to run `mongod` if you are using your local instance of MongoDB.

#### Seed database

After setting the environment variables run the following command in the Api folder:

```
    node seed.js
```

This will seed the database with some initial information

By default, the API Port is port 5000, you can change this in the server.js file or add a PORT environment variable with your desired port number (if you change the default port number, don't forget to point to the right port in the front-end as well),

#### Authentication

The API is protected by a JWT Token authentication schema, to access this API you will first need to Authorize yourself.

In order to authenticate, you will need to send an HTTP Request via Postman or any HTTP Request method that you like.

```

For a request in your local machine
https://localhost:{port}/api/auth/

Method: POST

Body:
{
	"email": "{User Email}",
	"password": "{User Password}"
}

```

The if the user name and password are correct, the service will respond with a body containing the JWT Token.

```
Response example:

"token": "{JWT Token here}",


```

Save this JWT token in your clipboard, you will need it to authorize youself to use the API

#### Get all candidate

To get all the candiates make a POST request with the following information

```
For a request in your local machine:
https://localhost:{port}/api/candidates

Method: GET

```

Response example:

```
[
    {
        "thumbsUp": 12,
        "thumbsDown": 0,
        "_id": "5c43b797b2f72a062eb6ae96",
        "name": "Kanye West",
        "imageUrl": "kanye.png",
        "offset": "1 month ago",
        "industry": "Entertainment",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "__v": 0
    },
    {
        "thumbsUp": 0,
        "thumbsDown": 0,
        "_id": "5c43b797b2f72a062eb6ae98",
        "name": "Kristina Fernándes de Kirchner",
        "imageUrl": "kristina.png",
        "offset": "1 month ago",
        "industry": "Politics",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "__v": 0
    },
    {
        "thumbsUp": 0,
        "thumbsDown": 0,
        "_id": "5c43b797b2f72a062eb6ae99",
        "name": "Malala Yousafzai",
        "imageUrl": "malala.png",
        "offset": "1 month ago",
        "industry": "Entertainment",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "__v": 0
    },
    {
        "thumbsUp": 0,
        "thumbsDown": 0,
        "_id": "5c43b797b2f72a062eb6ae97",
        "name": "Mark Zuckerberg",
        "imageUrl": "mark.png",
        "offset": "1 month ago",
        "industry": "Business",
        "information": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
        "__v": 0
    }
]
```

## Built With

- Front End:
  - Webpack
  - Sass
  - React
- Back End
  - Runtime: Node.js
  - Framework: Express
  - Database: MongoDB

## Authors

- **Hernán Cote** - _Initial work_ - [HernanCote](https://github.com/HernanCote)
