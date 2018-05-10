var cards = [ 
	{
		rank: "queen",
		suite: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suite: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suite: "hearts",
		cardImage: "images/king-of-hearts.png"		
	},
	{
		rank: "king",
		suite: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
	} else {
	console.log("Sorry, try again");	
	}	
};

var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suite)


	if (cardsInPlay.length === 2) {
		checkForMatch();
	}; 
};

flipCard(0);
flipCard(2);








/* https://github.com/GA-WDI/
fundamentals/blob/master/assignment-solutions.md */