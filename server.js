require("dotenv").config();
// const { ApolloServer } = require("apollo-server");
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
// const graphqlHTTP = require("express-graphql");
// const schema = require("./graphql/schema.js");
const typeDefs = require("./graphql/schema.js");
const cors = require("cors");
const resolvers = require('./graphql/resolvers');



const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use(cors());
server.applyMiddleware({ app });
const db = require("./config/keys").mongoURI;


mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



// app.use(
//   "/api/movies",
//   graphqlHTTP({
//     schema,
//     graphiql: true
//   })
// );



if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

// server
//   .listen({ port: process.env.PORT || 4000 })
//   .then(({ url }) => {
//     console.log(`app running at ${url}`)
//   });


app.listen(port, () => console.log(`Server running on port ${port}`));
