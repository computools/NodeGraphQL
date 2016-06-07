var graphql = require('graphql');
var graphqlHTTP = require('express-graphql');
var express = require('express');

var articleSchema = require('./schemas/articleSchema');
var authorSchema = require('./schemas/authorSchema');
var teamSchema = require('./schemas/teamSchema');
var playerSchema = require('./schemas/playerSchema');
var matchSchema = require('./schemas/matchSchema');
var actionSchema = require('./schemas/actionSchema');
var actionTypeSchema = require('./schemas/actionTypeSchema');

var app = express();
app.use('/authors', graphqlHTTP({ schema: authorSchema, pretty: true }));
app.use('/articles', graphqlHTTP({ schema: articleSchema, pretty: true }));
app.use('/teams', graphqlHTTP({ schema: teamSchema, pretty: true }));
app.use('/players', graphqlHTTP({ schema: playerSchema, pretty: true }));
app.use('/matches', graphqlHTTP({ schema: matchSchema, pretty: true }));
app.use('/actions', graphqlHTTP({ schema: actionSchema, pretty: true }));
app.use('/actionTypes', graphqlHTTP({ schema: actionTypeSchema, pretty: true }));

app.listen(3000);