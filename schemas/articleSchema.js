var graphql = require('graphql');
var articles = require('../data/articles');
var articleType = require('../types/articleType');

var articleSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'articleData',
        fields: {
            articleById: {
                type: articleType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var articleById = null;
                    articles.forEach(function (item) {
                        if(!articleById) {
                            if(args.id === item.id) {
                                articleById = item;
                            }
                        }
                    });
                    return articleById;
                }
            },
            allArticles: {
                type: new graphql.GraphQLList(articleType),
                resolve: function (_, args) {
                    return articles;
                }
            },
            articlesByAuthorId: {
                type: new graphql.GraphQLList(articleType),
                args: {
                    authorId: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var articlesByAuthor = [];
                    articles.forEach(function (item) {
                        if(item.authorId === args.authorId) {
                            articlesByAuthor.push(item);
                        }
                    });
                    return articlesByAuthor;
                }
            }
        }
    })
});

module.exports = articleSchema;