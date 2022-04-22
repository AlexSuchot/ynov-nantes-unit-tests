const {Item, Shop} = require("../src/gilded_rose");

describe("Gilded Rose tests", function() {

  test("quality should not be negative", function() {
    const aStick = new Shop(
        [
            new Item(
                "A stick",
                1,
                -5
            )
        ]
    );

    const items = aStick.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });

    test("quality should be lesser than 50", function() {
        const swordOfTruth = new Shop(
            [
                new Item(
                    "Sword of Truth",
                    2000,
                    120
                )
            ]
        );

        const items = swordOfTruth.updateQuality();
        expect(items[0].quality).toBeLessThanOrEqual(50);
    });
});
