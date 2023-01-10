To running the code, please follow the instructions below:

Download and install Node.js (https://nodejs.org/en/download/)
Download and install Mongosh (https://downloads.mongodb.com/compass/mongosh-1.6.2-win32-x64.zip)
Download and install MongoDB (https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-6.0.3.zip)
Open the terminal, navigate to the folder of the mongosh and use the following codes to create an own DB: I. mongosh II. show dbs //to check your DBs III. use secret IV. show collections //to check collections in the DB V. db.createCollection("secrets") VI. db.secrets.find() //to check the objects in the collection
Please open the VUE folder in your development environment. Open the terminal and run the codes below:

npm i
nodemon index.js
Open a browser: http://localhost:3000/
Share a secret and get it back at the given parameters For more info, please check index.js
