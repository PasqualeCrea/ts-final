import { Pawn } from "./Pawn";
import { Grid } from "./Grid";
import { SpecialChars } from "./SpecialChars";
export class Star extends Pawn {
    private lifeSpan = 3;
    constructor(grid: Grid, x: number, y: number) {
        super(grid, SpecialChars.FG.GREEN + SpecialChars.STAR_SOLID + SpecialChars.RESET, x, y);
    }

    public decrementLifeSpan() {
        this.lifeSpan--;
        switch (this.lifeSpan) {
            case 3:
                this.symbol = SpecialChars.FG.GREEN_BRIGHT + SpecialChars.STAR_SOLID + SpecialChars.RESET;
                break;
            case 2:
                this.symbol = SpecialChars.FG.YELLOW_BRIGHT + SpecialChars.STAR_SOLID + SpecialChars.RESET;
                break;
            case 1:
                this.symbol = SpecialChars.FG.RED_BRIGHT + SpecialChars.STAR_SOLID + SpecialChars.RESET;
                break;
            case 0:
                break;
        }

    }
}