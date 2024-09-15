//href
//value
//type
//getAttribute(attrName)
//setAttribute(attrName, value)

const a = document.querySelector('a');
const b = document.querySelector('input');
// console.log(a);
// console.log(a.value); // undefined
// console.log(a.href);
// console.log(b.value);
// console.log(b.type);
// console.log(a);

// setting value
// a.href = 'https://github/devtushar001/';
// console.log(a.href);
// console.log(b.value = "Bye");
// console.log(b.type = "password");
// console.log(b.placeholder = "please provide a strong password");


//getAttribute(attrName);
console.log(b.getAttribute('type'));
console.log(b.getAttribute('placeholder'));


//setAttribute(attrName, value)
console.log(b.setAttribute("placeholder", "Password"));
console.log(b.setAttribute("type", "password"));
