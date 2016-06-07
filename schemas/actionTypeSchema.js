var graphql = require('graphql');

var actionTypes = require('../data/actionTypes.json');
var actionTypeType = require('../types/actionTypeType');

var teamSchema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'actionTypeData',
        fields: {
            getActionTypeById: {
                type: actionTypeType,
                args: {
                    id: { type: graphql.GraphQLInt }
                },
                resolve: function (_, args) {
                    var actionTypeById = null;
                    actionTypes.forEach(function (item) {
                        if(!actionTypeById) {
                            if(args.id === item.id) {
                                actionTypeById = item;
                            }
                        }
                    });
                    return actionTypeById;
                }
            },
            getAllActionTypes: {
                type: new graphql.GraphQLList(actionTypeType),
                resolve: function (_, args) {
                    return actionTypes;
                }
            }
        }
    })
});

module.exports = teamSchema;