import { Pawn } from "./Pawn";

export class Grid {
    grid: (Pawn | number)[][];

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
        this.grid = Array.from({ length: height }, () => Array(width).fill(fill));

    }

    public insertPawn(pawn: Pawn) {
        this.grid[pawn.y][pawn.x] = pawn;
    }

    public render(): void {
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
}