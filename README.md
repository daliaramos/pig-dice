###

1. Program takes player name
input: name
output: name

2. Program takes player name and returns a random dice roll
input: name and dice roll = 1
output: name and total = 0

3. Program takes a random dice roll, if number is 2 - 6 it returns that number.



3. Program takes player name and adds prior dice roll total and current random dice roll.
input: name and dice roll1 = 1, dice roll2 = 2
output: name and total = 3


Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold":

If the player rolls a 1, they score nothing and it becomes the next player's turn.

If the player rolls any other number, it is added to their turn total and the player's turn continues.

If a player chooses to "hold", their turn total is added to their score, and it becomes the next player's turn.
The first player to score 100 or more points wins.

For example, the first player, Ann, begins a turn with a roll of 5. Ann could hold and score 5 points, but chooses to roll again. Ann rolls a 2, and could hold with a turn total of 7 points, but chooses to roll again. Ann rolls a 1, and must end her turn without scoring. The next player, Bob, rolls the sequence 4-5-3-5-5, after which he chooses to hold, and adds his turn total of 22 points to his score.
