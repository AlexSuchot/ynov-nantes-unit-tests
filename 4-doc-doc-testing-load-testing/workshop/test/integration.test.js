
const clientmongoose = require("mongoose");
const {ToDo} = require("../toDoModel");

beforeAll(async () => {
    await clientmongoose.connect("mongodb://localhost:27017/toDoAppTest", { useNewUrlParser: true }).then(() => console.log("MongoDB toDoApp Connected")).catch((err) => console.log(err));
});

test("add new todo", async () => {
    const text = "New todo";
    const toDo = new ToDo({ text: text });
    toDo.save();
    expect(toDo.text).toBe(text);
});

test("upd todo", async () => {
    const oldText = "New todo";
    const text = "New todo (for real)";
    const toDo = await ToDo.findOne({ text: oldText });
    toDo.set({ text: text });
    toDo.save();
    expect(toDo.text).toBe(text);
});