
function Player(name) {
	this.name = name;
}

var player1Wins = 0;
var player2Wins = 0;


function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

// Player.prototype.choices = ["rock","paper","scissors","lizard","spock"];

Game.prototype.winner = function(player1, player2){
	if (this.isSamePick()) return "It's a draw!";

	if (this.PAIRS[this.player1.pick+""+this.player2.pick] !== undefined){ 
		player1Wins++;
		return this.player1.pick+" "+this.PAIRS[this.player1.pick+""+this.player2.pick]+" "+this.player2.pick;
	} 
	else { 
		player2Wins++;
		return this.player2.pick+" "+this.PAIRS[this.player2.pick+""+this.player1.pick]+" "+this.player1.pick;
	}
console.log(this.player1.name + "has" + player1Wins);
console.log(this.player2.name + "has" + player2Wins);
}




 Game.prototype.PAIRS =  {

	"scissorspaper"  : "cuts",       //Scissors cuts paper
	"paperrock"      : "covers",     //Paper covers rock
	"rocklizard"     : "crushes",    //Rock crushes lizard
	"lizardspock"    : "poisons",    //Lizard poisons Spock
	"spockscissors"  : "smashes",    //Spock smashes scissors
	"scissorslizard" : "decapitates",//Scissors decapitates lizard
	"lizardpaper"    : "eats",       //Lizard eats paper
	"paperspock"     : "disproves",  //Paper disproves Spock
	"spockrock"      : "vaporizes",  //Spock vaporizes rock
	"rockscissors"   : "crushes"     //Rock crushes scissors
}

Game.prototype.isSamePick = function () {
	return this.player1.pick === this.player2.pick;
}