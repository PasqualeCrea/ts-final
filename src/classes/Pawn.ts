import { Grid } from "./Grid";

export class Pawn {
    symbol: string;
    x: number;
    y: number;
    grid: Grid;

    constructor(grid: Grid, symbol: string, x: number = 0, y: number = 0) {
        this.grid = grid;
        this.symbol = symbol;
        this.x = x;
        this.y = y;
    }

    private move(x: number, y: number) {
        if (x <= this.grid.grid[0].length - 1 && x >= 0 && y <= this.grid.grid.length - 1 && y >= 0) {
            let oldX = this.x;
            let oldY = this.y;
            this.x = x;
            this.y = y;
            this.grid.insertPawn(this);
            this.grid.grid[oldY][oldX] = 0;
        }
    }

    public moveUp() {
        this.move(this.x, this.y - 1);
    }

    public moveDown() {
        this.move(this.x, this.y + 1);
    }

    public moveLeft() {
        this.move(this.x - 1, this.y);
    }

    public moveRight() {
        this.move(this.x + 1, this.y);
    }
}