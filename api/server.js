const express = require("express");
const bodyParser = require('body-parser')
const {
  fetchLeagueAPI
} = require('./endpoint');
const app = express();

app.use(bodyParser.json());
app.get('/league', fetchLeagueAPI);

const {
  ApolloServer,
  gql
} = require('apollo-server');

const books = [{
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const typeDefs = gql `
  type Book {
    title: String
    author: String
  }
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({
  url
}) => {
  console.log(`🚀  Server ready at ${url}`);
});

app.listen(3000, () => console.log("Express started"));
