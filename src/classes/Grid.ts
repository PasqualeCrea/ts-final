import { ArraySet } from "./ArraySet";
import { Arrow } from "./Arrow";
import { Pawn } from "./Pawn";
import { SpecialChars } from "./SpecialChars";
import { Star } from "./Star";

export class Grid {
    width: number;
    height;
    grid: (Pawn | number)[][];
    arrows: Arrow[] = new Array<Arrow>();
    score: number = 0;
    round: number = 0;

    static help: string = "This is a grid, you can put pawns and numbers in it.";

    static sample(width: number, height: number) {
        let sampleGrid = Array.from({ length: height }, () => Array(width).fill("[ ]"));
        sampleGrid.forEach((row) => {
            let renderRow = ``;
            row.forEach((cell) => {
                renderRow += cell;
            });
            console.log(renderRow);
        });
    }

    constructor(width: number, height: number, fill: number = 0) {
        this.width = width;
        this.height = height;
        this.grid = Array.from({ length: height }, () => Array(width).fill(fill));
    }

    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    public insertPawn(pawn: Pawn) {
        this.grid[pawn.y][pawn.x] = pawn;
    }

    public incrementRound() {
        this.round++;
    }

    public addScore() {
        this.score += this.arrows.length;
    }

    public spawnArrow() {
        let validCell = false;
        do {
            let x = this.getRandomInt(0, this.width - 1);
            let y = this.getRandomInt(0, this.height - 1);
            if (this.grid[y][x] === 0) {
                validCell = true;
                let spawnedArrow = new Arrow(this, 1, x, y);
                this.arrows.push(spawnedArrow);
                spawnedArrow.changeDir();
                this.insertPawn(this.arrows[this.arrows.length - 1]);
            }
        } while (!validCell);
    }

    public render(): void {
        console.log(`Round: ${this.round} | Arrows: ${this.arrows.length} | Score: ${this.score}\n`);
        this.grid.forEach((row) => {
            let rowRender = ``;
            row.forEach((cell) => {
                let cellRender = ``;
                if (cell === 0) {
                    cellRender = `[ ]`;
                }
                if (cell instanceof Pawn) {
                    cellRender = `[${cell.symbol}]`;
                }
                rowRender += cellRender;
            });
            console.log(rowRender);
        });
    }

    public moveArrows() {
        this.arrows.forEach((arrow) => {
            switch (arrow.direction) {
                case 'up':
                    arrow.moveUp();
                    break;
                case 'down':
                    arrow.moveDown();
                    break;
                case 'left':
                    arrow.moveLeft();
                    break;
                case 'right':
                    arrow.moveRight();
                    break;
            }
        });
        let overlapCoordinates = "";
        let coordMap = this.arrows.map((arrow) => {
            return `${arrow.x},${arrow.y}`;
        });

        let overlap = coordMap.some((item, index) => {
            if (coordMap.indexOf(item) !== index) {
                overlapCoordinates = item;
            }
            return coordMap.indexOf(item) !== index;
        });

        if (overlap) {
            console.log(SpecialChars.BG.GREEN, overlapCoordinates, SpecialChars.RESET);
            let reggie = new RegExp(/(\d),(\d)/i);
            let reggieRes = reggie.exec(overlapCoordinates);
            let overlapX = parseInt(reggieRes[1]);
            let overlapY = parseInt(reggieRes[2]);
            console.log(SpecialChars.BG.BLUE, this.arrows.length, SpecialChars.RESET);
            this.arrows.forEach((arrow, index) => {
                if (arrow.x == overlapX && arrow.y == overlapY) {
                    this.grid[this.arrows[index].oldY][this.arrows[index].oldX] = 0;
                    this.grid[overlapY][overlapX] = 0;
                    this.arrows.splice(index, 1);
                }
            });
            console.log(SpecialChars.BG.GREEN, this.arrows.length, SpecialChars.RESET);
            this.arrows.forEach((arrow, index) => {
                console.log(SpecialChars.DECORATE.BOLD, index, SpecialChars.RESET, SpecialChars.DECORATE.UNDERLINE, `${arrow.x},${arrow.y}`, SpecialChars.RESET);
            });
            console.log(this.grid);
            this.insertPawn(new Star(this, overlapX, overlapY));
        }

        this.arrows.forEach(arrow => {
            arrow.updateLocation();
        });

        this.grid.forEach((row) => {
            row.forEach((cell) => {
                if (cell instanceof Arrow) {
                    cell = 0;
                }
            });
        });

        this.arrows.forEach((arrow) => {
            this.insertPawn(arrow);
        });



    }
}