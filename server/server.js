const express = require('express');
//Initiate the apollo-server-express (required)
const { ApolloServer } = require('apollo-server-express');
//Initiate the middleware (required)
const {authMiddleware} = require('./utils/auth');

const path = require('path');
//db connection
const db = require('./config/connection');
//connects to the index.js in that route
const routes = require('./routes');

//index.js: Export your typeDefs and resolvers.
const {typeDefs, resolvers} = require('./schemas');

const app = express();
const PORT = process.env.PORT || 3001;

//WE CLEARED THIS PART ON THE EXPLANATION.  WOOT
let server = null;
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware
  });
  
  //integrate Apollo server with Express
  await server.start();
  server.applyMiddleware({ app });
}



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  //This is the thing that connects to the client folder.  This is also the reason why "routes" is NEVER used in the "server" folder

  //NOTE:  THIS IS FOR THE PACKAGE.JSON IN THE CLIENT FOLDER
  app.use(express.static(path.join(__dirname, '../client/build')));
}

//Get the index.html from the client build
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
})

//The reason why this is taken out is because if we were to use this, we'll be using the localhost method.  We're trying to connect this to a client server, not a server itself.  Therefore, this needs to be commented out.

//app.use(routes);


db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});