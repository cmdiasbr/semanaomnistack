const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = "mongodb+srv://omnistack:120120@cluster0-wiktt.mongodb.net/omnistack?retryWrites=true"
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("test").collection("devices");
   // perform actions on the collection object
   client.close();
});