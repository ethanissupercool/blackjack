nonactiveDeck = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH']
deck = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH']
dealerHandValue = 0;
playerHandValue = 0;

$(document).ready(function(){
  console.log(deck)
  console.log("shuffling")
  shuffle(1000, deck)
  console.log("images provided courtesy of american contact bridge league")
  $('#dealerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  var cardValue = deck[0][0];
  console.log('called')
  if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
    cardValue = 10;
    dealerHandValue = dealerHandValue + parseInt(cardValue);
    $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
    deck.shift();
  }
  if (cardValue == 'A'){ //ace
    console.log("hi")
    cardValue = 11;
    if (dealerHandValue + parseInt(cardValue) > 21){
      cardValue = 1;
      dealerHandValue = dealerHandValue + parseInt(cardValue);
      $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
      deck.shift();
    }
    else if (dealerHandValue + parseInt(cardValue) <= 21){
      dealerHandValue = dealerHandValue + parseInt(cardValue);
      $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
      deck.shift();
    }
  }
  if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
    dealerHandValue = dealerHandValue + parseInt(cardValue);
    $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
    deck.shift();
  }

  $('#playerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  var cardValue = deck[0][0];
  if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
    cardValue = 10;
    playerHandValue = playerHandValue + parseInt(cardValue);
    $('#playerValue').text('Player Value: ' + playerHandValue)
    deck.shift();
  }
  if (cardValue == 'A'){ //ace
    console.log("ACE DRAWN")
    cardValue = 11;
    if (playerHandValue + parseInt(cardValue) > 21){
      cardValue = 1;
      playerHandValue = playerHandValue + parseInt(cardValue);
      $('#playerValue').text('Player Value: ' + playerHandValue)
      deck.shift();
    }
    else if (playerHandValue + parseInt(cardValue) <= 21){
      playerHandValue = playerHandValue + parseInt(cardValue);
      $('#playerValue').text('Player Value: ' + playerHandValue)
      deck.shift();
    }
  }
  if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
    playerHandValue = playerHandValue + parseInt(cardValue);
    $('#playerValue').text('Player Value: ' + playerHandValue)
    deck.shift();
  }
})


function stand() {
  while (dealerHandValue < 17){
    $('#dealerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
    var cardValue = deck[0][0];
    if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
      cardValue = 10;
      console.log("b"+dealerHandValue);
      dealerHandValue = dealerHandValue + parseInt(cardValue);
      console.log("a"+dealerHandValue);
      $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
      deck.shift();
    }
    if (cardValue == 'A'){ //ace
      console.log("hi")
      cardValue = 11;
      if (dealerHandValue + parseInt(cardValue) > 21){
        cardValue = 1;
        dealerHandValue = dealerHandValue + parseInt(cardValue);
        $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
        deck.shift();
      }
      else if (dealerHandValue + parseInt(cardValue) <= 21){
        dealerHandValue = dealerHandValue + parseInt(cardValue);
        $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
        deck.shift();
      }
    }
    if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
      dealerHandValue = dealerHandValue + parseInt(cardValue);
      $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
      deck.shift();
    }
  }
  if (dealerHandValue == playerHandValue){
    console.log('tie');
  }

  if (dealerHandValue > 21 && playerHandValue <= 21){
    console.log('player win');
  }

  if (playerHandValue > 21 && dealerHandValue <= 21){
    console.log('dealer win');
  }

  if (playerHandValue == 21){
    console.log('player win');
  }
  if (dealerHandValue == 21){
    console.log('dealer win');
  }

  if (playerHandValue < 21 && dealerHandValue < 21){
    if (dealerHandValue < playerHandValue){
      console.log('player win');
    }
    if (playerHandValue < dealerHandValue){
      console.log('dealer win');
    }
  }
}

function hit(){
  //dealer DOES NOT HIT
  // if (dealerHandValue < 17){ //assuming dealer does not hit above 16
  //   $('#dealerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  //   var cardValue = deck[0][0];
  //   if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
  //     cardValue = 10;
  //     console.log("b"+dealerHandValue);
  //     dealerHandValue = dealerHandValue + parseInt(cardValue);
  //     console.log("a"+dealerHandValue);
  //     $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
  //     deck.shift();
  //   }
  //   if (cardValue == 'A'){ //ace
  //     console.log("hi")
  //     cardValue = 11;
  //     if (dealerHandValue + parseInt(cardValue) <= 21){
  //       dealerHandValue = dealerHandValue + parseInt(cardValue);
  //       $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
  //       deck.shift();
  //     }
  //     else if (dealerHandValue + parseInt(cardValue) > 21){
  //       cardValue = 1;
  //       dealerHandValue = dealerHandValue + parseInt(cardValue);
  //       $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
  //       deck.shift();
  //     }
  //   }
  //   if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
  //     dealerHandValue = dealerHandValue + parseInt(cardValue);
  //     $('#dealerValue').text('Dealer Value: ' + dealerHandValue)
  //     deck.shift();
  //   }
  // }
  // else{
  //   console.log("Dealer Stands.")
  // }
  //player hit
  $('#playerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  var cardValue = deck[0][0];
  if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
    cardValue = 10;
    playerHandValue = playerHandValue + parseInt(cardValue);
    $('#playerValue').text('Player Value: ' + playerHandValue)
    deck.shift();
  }
  if (cardValue == 'A'){ //ace
      console.log("Ace Drawn")
      cardValue = 11;
      if (playerHandValue + parseInt(cardValue) > 21){
        cardValue = 1;
        playerHandValue = playerHandValue + parseInt(cardValue);
        $('#playerValue').text('player Value: ' + playerHandValue)
        deck.shift();
      }
      else if (playerHandValue + parseInt(cardValue) <= 21){
        playerHandValue = playerHandValue + parseInt(cardValue);
        $('#playerValue').text('player Value: ' + playerHandValue)
        deck.shift();
      }
    }
  if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
    playerHandValue = playerHandValue + parseInt(cardValue);
    $('#playerValue').text('Player Value: ' + playerHandValue)
    deck.shift();
  }
}

function shuffle(shuffleAmt, a) {
  for (var i = 0; i < shuffleAmt;++i){
    shuffleCards(a);
  }
}

function checkBust(){


}

function shuffleCards(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

	// $('#exampleFormControlSelect1').change(function () {
	// var coinID =  $('#exampleFormControlSelect1').val();
	// var coinQuantity = $('.buyQuantity').val();
	// $('.costOfItem').text(Number(objData[coinID - 1].quote.USD.price) * Number(coinQuantity));
	// console.log(Number(objData[coinID - 1].quote.USD.price) * Number(coinQuantity))
	// console.log(coinID)
	// console.log(coinQuantity)
