var graphql = require('graphql');

var actionType = new graphql.GraphQLObjectType({
    name: 'action',
    fields: {
        id: { type: graphql.GraphQLInt },
        matchId: { type: graphql.GraphQLInt },
        actionTypeId: { type: graphql.GraphQLInt },
        time: { type: graphql.GraphQLString },
        playerId: { type: graphql.GraphQLInt }
    }
});

module.exports = actionType;