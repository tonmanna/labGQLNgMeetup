const { getLeageTopScore } = require('../../sevice');

const resolvers = {
    Mutation: {
        getLeageTopScore: async (root, args) => await getLeageTopScore(args.league_slug, args.season_slug),
    },
};

// await setWebsiteStatusWidget(args.websiteStatusWidget)
module.exports = resolvers;
