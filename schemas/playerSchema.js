var graphql = require('graphql');

var players = require('../data/players.json');
var playerType = require('../types/playerType');

var playerSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'playerData',
        fields: {
            getPlayerById: {
                type: playerType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var playerById = null;
                    players.forEach(function (item) {
                        if(!playerById) {
                            if(args.id === item.id) {
                                playerById = item;
                            }
                        }
                    });
                    return playerById;
                }
            },
            getPlayersByTeamId: {
                type: new graphql.GraphQLList(playerType),
                args: {
                    teamId: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var playersByTeamId = [];
                    players.forEach(function (player) {
                        if(player.teamId == args.teamId) {
                            playersByTeamId.push(player);
                        }
                    });
                    return playersByTeamId;
                }
            },
            getAllPlayers: {
                type: new graphql.GraphQLList(playerType),
                resolve: function (_, args) {
                    return players;
                }
            }
        }
    })
});

module.exports = playerSchema;