describe('Tuple', function () {
    it('should support tuple', function () {
        const person : readonly [string, string, number] = ["Aditya", "Ricki", 23];

        console.info(person);
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "wkwkwk";
    });
});