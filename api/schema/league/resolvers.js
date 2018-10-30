const { getLeagues } = require('../../sevice');

const resolvers = {
    Query: {
        getLeagues: async (root, args, context) => {
            return await getLeagues();
        }
    }
};

// await setWebsiteStatusWidget(args.websiteStatusWidget)
module.exports = resolvers;
