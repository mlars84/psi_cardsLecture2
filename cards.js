var deck = [];

$( document ).ready( function(){
  $( '#addCardButton' ).on( 'click', function(){
    // console.log( 'in addCardButton on click');
    // create new card using the cardyCard constructor (below)
    var newCard = new cardyCard( $( '#numberIn' ).val(), $( '#suitIn' ).val() );
    // push the new card into the deck
    deck.push( newCard );
    console.log( 'deck:', deck );
    // display the deck on the DOM
    $( '#outputDiv' ).empty();
    // loop through the deck
    for (var i = 0; i < deck.length; i++) {
      // display each card as a p tag in
      $( '#outputDiv' ).append( '<p>'+ deck[i].number + ' of ' + deck[i].suit + '</p>' );
    } // end for
  }); // end function


  // card constructor
  function cardyCard( myNumber, mySuit, myValue ){
    // console.log( 'in cardyCard:', myNumber, mySuit );
    // create a new object with the following properties:
    this.number = myNumber;
    this.suit = mySuit;
    this.value = myValue;
  } // end cardyCard


// attempt at building full deck generator
  function wholeDeck(){

    var emptyDeck = [];

    this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

    // loops to loop through names and suits
    for (var i = 0; i < this.suits.length; i++) {
      for (var j = 0; j < this.names.length; j++) {
      emptyDeck.push(this.names[i], this.suits[j]); // working on pushing loops into emptyDeck
      }
    }
    return emptyDeck;
  }

  console.log(wholeDeck()); // it is currently doubling the total cards (104) in the array and returning extraneous undefined
}); // end doc ready
