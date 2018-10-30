const { getLeageTopScore } = require('../../sevice');

const resolvers = {
    Query: {
        getLeageTopScore: async (root, args) => await getLeageTopScore(args.leagueInput.league_slug, args.leagueInput.season_slug)
    }
};

// await setWebsiteStatusWidget(args.websiteStatusWidget)
module.exports = resolvers;
