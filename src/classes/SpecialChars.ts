export class SpecialChars {
    //Color Chars
    /**
     * Reset Ansii transorms (colors, decorators, etc.)
     */
    static RESET = "\u001b[0m";
    /**
     * Foreground colors for console text.
     */
    static FG = {
        BLACK: "\u001b[30m",
        WHITE: "\u001b[37m",
        RED: "\u001b[31m",
        GREEN: "\u001b[32m",
        BLUE: "\u001b[34m",
        CYAN: "\u001b[36m",
        MAGENTA: "\u001b[35m",
        YELLOW: "\u001b[33m",
        BLACK_BRIGHT: "\u001b[90m",
        WHITE_BRIGHT: "\u001b[97m",
        RED_BRIGHT: "\u001b[91m",
        GREEN_BRIGHT: "\u001b[92m",
        BLUE_BRIGHT: "\u001b[94m",
        CYAN_BRIGHT: "\u001b[96m",
        MAGENTA_BRIGHT: "\u001b[95m",
        YELLOW_BRIGHT: "\u001b[93m"
    };
    /**
     * Background colors for console text.
     */
    static BG = {
        BLACK: "\u001b[40m",
        WHITE: "\u001b[47m",
        RED: "\u001b[41m",
        GREEN: "\u001b[42m",
        BLUE: "\u001b[44m",
        CYAN: "\u001b[46m",
        MAGENTA: "\u001b[45m",
        YELLOW: "\u001b[43m",
        BLACK_BRIGHT: "\u001b[100m",
        WHITE_BRIGHT: "\u001b[107m",
        RED_BRIGHT: "\u001b[101m",
        GREEN_BRIGHT: "\u001b[102m",
        BLUE_BRIGHT: "\u001b[104m",
        CYAN_BRIGHT: "\u001b[106m",
        MAGENTA_BRIGHT: "\u001b[105m",
        YELLOW_BRIGHT: "\u001b[103m"
    };
    /**
     * Decorate console text. (Bold, italic, etc.)
     */
    static DECORATE = {
        BOLD: "\u001b[1m",
        UNDERLINE: "\u001b[4m",
        STRIKE: "\u001b[9m",
        REVERSED: "\u001b[7m",
        ITALIC: "\u001b[3m"
    }
    //Special Chars
    static ARROW_UP = "↑";
    static ARROW_DOWN = "↓";
    static ARROW_LEFT = "←";
    static ARROW_RIGHT = "→";
    static LOOP = "⟳";
    static SQUARE = "∎";
    static INFINITE = "∞";
    static THEREFORE = "∴";
    static BECAUSE = "∵";
    static PROPORTION = "∷";
    static ABOUT = "≈";
    static GEO_EQUAL = "≎";
    static CIRCLE_DOT = "⊙";
    static CRICLE_X = "⊗";
    static CRICLE_MINUS = "⊖";
    static CRICLE_PLUS = "⊕";
    static CRICLE_DASH = "⊝";
    static CRICLE_RING = "⊚";
    static BITCOIN = "₿";
    static SUN = "☀";
    static CLOUD = "☁";
    static STAR_SOLID = "★";
    static STAR_OUTLINE = "☆";
    static SHOGI_SOLID = "☗";
    static SHOGI_OUTLINE = "☖"
    static SKULL_CROSSBONES = "☠";
    static RADIOACTIVE = "☢";
    static BIOHAZARD = "☣";
    static ANKH = "☥";
    static PEACE = "☮";
    static YING_YANG = "☯";
    static DHARMA = "☸";
    static PAWN_OUTLINE = "♙";
    static PAWN_SOLID = "♟";
    static ROOK_OUTLINE = "♖";
    static ROOK_SOLID = "♜";
    static QUEEN_SOLID = "♛";
    static KING_SOLID = "♚";
    static KNIGHT_SOLID = "♞";
    static BISHOP_SOLID = "♝";
    static SUIT_HEART_SOLID = "♥";
    static SUIT_DIAMOND_SOLID = "♦";
    static SUIT_SPADE_SOLID = "♠";
    static SUIT_CLUB_SOLID = "♣";
    static QUEEN_OUTLINE = "♕";
    static KING_OUTLINE = "♔";
    static KNIGHT_OUTLINE = "♘";
    static BISHOP_OUTLINE = "♗";
    static SUIT_HEART_OUTLINE = "♡";
    static SUIT_DIAMOND_OUTLINE = "♢";
    static SUIT_SPADE_OUTLINE = "♤";
    static SUIT_CLUB_OUTLINE = "♧";
    static NOTE_SIXTEENTH = "♬";
    static NOTE_EIGHTH = "♪";
    static NOTE_QUARTER = "♩";
    static NOTE_EIGHTH_BEAMED = "♫";
    static MUSIC_SHARP = "♯";
    static MUSIC_FLAT = "♭";
    static MUSIC_NATURAL = "♮";
    static RECYCLE_UNIVERSAL_OUTLINE = "♲";
    static RECYCLE_UNIVERSAL_SOLID = "♻";
    static RECYCLE_GENERIC = "♺";
    static CROSSED_SWORDS = "⚔";
    static FLAG_OUTLINE = "⚐";
    static FLAG_SOLID = "⚑";
    static SCALES = "⚖";
    static ATOM = "⚛";
    static STAR_TRACE = "⚝";
    static COFFIN = "⚰";
    static URN = "⚱";
    static SHOGI_TURNED_OUTLINE = "⛉";
    static SHOGI_TURNED_SOLID = "⛊";
    static PICKAXE = "⛏";
    static CASTLE = "⛫";
    static MOUNTAIN = "⛰";
    static SQAURE_FOUR_CORNERS = "⛶";
    static FLEUR_DE_LIS = "⚜";
    static CIRCLE_TWO_DOTS_OUTLINE = "⚇";
    static CIRCLE_TWO_DOTS_SOLID = "⚉";
    static DIE_ONE = "⚀";
    static DIE_TWO = "⚁";
    static DIE_THREE = "⚂";
    static DIE_FOUR = "⚃";
    static DIE_FIVE = "⚄";
    static DIE_SIX = "⚅";
    static PI = "π";
    static ENVELOPE = "✉";
    static CHECK_MARK = "✓";
    static STAR_FOUR_OUTLINE = "✧";
    static STAR_FOUR_SOLID = "✦";
    static SNOWFLAKE = "❄";
    /**
     * Log all symbols in library to the console.
     */
    static sampleSymbols(): void {
        let keys = Object.keys(this);
        keys = keys.sort();
        keys.forEach((key) => {
            if (key !== "FG" && key !== "DECORATE" && key !== "BG" && key !== "RESET")
                //@ts-ignore
                console.log(`${key}: ${this[key]}`);
        });
    }
    /**
     * Log all colors in library to the console.
     */
    static sampleColors(): void {
        Object.keys(this.FG).forEach((key) => {
            //@ts-ignore
            console.log(this.FG[key], key, this.RESET);
        });
        Object.keys(this.BG).forEach((key) => {
            //@ts-ignore
            console.log(this.BG[key], key, this.RESET);
        });
    }
    /**
     * Log all decorators in library to the console.
     */
    static sampleDecorate(): void {
        Object.keys(this.DECORATE).forEach((key) => {
            //@ts-ignore
            console.log(this.DECORATE[key], key, this.RESET);
        });
    }
}
