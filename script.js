//blackjack ethan huang y12 assessment 1

nonactiveDeck = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH']
deck = ['AC', 'AD', 'AH', 'AS', '2C', '2D', '2H', '2S', '3C', '3D', '3H', '3S', '4C', '4D', '4H', '4S', '5C', '5D', '5H', '5S', '6C', '6D', '6H', '6S', '7C', '7D', '7H', '7S', '8C', '8D', '8H', '8S', '9S', '9C', '9D', '9H', 'TS', 'TC', 'TD', 'TH', 'JS', 'JC', 'JD', 'JH', 'QS', 'QC', 'QD', 'QH', 'KS', 'KC', 'KD', 'KH']
dealerHandValue = 0;
playerHandValue = 0;
cpuHandValue = 0;

$(document).ready(function(){
  if (localStorage.getItem("wallet") == null){
    localStorage.setItem("wallet", 100);
  }
  $('#wallet').text("Wallet: " + localStorage.getItem("wallet"));
  $('#dealerValue').text('Wallet: ' + localStorage.getItem("wallet"));
  console.log(deck)
  console.log("shuffling")
  shuffle(1000, deck)
  console.log("images provided courtesy of american contact bridge league")

//dealer initial draw
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


//player initial draw
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


//CPU initial draw
  $('#cpuHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  var cardValue = deck[0][0];
  if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
    cardValue = 10;
    cpuHandValue = cpuHandValue + parseInt(cardValue);
    $('#cpuValue').text('cpu Value: ' + cpuHandValue)
    deck.shift();
  }
  if (cardValue == 'A'){ //ace
    console.log("ACE DRAWN")
    cardValue = 11;
    if (cpuHandValue + parseInt(cardValue) > 21){
      cardValue = 1;
      cpuHandValue = cpuHandValue + parseInt(cardValue);
      $('#cpuValue').text('cpu Value: ' + cpuHandValue)
      deck.shift();
    }
    else if (cpuHandValue + parseInt(cardValue) <= 21){
      cpuHandValue = cpuHandValue + parseInt(cardValue);
      $('#cpuValue').text('cpu Value: ' + cpuHandValue)
      deck.shift();
    }
  }
  if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
    cpuHandValue = cpuHandValue + parseInt(cardValue);
    $('#cpuValue').text('cpu Value: ' + cpuHandValue)
    deck.shift();
  }
})


function stand() {
  //DEALER DRAWS
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
    deck = deck.concat(nonactiveDeck);
    shuffle(10, deck);
    console.log(deck);
  }
  //CPU DRAWS
  while (cpuHandValue < 17){
    $('#cpuHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
    var cardValue = deck[0][0];
    if (cardValue == 'J' || cardValue == 'Q' || cardValue == 'K' || cardValue == 'T'){
      cardValue = 10;
      console.log("b"+cpuHandValue);
      cpuHandValue = cpuHandValue + parseInt(cardValue);
      console.log("a"+cpuHandValue);
      $('#cpuValue').text('cpu Value: ' + cpuHandValue)
      deck.shift();
    }
    if (cardValue == 'A'){ //ace
      console.log("hi")
      cardValue = 11;
      if (cpuHandValue + parseInt(cardValue) > 21){
        cardValue = 1;
        cpuHandValue = cpuHandValue + parseInt(cardValue);
        $('#cpuValue').text('cpu Value: ' + cpuHandValue)
        deck.shift();
      }
      else if (cpuHandValue + parseInt(cardValue) <= 21){
        cpuHandValue = cpuHandValue + parseInt(cardValue);
        $('#cpuValue').text('cpu Value: ' + cpuHandValue)
        deck.shift();
      }
    }
    if (cardValue == '2' || cardValue == '3' || cardValue == '4' || cardValue == '5' || cardValue == '6' || cardValue == '7' || cardValue == '8' || cardValue == '9') {
      cpuHandValue = cpuHandValue + parseInt(cardValue);
      $('#cpuValue').text('cpu Value: ' + cpuHandValue)
      deck.shift();
    }
  }
}

