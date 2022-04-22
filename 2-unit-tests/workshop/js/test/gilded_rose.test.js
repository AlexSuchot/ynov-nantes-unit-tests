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

    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBeGreaterThanOrEqual(0);
  });
});
