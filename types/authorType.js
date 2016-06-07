var graphql = require('graphql');

var userType = new graphql.GraphQLObjectType({
    name: 'user',
    fields: {
        id: { type: graphql.GraphQLInt },
        createdAt: { type: graphql.GraphQLString },
        username: { type: graphql.GraphQLString }
    }
});

module.exports = userType;