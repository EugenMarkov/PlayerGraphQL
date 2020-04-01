require("dotenv").config();
const { ApolloServer } = require("apollo-server-express");
const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./graphql/schema.js");
const cors = require("cors");
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });
const app = express();
app.use(cors());
server.applyMiddleware({ path: "https://playergraphql.herokuapp.com/api", app });
const db = require("./config/keys").mongoURI;


mongoose
  .connect(db, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
