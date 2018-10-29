//
const { fetchLeagueAPI } = require('../../sevice');

const resolvers = {
    Query: {
        getSeasonAvailable: async (root, args, context) => await fetchLeagueAPI(),
    },
};

// await setWebsiteStatusWidget(args.websiteStatusWidget)
module.exports = resolvers;
