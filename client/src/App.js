import { useState } from "react";
import Login from "./components/login/login.js";

import Home from "./components/home/home.js";
import './App.css';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  
  const [isLoggedin, setIsLoggedin] = useState(false)
  const onLogin = ({user, pass}) => {
    if(user && user !== "" && pass && pass !== "") {
      setIsLoggedin(true)
    }
  }

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {
          !isLoggedin 
          ? <Login onSumit={onLogin} />
          : <Home></Home>
        }
      </div>
    </ApolloProvider>
  );
}

export default App;
