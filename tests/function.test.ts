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
});