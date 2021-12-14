import { SpecialChars } from "./classes/SpecialChars";
import { Grid } from "./classes/Grid";
import { Pawn } from "./classes/Pawn";
import inquirer from 'inquirer';
import figlet from 'figlet';
/*
Functions to help you see what is available in the SpecialChars class.
SpecialChars.sampleSymbols();
SpecialChars.sampleColors();
SpecialChars.sampleDecorate();
*/


let board = new Grid(3, 3);
let pawn = new Pawn(board, "Q", 0, 0);
board.insertPawn(pawn);

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
                'Quit'
            ],
            default: defaultChoice
        }
    ]);
    //@ts-ignore
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
        //@ts-ignore
        return loop(answers['Move']);
    } else {
        return false;
    }
}

console.clear();

loop();