Find the login credentials in the credentials.txt file in root directory

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

For running the application just clone the Repository and run command "npm i" in both the frontend and backend for installing dependencies then
run command "npm start" for starting frontend
run command "node server.js" for starting backend


for changing database open backend directory and change the MONGO_URL in .env file


Thanks !!






