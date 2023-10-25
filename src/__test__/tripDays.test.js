const { tripDays } = require("../client/js/tripDays");

const startDate = new Date();

test('calculate days between start date and date provided to tripDays()', () =>{
    expect(tripDays(startDate)).toBe(0);
});