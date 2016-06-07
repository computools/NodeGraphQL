"# GraphQL_Express_API" 
Get all articles:
http://mokhnachev.info:3000/articles?query={allArticles{id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={allArticles{id,createdAt,authorId,title,text}}

Get author's articles:
http://mokhnachev.info:3000/articles?query={articlesByAuthorId(authorId:1){id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={articlesByAuthorId(authorId:1){id,createdAt,authorId,title,text}}

Get article by id:
http://mokhnachev.info:3000/articles?query={articleById(id:1){id,createdAt,authorId,title,text}}
http://mokhnachev.info:3000/articles?query={articleById(id:1){id,createdAt,authorId,title,text}}

Get author by id:
http://mokhnachev.info:3000/authors?query={authorById(id:2){id,createdAt,username}}
http://mokhnachev.info:3000/authors?query={authorById(id:2){id,createdAt,username}}

Get all authors:
http://mokhnachev.info:3000/authors?query={allAuthors{id,createdAt,username}}
http://mokhnachev.info:3000/authors?query={allAuthors{id,createdAt,username}}

----

Get team by id:
http://mokhnachev.info:3000/teams?query={getTeamById(id:1){id,name}}

Get all teams:
http://mokhnachev.info:3000/teams?query={getAllTeams{id,name}}

Get player by id:
http://mokhnachev.info:3000/players?query={getPlayerById(id:1){id,number,name,teamId}}

Get players by team id:
http://mokhnachev.info:3000/players?query={getPlayersByTeamId(teamId:1){id,number,name,teamId}}

Get all players:
http://mokhnachev.info:3000/players?query={getAllPlayers{id,number,name,teamId}}

Get match by id:
http://mokhnachev.info:3000/matches?query={getMatchById(id:1){id,date,time,receivingTeamId,guestTeamId}}

Get all matches:
http://mokhnachev.info:3000/matches?query={getAllMatches{id,date,time,receivingTeamId,guestTeamId}}

Get matches by date:
http://mokhnachev.info:3000/matches?query={getMatchesByDate(date:%22050616%22){id,date,time,receivingTeamId,guestTeamId}}

Get action by id:
http://mokhnachev.info:3000/actions?query={geActionById(id:1){id,matchId,actionTypeId,time,playerId}}

Get all actions:
http://mokhnachev.info:3000/actions?query={getAllActions{id,matchId,actionTypeId,time,playerId}}

Get actions by match id:
http://mokhnachev.info:3000/actions?query={getActionsByMatchId(matchId:1){id,matchId,actionTypeId,time,playerId}}

Get action by player id:
http://mokhnachev.info:3000/actions?query={getActionsByPlayerId(playerId:10){id,matchId,actionTypeId,time,playerId}}

Get actions by action type id:
http://mokhnachev.info:3000/actions?query={getActionByTypeId(actionTypeId:1){id,matchId,actionTypeId,time,playerId}}

Get action type by id:
http://mokhnachev.info:3000/actionTypes?query={getActionTypeById(id:1){id,name}}

Get all action types:
http://mokhnachev.info:3000/actionTypes?query={getAllActionTypes{id,name}}