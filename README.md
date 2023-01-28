# Static file serving with React

- The project is updated to have two folders.
  - [Backend](https://github.com/Rikveet/NodeJS-Express-Templates/tree/NodeJS_Express_React/backend): This will contain the code of express + node js.
  - [Frontend](https://github.com/Rikveet/NodeJS-Express-Templates/tree/NodeJS_Express_React/frontend): This will contain the React js code.
- Changes to the front-end while developement will be reflected at localhost:3000 which is the react's default dev url.
- To test these changes on backend's 'localhost:PORT/', you must run ```npm run build``` in the root folder. Once the build process of the root package.json is completed. You can view the changes on the server's dev link.
- Frontend and backend can develop independently.

# How to run

- Front end
  - cd frontend
  - ```npm install```
  - ```npm start```
- Back end.
  - cd backend
  - ```npm install```
  - ```npm start```

# How to build

In the root folder run the following command: ```npm run build```.<br/>
Upon successful completion of this command react would have built the project and moved the build folder to backend folder.<br/>
This contents inside this folder can then be deployed to a server.<br/>
Build Flow:
  - Implemented in the build command of ./package.json:
    - Change directory into backend folder.
    - Run the install and test scripts defined in ./backend/package.json.
    - Change directory to root folder.
    - Change directory to frontend folder.
    - Run the install, test scripts and build defined in ./frontend/package.json.
    - Change directory to backend folder.
    - Delete the current build directory.
    - Change directory to frontend folder.
    - Move the build folder to backend folder. 
  - To be implemented by user:
    - User can define their own workflow to deploy the backend folder to a server.
