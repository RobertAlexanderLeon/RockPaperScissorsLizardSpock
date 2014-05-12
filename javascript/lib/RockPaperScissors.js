
function Player(name) {
	this.name = name;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

Game.prototype.winner = function(player1, player2) {
	if (this.isSamePick()) return null;

	if (this.PAIRS[this.player1.pick]["beats"] === this.player2.pick){
 		return this.player1;
 	} else {
 		return this.player2;
 	}
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