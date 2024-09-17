let one = document.querySelector(".click");
let two = document.querySelector('.contextmenu');
let three = document.querySelector('.dblclick');
let four = document.querySelector('.mousedown');
let five = document.querySelector('.mouseenter');
let six = document.querySelector('.mouseleave');
let seven = document.querySelector('.mousemove');
let eight = document.querySelector('.mouseout');
let nine = document.querySelector('.mouseover');
let ten = document.querySelector('.mouseup');

one.addEventListener('click', () => {
    one.classList.toggle('red');
});

two.addEventListener('contextmenu', () => {
  two.classList.toggle('blue');
})

three.addEventListener('dblclick', () => {
    three.classList.toggle('teal')
})

four.addEventListener('mousedown', () => {
    four.classList.toggle('steelblue')
})

five.addEventListener('mouseenter', () => {
    five.classList.toggle('orange')
})

six.addEventListener('mouseleave', () => {
    six.classList.toggle('purple')
})

seven.addEventListener('mousemove', () => {
    seven.classList.toggle('pink')
})

eight.addEventListener('mouseout', () => {
    eight.classList.toggle('chocolate')
})

nine.addEventListener('mouseover', () => {
    nine.classList.toggle('aqua')
})

ten.addEventListener('mouseup', () => {
    ten.classList.toggle('hello')
})