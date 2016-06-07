var graphql = require('graphql');

var teams = require('../data/teams.json');
var teamType = require('../types/teamType');

var teamSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'teamData',
        fields: {
            getTeamById: {
                type: teamType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var teamById = null;
                    teams.forEach(function (item) {
                        if(!teamById) {
                            if(args.id === item.id) {
                                teamById = item;
                            }
                        }
                    });
                    return teamById;
                }
            },
            getAllTeams: {
                type: new graphql.GraphQLList(teamType),
                resolve: function (_, args) {
                    return teams;
                }
            }
        }
    })
});

module.exports = teamSchema;