function hit(){
  //player hit
  $('#playerHand').append('<th><img src="assets/'+deck[0]+'.png" id="image"></th>');
  var cardValue = deck[0][0];
  //checkBust(cardValue, playerHandValue);
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
}

function shuffle(shuffleAmt, a) {
  for (var i = 0; i < shuffleAmt;++i){
    shuffleCards(a);
  }
}

function checkBust(a, b){
  console.log(parseInt(a) + parseInt(b));
  if (parseInt(a) + parseInt(b) > 21){
    alert("bust");
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();
  }
}

function shuffleCards(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function checkWin(){
  if (dealerHandValue == playerHandValue){
    alert('tie');
    dealerHandValue = 0;
    playerHandValue = 0;
    cpuHandValue = 0;
    $('#playerValue').text('Player Value: ' + cpuHandValue)
    $('#cpuValue').text('CPU Value: ' + cpuHandValue)
    $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();

  }

  if (dealerHandValue > 21 && playerHandValue <= 21){
    alert('player win');
    dealerHandValue = 0;
    playerHandValue = 0;
    cpuHandValue = 0;
    $('#playerValue').text('Player Value: ' + cpuHandValue)
    $('#cpuValue').text('CPU Value: ' + cpuHandValue)
    $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();
  }

  if (playerHandValue > 21 && dealerHandValue <= 21){
    alert('dealer win');
    dealerHandValue = 0;
    playerHandValue = 0;
    cpuHandValue = 0;
    $('#playerValue').text('Player Value: ' + cpuHandValue)
    $('#cpuValue').text('CPU Value: ' + cpuHandValue)
    $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();
  }

  if (playerHandValue == 21){
    alert('player win');
    dealerHandValue = 0;
    playerHandValue = 0;
    cpuHandValue = 0;
    $('#playerValue').text('Player Value: ' + cpuHandValue)
    $('#cpuValue').text('CPU Value: ' + cpuHandValue)
    $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();
  }
  if (dealerHandValue == 21){
    alert('dealer win');
    dealerHandValue = 0;
    playerHandValue = 0;
    cpuHandValue = 0;
    $('#playerValue').text('Player Value: ' + cpuHandValue)
    $('#cpuValue').text('CPU Value: ' + cpuHandValue)
    $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
    $("#dealerHand th").remove();
    $("#playerHand th").remove();
    $("#cpuHand th").remove();
  }

  if (playerHandValue < 21 && dealerHandValue < 21){
    if (dealerHandValue < playerHandValue){
      alert('player win');
      dealerHandValue = 0;
      playerHandValue = 0;
      cpuHandValue = 0;
      $('#playerValue').text('Player Value: ' + cpuHandValue)
      $('#cpuValue').text('CPU Value: ' + cpuHandValue)
      $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
      $("#dealerHand th").remove();
      $("#playerHand th").remove();
      $("#cpuHand th").remove();
    }
    if (playerHandValue < dealerHandValue){
      alert('dealer win');
      dealerHandValue = 0;
      playerHandValue = 0;
      cpuHandValue = 0;
      $('#playerValue').text('Player Value: ' + cpuHandValue)
      $('#cpuValue').text('CPU Value: ' + cpuHandValue)
      $('#dealerValue').text('Dealer Value: ' + cpuHandValue)
      $("#dealerHand th").remove();
      $("#playerHand th").remove();
      $("#cpuHand th").remove();
    }
  }
}

	// $('#exampleFormControlSelect1').change(function () {
	// var coinID =  $('#exampleFormControlSelect1').val();
	// var coinQuantity = $('.buyQuantity').val();
	// $('.costOfItem').text(Number(objData[coinID - 1].quote.USD.price) * Number(coinQuantity));
	// console.log(Number(objData[coinID - 1].quote.USD.price) * Number(coinQuantity))
	// console.log(coinID)
	// console.log(coinQuantity)
