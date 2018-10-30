//
const { getSeasonAvailable } = require('../../sevice');

const resolvers = {
    Query: {
        getSeasonAvailable: async (root, args, context) => await getSeasonAvailable(args.league_slug)
    }
};
module.exports = resolvers;
