const fs = require('fs');
const { merge } = require('lodash');
const { gql } = require('apollo-server-express');

const leagueTypeDefs = fs.readFileSync(__dirname.concat('/league/schema.gql'), 'utf8');
const leagueResolvers = require('./league/resolvers');
const seasonTypeDefs = fs.readFileSync(__dirname.concat('/season/schema.gql'), 'utf8');
const seasonResolvers = require('./season/resolvers');
const topscoreTypeDefs = fs.readFileSync(__dirname.concat('/topscore/schema.gql'), 'utf8');
const topscoreResolvers = require('./topscore/resolvers');

const typeDefs = gql(leagueTypeDefs.concat([seasonTypeDefs, topscoreTypeDefs]));
const resolvers = merge(leagueResolvers, seasonResolvers, topscoreResolvers);
module.exports = {
    typeDefs: typeDefs,
    resolvers: resolvers
};
