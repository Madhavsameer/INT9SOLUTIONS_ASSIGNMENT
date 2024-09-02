Steps to run the application in your local machine:- 

Step 1: Clone the repository

Step 2: Run command "npm i" in the backend and fronetnd directory for installing all the dependencies 

step 3: Run command "node server.js" for running backend server in backend directory for running backend server

step 4: Run command "npm start" in frontend directory to run the frontend 

step 5: For logging in you can use {username: sameer,  password: 123456789}

Note: if you want to modify any data or change it you can access my cloud based database using the following url in mongodb database :-
mongodb+srv://madhav:srpan@madhav.maixxih.mongodb.net
then you can change data in my int9solutions database:-


For creating a user credentials Send a request to the below api using postman with the json format given below:- 
URL: https://int9solutions-assignment-1.onrender.com/api/auth/register
{
  "username": "sameer",
  "password": "123456789"
}

For creating a Seller data Send a request to the below api using postman with the json format below :-
URL: https://int9solutions-assignment-1.onrender.com/api/sellers

{
  "name": " Aditya Yadav",
  "rating": 5,
  "review": "Amazing quality"
}

for changing database open backend directory and change the MONGO_URL following databse name in .env file use your own local MONGO_URL or MongoDb Atlas URL following databse name


Thanks !!






