// let firstLi = document.querySelector('li');
// console.log(firstLi);
// console.log(firstLi.parentElement);
// console.log(firstLi.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement);
// console.log(firstLi.parentElement.parentElement.parentElement.parentElement);

// let ul = document.querySelector("ul");
// console.log(ul.children);
// console.log(ul.children[0]);
// console.log(ul.children[2]);
// console.log(ul.children[3]);

// console.log(ul.children[0].innerText); //1

// let firstLi = document.querySelector("li");
// console.log(firstLi.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.textContent);
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.textContent);

// try {
// console.log(firstLi.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.textContent);
// } catch (error) {
//     console.log(error.name);
//     console.log(error.message);
// }

const fourthLi = document.querySelector('.fourth');
console.log(fourthLi);
console.log(fourthLi.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.textContent);
console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
try {
console.log(fourthLi.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    
} catch (error) {
    console.log(error.name);
    console.log(error.message);
}
