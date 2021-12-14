# Dancing Arrows
## Libraries you may use
- Required (npm)
    - [typescript](https://www.npmjs.com/package/typescript)
    - [inquirer](https://www.npmjs.com/package/inquirer)
    - [figlet](https://www.npmjs.com/package/figlet)
- Required (instructor)
    - SpecialChars
        - A Static text class that allows for color changing, and a few ascii characters.
---
## Entities / Classes
- Grid
    - The game board.
    - Contains a 2d array in which the game pieces move
    - Keeps score.
        - Gain points for each arrow on the board before moving.
        - Gain additional 5 points if a star is collected.
    - Keeps track of what round it is.
    - Keeps track of how many arrows there are
        - Make a function that counts the arrows in the 2d array
- Pawn
    - private Move function
        - moves the pawn to a given location
    - var to reference what grid it is in.
    - moveLeft, moveRight, etc
        - Move the pawn in specified direction
- Arrow (extends Pawn)
    - A
- Star (extends Pawn)
    - Created when two arrows collide
    - Disappears after 3 player moves
    - Disappears if hit by an arrow
    - Grants 5 extra points if player collects it
    - Doesn't move
___

## States
### Game Start ▶
- Spawn player at start position
    - Center, or cornoer
- Spawn arrow at random position
    - Set arrow in random valid direction
        - Vald directions will keep them within the grid upon their movement

### Game loop ⟳
1. Player chooses direction to move
1. Player moves
1. Arrows move in specified direction
    - If more than one arrow is in a given space after all have moved they are destroyed
    - In their place a star should spawn.
1. Arrows Rotate
1. New arrow spawns in valid position
    - Valid positions are empty

## Look 

### UX
- Player should see a grid of the specified size.
- Player should be able to move Up,Down,Left,Right.
- Player should be able to stay in place.
- Player should be able to Quit the game.
- The player pawn can be any ascii character.
    - They should be a different color than arrow or stars
- Empty Grid segments should be represented by:
    - [ ]
- Arrows should be represented by ascii arrows

