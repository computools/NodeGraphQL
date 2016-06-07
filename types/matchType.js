var graphql = require('graphql');

var matchType = new graphql.GraphQLObjectType({
    name: 'match',
    fields: {
        id: { type: graphql.GraphQLInt },
        date: { type: graphql.GraphQLString },
        time: { type: graphql.GraphQLString },
        receivingTeamId: { type: graphql.GraphQLInt },
        guestTeamId: { type: graphql.GraphQLInt }
    }
});

module.exports = matchType;