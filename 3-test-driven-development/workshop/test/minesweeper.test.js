const { Item, Shop, Minesweeper } = require("../src/minesweeper");

describe("tests", () => {
    test("quality should not be negative", () => {
        const game = new Minesweeper('*........*......');
        expect(game.input.length).toEqual(game.n * game.m);
    });
});
