const orgobject = {
    name: "Isuru",
    age: null,
    marks: { a: 100, b: -79, c: null },
    success: Infinity,
    cars: ['lambo', 'gtr', 'audi'],
    score: undefined
}

function createDeepCopy(input) {
    if (typeof input !== 'object' || input === null) return input;

    let copy = Array.isArray(input) ? [] : {};

    for (key in input) {
        copy[key] = createDeepCopy(input[key])
    }

    return copy;
}

console.log(createDeepCopy(orgobject))