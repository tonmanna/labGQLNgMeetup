const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { typeDefs, resolvers } = require('./schema/index');
const { ApolloServer } = require('apollo-server');
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});

app.listen(3000, () => console.log('Express started'));
