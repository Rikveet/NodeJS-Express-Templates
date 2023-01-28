# Static file serving with React

- The project is updated to have two folders.
  - [Backend](): This will contain the code of express + node js.
  - [Frontend](): This will contain the React js code or any other Framework that supports front end static build.

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
  - Change directory into backend folder.
  - Run the install and test scripts defined in ./backend/package.json.
  - Change directory to root folder.
  - Change directory to frontend folder.
  - Run the install, test scripts and build defined in ./frontend/package.json.
  - Change directory to backend folder.
  - Delete the current build directory.
  - Change directory to frontend folder.
  - Move the build folder to backend folder.
  - After this user can define their own workflow to deploy the backend folder to a server.
