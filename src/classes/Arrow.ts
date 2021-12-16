import { Pawn } from "./Pawn";
import { Grid } from "./Grid";
import { SpecialChars } from "./SpecialChars";

export class Arrow extends Pawn {
    oldX: number;
    oldY: number;
    constructor(grid: Grid, symbol: number, x: number = 0, y: number = 0) {
        let arrowSymbol = "";
        switch (symbol) {
            case 1:
                arrowSymbol = SpecialChars.ARROW_UP;
                break;
            case 2:
                arrowSymbol = SpecialChars.ARROW_DOWN;
                break;
            case 3:
                arrowSymbol = SpecialChars.ARROW_LEFT;
                break;
            case 4:
                arrowSymbol = SpecialChars.ARROW_RIGHT;
                break;
        }
        super(grid, arrowSymbol, x, y);
    }

    get direction(): string {
        switch (this.symbol) {
            case SpecialChars.ARROW_UP:
                return 'up';
                break;
            case SpecialChars.ARROW_DOWN:
                return 'down';
                break;
            case SpecialChars.ARROW_LEFT:
                return 'left';
                break;
            case SpecialChars.ARROW_RIGHT:
                return 'right';
                break;
        }
    }
    private getRandomInt(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    protected move(x: number, y: number): void {
        this.oldX = this.x;
        this.oldY = this.y;
        this.x = x;
        this.y = y;
    }

    public changeDir(dir?: number) {
        let validDir = false;
        if (dir === undefined) {
            dir = this.getRandomInt(1, 4);
        }
        do {
            if (dir !== undefined && !validDir) {
                dir = this.getRandomInt(1, 4);
            }
            switch (dir) {
                case 1:
                    if (this.y - 1 > 0) {
                        this.symbol = SpecialChars.ARROW_UP;
                        validDir = true;
                    }
                    break;
                case 2:
                    if (this.y + 1 < this.grid.grid.length) {
                        this.symbol = SpecialChars.ARROW_DOWN;
                        validDir = true;
                    }
                    break;
                case 3:
                    if (this.x - 1 > 0) {
                        this.symbol = SpecialChars.ARROW_LEFT;
                        validDir = true;
                    }
                    break;
                case 4:
                    if (this.x + 1 < this.grid.grid[0].length) {
                        this.symbol = SpecialChars.ARROW_RIGHT;
                        validDir = true;
                    }
                    break;
            }
        } while (!validDir);


    }

    public updateLocation(): void {
        this.grid.insertPawn(this);
        this.grid.grid[this.oldY][this.oldX] = 0;
        this.changeDir();
    }
}