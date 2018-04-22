# Simple Dice Game: Yahtzee

Goal is to implement a simplified version of the dice game Yahtzee.
https://en.wikipedia.org/wiki/Yahtzee

The task interest is focusing on the pattern algorithms of the dice outcome and the software architecture.

## Task Description

Fork this project, implement your solution and open a Pull Request at github.

### User interface

The user interface has two parts, a dice shaker and an outcome table.

The user can roll the dice shaker and can see the outcome of that roll in the outcome table. 

#### 1. Dice shaker

The dice shaker contains a button for rolling all of the five contained dices and shows the outcome of these.

The button has the label 'Roll'. Further styles are not necessary.
Each time the user clicks this button, all of the five dices are rerolled at once.
Further user interaction like rolling a subset of the five dices is not necessary.

The dices simply show their value as a number. Further drawing of the dice values is not necessary.  

#### 2. Outcome table

Each time the dice shaker is rerolled, the outcome table shows for the current dice values the possible outcome on the game board.

The outcome table only shows this lower section of the game board.
https://en.wikipedia.org/wiki/Yahtzee#Lower_section

It has two columns.
One column for the label of the pattern ('Three Of A Kind', ...).
Another column for the outcome which the current dice values would result in.

Their is no further user interaction than rolling the dice shaker.

### Example

The user clicks the 'Roll'-Button and get the result [5, 5, 4, 4, 5]. The outcome table shows:

- Three of a Kind | 23
- Four of a Kind | 0
- Full House | 25
- Small Straight | 0
- Large Straight | 0
- Yahtzee | 0
- Chance | 23

The user clicks the 'Roll'-Button again and get the result [5, 6, 3, 4, 1]. The updated outcome table shows:

- Three of a Kind | 0
- Four of a Kind | 0
- Full House | 0
- Small Straight | 30
- Large Straight | 0
- Yahtzee | 0
- Chance | 19

### Implementation

- The software must be executable at a local environment.
- The software must be compatible with modern browsers. Supporting old browsers is not necessary.

### Documentation

 - Document how your software has to be setup and executed. You may use any automation tools you want (or not).
 - Document your code where needed

### Test and execution

Explain how to test your software locally. This includes documentation on how to run automated tests, if any.

## Tools

Implement the software in React. Apart from that, you may choose any tools, frameworks, libraries or packages you like.

## Optional Tasks

 - multi-language interface
 - further game implementations 
 - support for old browsers
 - Got some Docker skills? Create a Dockerfile of your software

