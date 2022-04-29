Feature('End to end test');

Scenario('Can create a todo', ({ I }) => {
    I.amOnPage('http://localhost:5000');
    I.fillField('.form-control', 'Test create to do list');
    I.click('#create-todo');
    I.waitForText('Test create to do list');
});

Scenario('Can complete a todo', ({ I }) => {
    I.amOnPage('http://localhost:5000');
    I.fillField('.form-control', 'Test to do complete');
    I.click('#create-todo');
    I.waitForText('Test to do complete');
});
