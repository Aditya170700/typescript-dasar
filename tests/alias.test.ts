import {Category, Product} from "../src/alias";

describe('Alias', function () {
    it('should be able to have a category', () => {
        const category: Category = {
            id: 1,
            name: "Handphone"
        };

        const product: Product = {
            id: "1",
            name: "Samsung",
            price: 15000,
            category: category
        };

        console.info(product);
    })
})