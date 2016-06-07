var graphql = require('graphql');

var teamType = new graphql.GraphQLObjectType({
    name: 'team',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString }
    }
});

module.exports = teamType;