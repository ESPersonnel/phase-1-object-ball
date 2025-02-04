// Function Building
// Build a function, numPointsScored that takes in an argument of a player's name and returns the number of points scored for that player.
// Think about where in the object you will find a player's points. How can you iterate down into that level? Think about the return value of your function.
// Build a function, shoeSize, that takes in an argument of a player's name and returns the shoe size for that player.
// Think about how you will find the shoe size of the correct player. How can you check and see if a player's name matches the name that has been passed into the function as an argument?
// Build a function, teamColors, that takes in an argument of the team name and returns an array of that teams colors.
// Build a function, teamNames, that operates on the game object to return an array of the team names.
// Build a function, playerNumbers, that takes in an argument of a team name and returns an array of the jersey number's for that team.
// Build a function, playerStats, that takes in an argument of a player's name and returns a object of that player's stats. Check out the following example of the expected return value of the playerStats function:
// playerStats("Alan Anderson")
// // returns:
// {
//   number: 0,
//   shoe: 16,
//   points: 22,
//   rebounds: 12,
//   assists: 12,
//   steals: 3,
//   blocks: 1,
//   slamDunks: 1
// }
// Build a function, bigShoeRebounds, that will return the number of rebounds associated with the player that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. Use debugger to drop into your function and understand what it is returning and why.

numPointsScored = function(name) {
    var player = game.players[name];
    return player.points;
}

function shoeSize(name) {
    var player = game.players[name];
    return player.shoe;
}

function teamColors(team) {
    var team = game.teams[team];
    return team.colors;
}

function teamNames() {
    var teams = [];
    for (var team in game.teams) {
        teams.push(team);
    }
    return teams;
}

function playerNumbers(team) {
    var team = game.teams[team];
    var numbers = [];
    for (var player in team.players) {
        numbers.push(team.players[player].number);
    }
    return numbers;
}

function playerStats(name) {
    var player = game.players[name];
    return {
        number: player.number,
        shoe: player.shoe,
        points: player.points,
        rebounds: player.rebounds,
        assists: player.assists,
        steals: player.steals,
        blocks: player.blocks,
        slamDunks: player.slamDunks
    }
}

function bigShoeRebounds() {
    var maxShoe = 0;
    var maxRebounds = 0;
    for (var player in game.players) {
        if (game.players[player].shoe > maxShoe) {
            maxShoe = game.players[player].shoe;
            maxRebounds = game.players[player].rebounds;
        }
    }
    return maxRebounds;
}

