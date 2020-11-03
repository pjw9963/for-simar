# How does this work?

There is an nodejs server running an express API in the backend, and a react frontend which uses the API

# How to run it?

from the root directory:

`npm install`

`npm run dev`

if there are any errors, delete the node_modueles, run `npm cache clean --force`, delete the package-lock.json file, and then run `npm install`. do this for both the frontend folder and the api folder

the database should be generated on first time run, the site will look kinda empty until its populated with content

'cd api'
'npm install'
'cd frontend'
'npm install'
'npm run-script run'
