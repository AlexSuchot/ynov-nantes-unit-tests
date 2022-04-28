class Minesweeper {
    constructor(n, m) {
        this.input = [];
        this.input.push(`${n} ${m} `);

        for (let i = 0; i < n; i++) {
            const row = '';
            for (let j = 0; j < m; j++) {
                row += Math.random() > .9 ? '*' : '.';
            }
            this.input.push(row);
        }
    }
}

module.exports = {
    Minesweeper
}