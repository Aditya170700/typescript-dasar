describe('Array', function () {
    it('should same with javascript', () => {
        const names: string[] = ['aditya', 'budi', 'cokro'];
        const numbers: number[] = [1, 2, 3, 4, 5];

        console.info(names);
        console.info(numbers);
    });

    it('should support readonly array', () => {
        const names: ReadonlyArray<string> = ['aditya', 'budi', 'cokro'];

        console.info(names);
        console.info(names[0]);

        // names[0] = "Aditya";
    });
})