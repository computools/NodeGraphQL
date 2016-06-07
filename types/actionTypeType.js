var graphql = require('graphql');

var actionTypeType = new graphql.GraphQLObjectType({
    name: 'actionType',
    fields: {
        id: { type: graphql.GraphQLInt },
        name: { type: graphql.GraphQLString }
    }
});

module.exports = actionTypeType;