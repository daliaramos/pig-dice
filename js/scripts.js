//Back-end Logic
function Player(name) {
  this.name = name;
  this.round = [];
  this.roundTotal = 0; //this changed from an array to an integer
  this.totalScore = 0;
}

Player.prototype.rollDice = function() {
  var number = (Math.floor(Math.random() * (7-1)) + 1);
    if (number === 1) {
      this.round = []; //returns round to zero
    } else {
      this.round.push(number); // this is an array
      // return number;
      console.log(this.round);
      console.log(number);
    }
};

Player.prototype.hold = function() {
  var subtotal = 0;
  for (var index = 0; index < this.round.length; index += 1) {
    subtotal += this.round[index]; // this return as a single integer
  }
  this.roundTotal = subtotal;
  this.round = []; // clears the array back to zero
};

Player.prototype.addScores = function() {
  this.totalScore += this.roundTotal;
  this.roundTotal = 0;
};


//Front-end Logic
$(document).ready(function(){
 $("form#game").submit(function(event){
     event.preventDefault();
     var name = $("input#name").val();
     var newPlayer1 = new Player(name);

     $("#call").text(newPlayer1.name);

     $("button#rollDice").click(function(event) {
       event.preventDefault();
        newPlayer1.rollDice();
        console.log(newPlayer1.round);

      $("#numberArray").text(newPlayer1.round);
    });

    $("button#hold").click(function(event){
      event.preventDefault();
      newPlayer1.hold();
      $("#roundTotal").text(newPlayer1.roundTotal);

    });
    $("button#score").click(function(event){
        event.preventDefault();
        newPlayer1.addScores();
        $("#totalScore").text(newPlayer1.totalScore);
    });
  });

// PLAYER TWO
$("form#game2").submit(function(event){
    event.preventDefault();
     var name = $("input#name2").val();
     var newPlayer2 = new Player(name);

    $("#call2").text(newPlayer2.name);

    $("button#rollDice2").click(function(event) {
      event.preventDefault();
       newPlayer2.rollDice();
       console.log(newPlayer2.round);

     $("#numberArray2").text(newPlayer2.round);
    });

    $("button#hold2").click(function(event){
     event.preventDefault();
     newPlayer2.hold();
     $("#roundTotal2").text(newPlayer2.roundTotal);

    });
    $("button#score2").click(function(event){
       event.preventDefault();
       newPlayer2.addScores();
       $("#totalScore2").text(newPlayer2.totalScore);
    });
  });
});
