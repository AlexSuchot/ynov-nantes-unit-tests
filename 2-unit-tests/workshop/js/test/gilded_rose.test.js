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
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
        const items = shop.updateQuality();
        expect(items[0].sellIn).toEqual(-1);
    });

    test("sulfuras item should not lose quality", () => {
        const shop = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
        const items = shop.updateQuality();
        expect(items[0].quality).toEqual(80);
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

    [
        {
            item: new Item("Backstage passes to a TAFKAL80ETC concert", 420, 10),
            quality: 11,
            sellIn: 419
        },
        {
            item: new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10),
            quality: 12,
            sellIn: 9
        },
        {
            item: new Item("Backstage passes to a TAFKAL80ETC concert", 5, 30),
            quality: 33,
            sellIn: 4
        },
        {
            item: new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10),
            quality: 13,
            sellIn: 2
        },
        {
            item: new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10),
            quality: 0,
            sellIn: -1
        },
    ].forEach(({ item, quality, sellIn }) => {
        test(`backstage pass logic when sellIn:${item.sellIn}`, () => {
            const gildedRose = new Shop([item]);
            const items = gildedRose.updateQuality();
            expect(items[0].quality).toBe(quality);
            expect(items[0].sellIn).toBe(sellIn);
        });
    });

    test("should lower item quality twice over when expired", () => {
        const gildedRose = new Shop([new Item("expired item", 0, 30)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(28);
    });
});
