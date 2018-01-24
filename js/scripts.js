//Back-end Logic
function Player(name, total) {
  this.name = name;
  // this.number = number;
  this.total = total;
}

var number;

Player.prototype.getRandomInteger = function() {
  number = (Math.floor(Math.random() * (7-1)) + 1);
  return number
}

Player.prototype.add = function(number) {
  // for (var i = 1; i <= number; i++) {
    if (number === 1) {
    var newTotal = 0;
  } else {
    var newTotal = this.total + number;
  }
    return newTotal;
  }

var newPlayer = new Player("Hannah", 10);



//Front-end Logic
