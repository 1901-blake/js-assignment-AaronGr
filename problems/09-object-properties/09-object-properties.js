/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {
    for(const obj in someObj) {
        console.log(`${obj}: ${someObj[obj]} `);
    }
    console.log("\n");
}

let car = {tires: 4, material: "steel", make: "chevy", model: "impala"};

objectProperties(car);