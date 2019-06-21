# Google Vision Test Backend API

The backend API for my google vision accuracy test. The main repo with full documentation is found [here](https://github.com/gracedorgan/google-vision-test).

## Features

**Current Capabilities:**
* The backend stores all photos in the starting dataset, including the image url, th google vision tag, and the user input as the whether the google tag is correct or not.
* A special "dummy" photo in the database keeps track of the number of times the users think a google vision tag is correct or incorrect.

## Architecture
Services:
* mongoDB backend

Linter/Testing:
* Eslint with Airbnb Style Guide

Framework:
* React

Libraries:
* Redux
* Babel
* Axios

## Setup

To publish to heroku 
1. Clone the repository and `cd google-vision-test-api`
2. `yarn`
3. Create and account/log in to Heroku and create a new project.
4. Now you need to connect to a mongo database. Go to Resources and search for “mLab” under Add-Ons. Provision the Sandbox version of mLab for your app. This will automatically set a MONGODB_URI config variable so once you push your code to Heroku it will connect to this new mongo database. You’ll need to enter in a credit card but it is free so it won’t be charged.
5. Follow the steps under “Deploy Using Heroku Git”. But really all you need is to add a new git remote - find your heroku git URL by going to “Settings” and then do git remote add heroku `https://git.heroku.com/url-here`.
6. To host on heroku all you need to do is `git push heroku master`, this will push your code and run the yarn command that is listed in your Procfile to launch your app.
7. in the front end file, in `actions/index.js`, you need to change the const `ROOT_URL` to equl the url for your heroku app.

To run locally:
`yarn dev`

## Deployment

This is deployed to heroku [here](https://google-vision-test-api.herokuapp.com/)

## Authors
* Grace Dorgan '21
