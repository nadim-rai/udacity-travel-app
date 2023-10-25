const { picture } =  require("../server/picture");

describe('function picture() should exist' , () => {
    test('it should return true', async () => {
        expect(picture).toBeDefined();
    });
});
