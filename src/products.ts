export interface Product {
    name: string,
    price: number,
}

let products: Product[] = [
    { name: "Shoes", price: 19 },
    { name: "Sunglasses", price: 8 },
    { name: "Hat", price: 15 },
    { name: "Umbrella", price: 12 },
]

export function calcAverageProductPrice(array: Product[]): number {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let product of array) {
        sum += product.price;
    }
    return (sum / array.length);
}

console.log( calcAverageProductPrice(products) );
console.log( calcAverageProductPrice([]) );