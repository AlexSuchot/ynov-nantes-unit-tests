const mongoose = require("mongoose");
const Item = require("./Item");


beforeAll(() => {
    mongoose
        .connect("mongodb://mongo:27017/docker-node-mongo", { useNewUrlParser: true })
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log(err));
});

afterAll(() => mongoose.disconnect());

it("can create an item", async () => {
    await Item.deleteMany({});

    const itemName = "Test name";

    let item = new Item({ name: itemName });
    item = await item.save();

    const resItem = await Item.findOne({ name: itemName });
    expect(resItem.name).toBe(itemName);
    expect(resItem.date).not.toBe(undefined);
});

it("can create multiple items", async () => {
    await Item.deleteMany({});

    await Item.insertMany([
        { name: "Test name 1" },
        { name: "Test name 2" },
        { name: "Test name 3" }
    ]);

    const resItems = await Item.find({});
    expect(resItems.length).toBe(3);
    expect(resItems[0].name).toBe("Test name 1");
    expect(resItems[1].name).toBe("Test name 2");
    expect(resItems[2].name).toBe("Test name 3");
});

it("cannot create a nameless item", async () => {
    let item = new Item({});
    await expect(item.save()).rejects.toThrow('item validation failed: name: Path `name` is required.');
});

it("can update an item", async () => {
    await Item.deleteMany({});

    await Item.insertMany([
        { name: "Test name 1" },
        { name: "Test name tmp" }
    ]);

    await Item.updateOne({ name: "Test name tmp" }, { name: "Test name 2" });

    const resItems = await Item.find({});
    expect(resItems[0].name).toBe("Test name 1");
    expect(resItems[1].name).toBe("Test name 2");
});

it("can delete an item", async () => {
    await Item.deleteMany({});

    await Item.insertMany([
        { name: "Test name 1" },
        { name: "Test name 2" }
    ]);

    await Item.deleteOne({ name: "Test name 1" });

    const resItems = await Item.find({});
    expect(resItems.length).toBe(1);
    expect(resItems[0].name).toBe("Test name 2");
});