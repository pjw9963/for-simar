# How does this work?

There is an nodejs server running an express API in the backend, and a react frontend which uses the API

# How to run it?

until someone sets up a script, cd into the `api` folder and then run `npm start`
then with a new terminal, cd into the `frontend` folder and run `npm start`
The server should run on port 3001, and react on 3000

if there are any errors, delete the node_modueles, run `npm cache clean --force`, delete the package-lock.json file, and then run `npm install`. do this for both the frontend folder and the api folder

the database should be generated on first time run, the site will look kinda empty until its populated with content

'cd api'
'npm install'
'cd frontend'
'npm install'
'npm run-script run'
