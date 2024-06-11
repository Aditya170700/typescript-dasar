describe('Any', function () {
    it('should support any', function () {
        const person : any = {
            id: 1,
            name: 'John',
            age: 30
        };

        console.info(person);
    });
});