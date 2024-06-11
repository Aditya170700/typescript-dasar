export function process(value: string | number | boolean) {
    if (typeof value === 'number') {
        return value += 100;
    } else if (typeof value === 'boolean') {
        return !value;
    } else {
        return value.toUpperCase();
    }
}