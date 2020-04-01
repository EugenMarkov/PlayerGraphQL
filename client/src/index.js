import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import ApolloClient from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "@apollo/react-hooks";
import { resolvers, typeDefs } from "./resolvers";


import Routes from "./routes/Routes";
import theme from "./theme";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();

const client = new ApolloClient({
  cache,
  uri: "graphql",
  resolvers,
  typeDefs,
});

cache.writeData({
  data: {
    isAuthenticated: !!localStorage.getItem("authToken"),
    name: "",
    id: ""
  },
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
