describe('Object', () => {
    it('Should be able to create a new object', () => {
        const person : {name: string; age: number} = {
            name: 'John',
            age: 12
        };

        console.info(person);
    })
})