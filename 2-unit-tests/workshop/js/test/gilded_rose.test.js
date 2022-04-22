const { Item, Shop } = require("../src/gilded_rose");

describe("Gilded Rose tests", function () {
    test("quality should not be negative", function () {
        const shop = new Shop(
            [
                new Item(
                    "A stick",
                    1,
                    0
                )
            ]
        );

        const items = shop.updateQuality();
        expect(items[0].quality).toBeGreaterThanOrEqual(0);
    });

    test("quality should be lesser than 50", function () {
        const shop = new Shop(
            [
                new Item(
                    "Sword of Truth",
                    2000,
                    49
                )
            ]
        );

        const items = shop.updateQuality();
        expect(items[0].quality).toBeLessThanOrEqual(50);
    });

    test("sulfuras item should not expire", function () {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 30)]);
        const items = shop.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    test("sulfuras item should not lose quality", function () {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 30)]);
        const items = shop.updateQuality();
        expect(items[0].quality).toEqual(30);
    });

    test("Object must have a quality", function () {
        const shop = new Shop(
            [
                new Item(
                    "Mjolnir",
                    1500,
                    48
                )
            ]
        );

        const items = shop.updateQuality();
        expect(items[0].quality).toBeDefined();
    });

    test("Object must have a sellIn", function() {
        const shop = new Shop(
            [
                new Item(
                    "Elendil",
                    2200,
                    50
                )
            ]
        );

        const items = shop.updateQuality();
        expect(items[0].sellIn).toBeDefined();
    });
});
