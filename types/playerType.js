var graphql = require('graphql');

var playerType = new graphql.GraphQLObjectType({
    name: 'player',
    fields: {
        id: { type: graphql.GraphQLInt },
        number: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString },
        teamId: { type: graphql.GraphQLInt }
    }
});

module.exports = playerType;