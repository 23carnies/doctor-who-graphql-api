require("dotenv").config();
const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");
const typeDefs = require("./src/schema");
const resolvers = require("./src/resolvers");

const app = express();

// Create Apollo Server
async function startServer() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
