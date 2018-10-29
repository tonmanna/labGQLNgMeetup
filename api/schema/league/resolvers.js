const { fetchLeagueAPI } = require('../../sevice');

const resolvers = {
    Query: {
        leagues: async (root, args, context) => await fetchLeagueAPI(),
    },
    Mutation: {
        getLeagebySlug: (root, args) => [],
    },
};

// await setWebsiteStatusWidget(args.websiteStatusWidget)
module.exports = resolvers;
