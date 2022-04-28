const { Minesweeper } = require("../src/minesweeper");

describe("tests", () => {
    test("board size", () => {
        const game = new Minesweeper(3, 5);
        const [n, m] = game.input[0].split(' ');
        expect(n).toEqual(game.n.toString());
        expect(m).toEqual(game.m.toString());
        expect(game.input.length).toEqual(parseInt(n) + 1);
        for (let i = 0; i < n; i++) {
            expect(game.input[i + 1].length).toEqual(parseInt(m));
        }
    });

    test("Game must contains only stars, dots, and numbers", () => {
        const game = new Minesweeper();
        const regex = /[\d|*|.]*/; // check that row contains only digits, stars, or dot in game

        game.input.forEach((row, i) => {
            if (!i) return;

            if (row.includes(' ') === true) return;
            const matchingRegex = row.match(regex)[0];
            expect(matchingRegex.length).toEqual(row.length)
        })
    });
});
