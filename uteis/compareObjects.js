// Compare objects

const people1 = {
    name: "Paris bravissimo",
    year: 20
}
const people2 = {
    name: "Brunin bravissimo",
    year: 24
}

// ##########################
// Description
// First parameter = Object;
// Two parameter = Object;
// Return = Boolean;
// ##########################

function compareObjects(obj1, obj2) {
    let equal = true;
    
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) equal = false; 
    }
    for (const key in obj2) {
        if (obj2[key] !== obj1[key]) equal = false; 
    }
    console.log(equal);
    return equal;
}

compareObjects(people1, people2);