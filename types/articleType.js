var graphql = require('graphql');

var articleType = new graphql.GraphQLObjectType({
    name: 'article',
    fields: {
        id: { type: graphql.GraphQLInt },
        createdAt: { type: graphql.GraphQLString },
        authorId: { type: graphql.GraphQLInt },
        title: { type: graphql.GraphQLString },
        text: { type: graphql.GraphQLString }
    }
});

module.exports = articleType;