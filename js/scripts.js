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
      return number;
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
// $(document).ready(function(){
//   $("form#game").submit(function(event){
//     event.preventDefault();
//     var number;
//     // var playerName = $("input#name").val();
//
//     // // var newPlayer = new Player($("input#name").val());
//     var randomNumber = Player.prototype.rollDice(number);
//
//     // $("#output").text(newPlayer.name);
//     // $("#output").text(newPlayer.newTotal);
//
//     console.log("this is randomNumber " + randomNumber);
//   });
// });
