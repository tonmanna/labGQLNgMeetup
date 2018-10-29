const fs = require('fs');
const { gql } = require('apollo-server');
const leagueTypeDefs = gql(fs.readFileSync(__dirname.concat('/league/schema.gql'), 'utf8'));
const leagueResolvers = require('./league/resolvers');

const typeDefs = Object.assign({}, leagueTypeDefs);
const resolvers = Object.assign({}, leagueResolvers);

module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers,
};
