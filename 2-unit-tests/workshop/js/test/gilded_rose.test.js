const { Item, Shop } = require("../src/gilded_rose");

describe("Gilded Rose tests", () => {
    test("quality should not be negative", () => {
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

    test("quality should be lesser than 50", () => {
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

    test("sulfuras item should not expire", () => {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 30)]);
        const items = shop.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    test("sulfuras item should not lose quality", () => {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 30)]);
        const items = shop.updateQuality();
        expect(items[0].quality).toEqual(30);
    });

    test("Object must have a quality", () => {
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

    test("Aged Brie quality should increment", () => {
        const quality = 30;
        const gildedRose = new Shop([new Item("Aged Brie", 420, quality)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toBe(quality + 1);
    });

    test("Object must have a sellIn", () => {
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

    test("Item quality and sellIn must go down by 1 each day", () => {
        const shop = new Shop(
            [
                new Item(
                    "Iron Sword",
                    10,
                    20
                )
            ]
        );

        const items = shop.updateQuality();
        expect(items[0].sellIn).toEqual(9);
        expect(items[0].quality).toEqual(19);
    });
});
