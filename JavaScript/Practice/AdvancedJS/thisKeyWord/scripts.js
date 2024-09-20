// console.log(window);
// console.log(this);
// console.log(window === this);


// window.firstName = 'Tusahr';
// this.LastName = 'WebDev';

// console.log(window);

// function printThis() {
//     return this;
// }

// const res = printThis();
// console.log(res);

const obj = {
    fName: "Tushar",
    lName: "WebDev",
    userName: function () {
        return this;
    },

    fullName: function () {
        return `${this.fName} ${this.lName}`
    }
}

console.log(obj); 
console.log(obj.fName); 
console.log(obj.lName);
console.log(obj.userName());
console.log(obj.userName() == obj); // true

console.log(obj.fullName());  // Tushar WebDev


const objArrow = {
    fName: "Tushar",
    lName: "WebDev",
    userName: () => {
        return this;
    },

    fullName: () => {
        return `${this.fName} ${this.lName}`
    }
}

console.log(objArrow);
console.log(objArrow.userName());
console.log(objArrow.userName() === objArrow); // false
console.log(objArrow.fullName());