const { Minesweeper } = require("../src/minesweeper");

describe("tests", () => {
    test("Acceptance test input", () => {
        const game = new Minesweeper([
            '4 4',
            '*...',
            '....',
            '.*..',
            '....',
            '3 5',
            '**...',
            '.....',
            '.*...',
            '0 0'
        ]);

        const result = [
            'Field #1:',
            '*100',
            '2210',
            '1*10',
            '1110',
            'Field #2:',
            '**100',
            '33200',
            '1*100'
        ];

        game.output.forEach((row, i) => {
            expect(row).toEqual(result[i]);
        });
    });

    // test("board count", () => {
    //     const game = new Minesweeper();

    //     const [n, m] = game.input[0].split(' ');
    //     expect(n).toEqual(game.n.toString());
    //     expect(m).toEqual(game.m.toString());
    //     expect(game.input.length).toEqual(parseInt(n) + 1);
    //     for (let i = 0; i < n; i++) {
    //         expect(game.input[i + 1].length).toEqual(parseInt(m));
    //     }
    // });

    test("boards must contains only stars and dots", () => {
        const game = new Minesweeper();
        const regex = /[*|.]/;
        game.boards.forEach(board => board.forEach(row => row.forEach(tile => expect(tile).toMatch(regex))));
    });

    test("Game length (n,m) must be between 1 and 100", () => {
        const game = new Minesweeper();
        game.boards.forEach((board) => {
            expect(board.length).toBeGreaterThan(0);
            expect(board.length).toBeLessThanOrEqual(100);

            board.forEach((row) => {
                expect(row.length).toBeGreaterThan(0);
                expect(row.length).toBeLessThanOrEqual(100);
            });
        })
    });
    
    test("No board if dimensions given are 0", () => {
        const game = new Minesweeper(['0 0']);
        expect(game.boards.length).toEqual(0);
    });

    test("Game input is array and rows must be of type string", () => {
        const game = new Minesweeper();

        expect(Array.isArray(game.input)).toBe(true)
        game.input.forEach((row) => {
            expect(typeof row).toBe("string");
        })
    })
});
