import { SpecialChars } from "./classes/SpecialChars";
import { Grid } from "./classes/Grid";
import { Pawn } from "./classes/Pawn";
import inquirer from 'inquirer';
import figlet from 'figlet';
import { Arrow } from "./classes/Arrow";

let board = new Grid(5, 5);
let pawn = new Pawn(board, `${SpecialChars.FG.CYAN}${SpecialChars.SNOWFLAKE}${SpecialChars.RESET}`, 2, 2);
board.insertPawn(pawn);
board.spawnArrow();



async function loop(defaultChoice?: string): Promise<any> {
    board.render();
    console.log("\n");

    let quit = false;
    let answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'Move',
            choices: [
                'Up',
                'Down',
                'Left',
                'Right',
                'Stay',
                'Quit'
            ],
            default: defaultChoice
        }
    ]);

    switch (answers['Move']) {
        case 'Up':
            pawn.moveUp();
            break;
        case 'Down':
            pawn.moveDown();
            break;
        case 'Right':
            pawn.moveRight();
            break;
        case 'Left':
            pawn.moveLeft();
            break;
        case 'Quit':
            quit = true;
            break;
    }
    console.clear();

    if (!quit) {
        board.incrementRound();
        board.addScore();
        board.moveArrows();
        board.spawnArrow();
        return loop(answers['Move']);
    } else {
        return false;
    }
}

console.clear();

loop();