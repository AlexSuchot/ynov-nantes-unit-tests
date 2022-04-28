class Minesweeper {
    constructor(input) {
        this.createRandomInput = () => {
            const input = [];

            const boardCount = Math.ceil(Math.random() * 3);
            for (let a = 0; a < boardCount; a++) {
                const n = Math.ceil(Math.random() * 10);
                const m = Math.ceil(Math.random() * 10);
                input.push(`${n} ${m}`);
                for (let i = 0; i < n; i++) {
                    let row = '';
                    for (let j = 0; j < m; j++) row += Math.random() > .7 ? '*' : '.';
                    input.push(row);
                }
            }
            return input;
        }
        this.input = !input ? this.createRandomInput() : input;

        this.boards = [];
        this.input.forEach((inputRow, i) => {
            if (inputRow.includes(' ')) {
                const board = [];
                const [n, m] = inputRow.split(' ');
                for (let y = 0; y < n; y++) {
                    const index = i + 1 + y;
                    const boardRow = [];
                    for (let x = 0; x < m; x++) {
                        boardRow.push(this.input[index][x]);
                    }
                    board.push(boardRow);
                }
                this.boards.push(board);
            }
        });

        this.getOutput = () => {
            const output = [];
            this.boards.forEach((board, i) => {
                if (board.length) output.push(`Field #${i + 1}:`);
                board.forEach((row, y) => {
                    let outputRow = '';
                    row.forEach((tile, x) => {
                        if (tile === '*') outputRow += tile;
                        else {
                            let mineCount = 0;
                            if (y > 0 && board[y-1][x] === '*') mineCount++;
                            if (x > 0 && board[y][x-1] === '*') mineCount++;
                            if (y < board.length-1 && board[y+1][x] === '*') mineCount++;
                            if (x < row.length-1 && board[y][x+1] === '*') mineCount++;
                            if (y > 0 && x > 0 && board[y-1][x-1] === '*') mineCount++;
                            if (x > 0 && y < board.length-1 && board[y+1][x-1] === '*') mineCount++;
                            if (y < board.length-1 && x < row.length-1 && board[y+1][x+1] === '*') mineCount++;
                            if (x < row.length-1 && y > 0 && board[y-1][x+1] === '*') mineCount++;
                            outputRow += mineCount;
                        }
                    });
                    output.push(outputRow);
                });
            });
            return output;
        }
        this.output = this.getOutput();
    }
}

module.exports = { Minesweeper }