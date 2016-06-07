var graphql = require('graphql');

var matches = require('../data/matches.json');
var matchType = require('../types/matchType');

var teamSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'matchData',
        fields: {
            getMatchById: {
                type: matchType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var matchById = null;
                    matches.forEach(function (item) {
                        if(!matchById) {
                            if(args.id === item.id) {
                                matchById = item;
                            }
                        }
                    });
                    return matchById;
                }
            },
            getAllMatches: {
                type: new graphql.GraphQLList(matchType),
                resolve: function (_, args) {
                    return matches;
                }
            },
            getMatchesByDate: {
                type: new graphql.GraphQLList(matchType),
                args: {
                    date: { type: graphql.GraphQLString }
                },
                resolve: function (_, args) {
                    var matchesByDate = [];
                    matches.forEach(function (match) {
                        if(match.date == args.date){
                            matchesByDate.push(match)
                        }
                    });
                    return matchesByDate;
                }
            }
        }
    })
});

module.exports = teamSchema;