describe('function', () => {
    it('should support function', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Aditya')).toBe('Hello Aditya');
    });

    it('should support function default value', () => {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Aditya')).toBe('Hello Aditya');
        expect(sayHello()).toBe('Hello Guest');
    });

    it('should rest params', () => {
        function sum(...values: number[]): number {
            let total = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
});