export interface Mountain {
    name: string,
    height: number,
}

let mountains: Mountain[] = [
    { name: "Kilimanjaro", height: 19341 },
    { name: "Everest", height: 29029 },
    { name: "Denali", height: 20310 }
]

export function findNameOfTallestMountain(array: Mountain[]): string {
    if (array.length === 0) {
        return "";
    }
    let highest = array[0];
    for (let mountain of array) {
        // console.log(mountain);
        if (mountain.height > highest.height) {
            highest = mountain;
        }
    }
    return highest.name;
}

console.log( findNameOfTallestMountain(mountains) );
console.log( findNameOfTallestMountain([]) );