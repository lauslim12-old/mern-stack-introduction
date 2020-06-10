# MERN Stack Architecture
Repository for my tutorial on how to set up your first MERN Stack architecture. The written tutorial is still in progress by me!

## Architecture and Philosophies
* (M)ariaDB / (M)ongoDB
* (E)xpress JS
* (R)eact JS
* (N)ode JS

## Design Architecture
For rapid application development, I use Bootstrap's Dark Theme with standard React.js color theme.

## About MERN Stack
This is an introduction to MERN Stack for people who are unfamiliar with the concept. I use MariaDB as another way to pronounce the "M" word. The reason is because nowadays, it is still a market requirement to use a relational database. Utilizing MongoDB is also possible - and I will make this repository into two versions. One with MariaDB, and the other with MongoDB.

## Dependencies
* Axios
* Body Parser
* Bootstrap
* CORS
* Dotenv
* Express.js
* MariaDB
* React.js
* Sequelize

## Features
* As this is a basic yet powerful tutorial, I will be taking Angular's material: CRUD'ing a Todo app.
* Create a Todo
* Read a Todo
* Update a Todo
* Delete a Todo

## Installations and Usage
* First, do `git clone repo` to fetch it to your local machine.
* Use your command line to `cd repo-path`. Make sure to open two command lines, one for the front-end, and one for the back-end.
* Change the `backend/.env.example` variables to any of your webserver setup. Then, rename it to `.env`. If you have used the initial settings for the backend settings, you should be able to use this application without changing the variables. You just need to rename it to `.env`.
* Finally, use `npm install` in the root folder, and also do that command in the `backend` folder to install all the required dependencies.
* Profit!

## Deployment Notes
If you want to deploy this to your web server, you have to do the following:
* In the `package.json` file, add a key-value pair named `homepage: your-homepage-site`.
* Change the `.env.development` file variables. The ones that you have to change are the `REACT_APP_DIRECTORY`, which is the folder where the application is located. If this application is hosted in root, then leave at it is (/), else change it to your subfolder, aka `/react-app-test`. After it is done, then rename to `.env`.
* In the `src/components/Header.js`, I have already placed the `BrowserRouter` basename to be taking from the `.env` file. There is no need to manipulate anything, unless you want to change the settings.
* After that, run this command: `npm run build`.
* When the build process is done, you can copy the `build` folder to your webserver, whether it is `htdocs`, your `public_html`, your subdomain, or you can even create your own server-side setup with Express.js.