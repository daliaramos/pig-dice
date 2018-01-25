//Back-end Logic
function Player(name) {
  this.name = name;
  this.round = [];
  this.totalScore = [];
}

Player.prototype.rollDice = function() {
  var diceRoll = (Math.floor(Math.random() * (7-1)) + 1);
    if (diceRoll === 1) {
      this.round = [];
      return
      console.log(this.round);

  } else {
       this.round.push(diceRoll);
       return this.round;

  }
};



//add numbers in round array
  // Player.prototype.add = function() {
  //                             .reduce(a, b)
  // }


// .reduce()

//Front-end Logic
$(document).ready(function(){
  $("form#game").submit(function(event){
    event.preventDefault();
    // var playerName = $("input#name").val();
    var numberOne;

    var newPlayer = new Player($("input#name").val());
    var randomNumber = newPlayer.rollDice(numberOne);

    console.log(randomNumber);

    $("#output").text(newPlayer.name);
    $("#output").text(newPlayer.newTotal);

    console.log("end of function");
  });
});
