# Unveil - Useful Github user info display

This project is deployed on [Heroku](https://unveil-git.herokuapp.com).

## To run locally

Once the project is cloned, install all the necessary requirements using requirements.txt like so

#### `pip install -r requirements.txt` 

To connect to MongoDB, set an environment with key and value pair as shown

#### `MONGODB_URL={mongodb://localhost:27017}|{Mongo Atlas cluster connection string}`

Other database related information like database name, collection name should also be set up in environment

#### `DATABASE_NAME={your database name}`

Two collections are used for user information and repository information

#### `USER_COLLECTION={your user collection name}`
#### `REPOS_COLLECTION={your repos collection name}`

Github Personal Access Token is needed to query using Github API without 60 rate limit. Using Personal Access Token gives us a rate limit of 5000 per hour which should be enough for our use. This should also be set up in the environment as
#### `PERSONAL_ACCESS_TOKEN={your Github account personal access token}`

After installation of required packages and once the environment is set up. 


App can be run by 
#### `python wsgi.py`

This starts running the server on `localhost:5000`. \
This can be viewed on your browser

## Backend

Backend for the application is developed using __Flask Python framework__ .\
All the related code can be found in __flask_server__ package in the application

### APIs

There are 3 available APIs : 

##### `/user/<username>`
This API is called to fetch the details of user with Github username __username__. The API first searches in the database and returns document if it exists. If the user is being searched for the first time, details are fetched using Github User API. All the repository information is also fetched and stored in the database. 

##### `/user/repos/<username>`
This API is called to get all the repos of the user __username__

##### `/users`
This API is called to retreive all the users currently stored on the database ranked by number of public repos

## Database

Storing of different coupons is essential for the working of the application.

__MongoDB__ is used as the database for the application.

Application hosted on [Heroku](https://unveil-git.herokuapp.com) is connected to a __cluster__ on __MongoDB Atlas__

## Frontend

This is implemented using __React js__. All the related code can be found in __react_app__ package in the application.

Libraries used : 
#### `chartjs`
#### `react-chartjs-2`
