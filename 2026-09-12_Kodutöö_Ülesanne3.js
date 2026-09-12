// Selgitused on punktide kaupa lisatud README.md faili.

const users = [
    { id: 1, name: "Mari", age: 22, active: true },
    { id: 2, name: "Jüri", age: 17, active: false },
    { id: 3, name: "Kati", age: 31, active: true },
    { id: 4, name: "Martin", age: 19, active: false },
    { id: 5, name: "Laura", age: 26, active: true }
];


// 3.1. Kõikide kasutajate nimed
users.forEach(user => {
    console.log(user.name);
});


// 3.2. Aktiivsed kasutajad
const activeUsers = users.filter(user => user.active);
console.log(activeUsers);


// 3.3. Vähemalt 18-aastased kasutajad
const adults = users.filter(user => user.age >= 18);
console.log(adults);


// 3.4. Uus massiiv ainult nimedega
const names = users.map(user => user.name);
console.log(names);


// 3.5. Kasutaja id-ga 3
const userWithId3 = users.find(user => user.id === 3);
console.log(userWithId3);


// 3.6. Kasutaja staatuse funktsioon
function getUserStatus(user) {
    if (user.active) {
        return "Aktiivne";
    }

    return "Mitteaktiivne";
}

for (let i = 0; i < users.length; i++) {
    console.log(getUserStatus(users[i]));
}


// 3.7. Greeting arrow function
const getGreeting = user =>
    `Tere, ${user.name}! Sa oled ${user.age} aastat vana.`;

console.log(getGreeting(users[0]));


// 3.8. Destructuring
const { name, age } = users[0];

console.log(name);
console.log(age);


// 3.9. Spread-süntaks
const newUser = {
    id: 6,
    name: "Karl",
    age: 24,
    active: true
};

const updatedUsers = [...users, newUser];

console.log(updatedUsers);


// 3.10. Address ja optional chaining
const userWithAddress = {
    ...users[1],
    address: {
        city: "Tallinn"
    }
};

// Linn on olemas
console.log(userWithAddress.address?.city);

// Linn puudub
console.log(users[1].address?.city ?? "Linn puudub");


// 3.11. Kõik kasutajad ja nende staatus
users.forEach(user => {
    console.log(`${user.name} - ${getUserStatus(user)}`);
});


// 3.12. Kasutajate sorteerimine vanuse järgi
const sortedUsers = [...users].sort((a, b) => a.age - b.age);

console.log(sortedUsers);