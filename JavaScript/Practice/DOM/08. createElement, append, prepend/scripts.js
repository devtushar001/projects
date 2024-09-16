// Creating Element

// const h1 = document.createElement('h1');
// const body = document.querySelector('body');
// h1.innerHTML = 'Hellow World';
// // h1.textContent  = 'Hellow World';    
// h1.classList.add('greetings');
// h1.style.backgroundColor = 'teal';
// body.appendChild(h1);
// console.log(h1);

// const ul = document.querySelector("ul");

// const newLi = document.createElement('li');
// const seLi = document.createElement('li');
// seLi.innerText = 'second version';
// newLi.innerText = 'iam new tag';
// ul.appendChild(seLi);
// ul.appendChild(newLi);

// const firstLi = document.querySelector('li');
// ul.insertBefore(newLi, firstLi);

// const firstP = document.querySelector('p');

// const i = document.createElement('i');

// i.innerText = 'i am italics ';
// i.style.color = 'skyblue';
// i.style.fontStyle = 'italic';
// firstP.appendChild(i);
// firstP.insertAdjacentElement("beforebegin", i);
// firstP.insertAdjacentElement("afterbegin", i);
// firstP.insertAdjacentElement("beforeend", i);
// firstP.insertAdjacentElement("afterend", i);

// let section = document.querySelector('section');
// const h4 = document.createElement('h4');
// const span = document.createElement('span');
// span.innerText = "Sikha Verma";;
// span.style.color = 'crimson';

// h4.textContent = 'Tushar'
// h4.style.color = 'darkred';

// section.append(i, span)
// section.prepend(i, span)

const newList = document.querySelector('.new-list');
const fourth = document.querySelector('.fourth');
newList.removeChild(fourth);
newList.remove();

