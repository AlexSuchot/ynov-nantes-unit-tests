const { ToDo } = require("../toDoModel");
const clientmongoose = require("mongoose");

beforeAll(async () => {
    await clientmongoose.connect("mongodb://localhost:27017/docker-node-mongo-todo", { useNewUrlParser: true }).then(() => console.log("connected")).catch((err) => console.log(err));
});

[
    { text: "Step 1" },
    { text: "..." },
    { text: "Profit" }
].forEach(({text}) => {
    test(`Todo task ${text} saved`, () => {
        const todo = new ToDo({text: text});
        todo.save();
        expect(todo.text).toBe(text);
    });
});

test("Find todo not empty", async () => {
    let todos = await ToDo.find();
    expect(todos.length).toBeGreaterThanOrEqual(0);
}); 