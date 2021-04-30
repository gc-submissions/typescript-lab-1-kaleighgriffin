import { Product } from "./products";

export interface InventoryItem {
    product: Product,
    quantity: number,
}

let inventory: InventoryItem[] = [
    { product: 
        { name: "motor", price: 10.00 },
        quantity: 10 },
    { product:
        { name: "sensor", price: 12.50 },
        quantity: 4 },
    { product:
        { name: "LED", price: 1.00 },
        quantity: 20 },
]

export function calcInventoryValue(array: InventoryItem[]): number {
    if (array.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let product of array) {
        sum += product.product.price * product.quantity;
    }
    return sum;
}

console.log( calcInventoryValue(inventory) );
console.log( calcInventoryValue([]) );