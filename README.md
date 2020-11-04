# How does this work?

There is an nodejs server running an express API in the backend, and a react frontend which uses the API

# How to run it?

Node and NPM are required to run this application.

Install from here: https://nodejs.org/en/download/

from the root directory:

`npm install`

`npm run dev`

if there are any errors, delete the node_modules, run `npm cache clean --force`, delete the package-lock.json file, and then run `npm install`. do this for both the frontend folder and the api folder

The database should be generated on first time run, the site will look kinda empty until its populated with content

To access the report information, log in with a username of `mod` and a password of `mod`
