//Back-end Logic
function Player(name) {
  this.name = name;
  this.round = [];
  this.totalScore = [];
}

Player.prototype.rollDice = function() {
  var number = (Math.floor(Math.random() * (7-1)) + 1);
    if (number === 1) {
      this.round = []; //returns round to zero
    } else {
      this.round.push(number);
      return number;
    }
};

Player.prototype.hold = function() {
  // var subtotal = 0;
  for (var index = 0; index < this.round.length; index += 1) {
    this.round += this.round[index];
  }
    return this.round = this.round + this.totalScore ;
};


Player.prototype.addScores = function() {
  var runningTotal = this.totalScore.push(this.round);
    console.log(runningTotal);
    return runningTotal;
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
