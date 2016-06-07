var graphql = require('graphql');

var actions = require('../data/actions.json');
var actionType = require('../types/actionType');

var actionSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'actionData',
        fields: {
            geActionById: {
                type: actionType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var actionById = null;
                    actions.forEach(function (item) {
                        if(!actionById) {
                            if(args.id === item.id) {
                                actionById = item;
                            }
                        }
                    });
                    return actionById;
                }
            },
            getAllActions: {
                type: new graphql.GraphQLList(actionType),
                resolve: function (_, args) {
                    return actions;
                }
            },
            getActionsByMatchId: {
                type: new graphql.GraphQLList(actionType),
                args: {
                    matchId: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var actionsByMatchId = [];
                    actions.forEach(function(action){
                        if(action.matchId == args.matchId){
                            actionsByMatchId.push(action);
                        }
                    });
                    return actionsByMatchId;
                }
            },
            getActionsByPlayerId: {
                type: new graphql.GraphQLList(actionType),
                args: {
                    playerId: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var actionsByPlayerId = [];
                    actions.forEach(function(action){
                        if(action.playerId == args.playerId){
                            actionsByPlayerId.push(action);
                        }
                    });
                    return actionsByPlayerId;
                }
            },
            getActionByTypeId: {
                type: new graphql.GraphQLList(actionType),
                args: {
                    actionTypeId: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var actionsByActionTypeId = [];
                    actions.forEach(function(action){
                        if(action.actionTypeId == args.actionTypeId){
                            actionsByActionTypeId.push(action);
                        }
                    });
                    return actionsByActionTypeId;
                }
            }
        }
    })
});

module.exports = actionSchema;