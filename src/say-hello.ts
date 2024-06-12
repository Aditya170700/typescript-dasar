export function sayHello(name?: string | null): String {
    if (name) return `Hello ${name}`;
    else return 'Hello';
}