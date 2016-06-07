var graphql = require('graphql');
var authors = require('../data/authors');
var authorType = require('../types/authorType');

var authorSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'authorData',
        fields: {
            authorById: {
                type: authorType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var authorById = null;
                    authors.forEach(function (item) {
                        if(!authorById) {
                            if(args.id === item.id) {
                                authorById = item;
                            }
                        }
                    });
                    return authorById;
                }
            },
            allAuthors: {
                type: new graphql.GraphQLList(authorType),
                resolve: function (_, args) {
                    return authors;
                }
            }
        }
    })
});

module.exports = authorSchema;