class Minesweeper {
    constructor(input) {
        
        this.createRandomInput = () => {
            const input = [];

            const boardCount = Math.ceil(Math.random() * 3);
            for (let a = 0; a < boardCount; a++) {
                const n = Math.ceil(Math.random() * 100);
                const m = Math.ceil(Math.random() * 100);
                input.push(`${n} ${m}`);
                for (let i = 0; i < n; i++) {
                    let row = '';
                    for (let j = 0; j < m; j++) row += Math.random() > .9 ? '*' : '.';
                    input.push(row);
                }
            }
            return input;
        }
        
        this.getOutput = () => {
            const [n, m] = this.input[0].split(' ');
            const output = [];
            for (let i = 0; i < m; i++) {
                for (let j = 0; j < n; j++) {
                    
                }
            }
            return output;
        }

        this.input = !input ? this.createRandomInput() : input;
        this.output = this.getOutput();
    }
}

module.exports = { Minesweeper }