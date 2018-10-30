const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { typeDefs, resolvers } = require('./schema/index');
const { ApolloServer } = require('apollo-server-express');
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        authScope: true
    })
});
server.applyMiddleware({ app }); // app is from an existing express app
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));
