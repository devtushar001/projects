const secondBtn = document.querySelector('.second-btn');
// secondBtn.onclick = function() {
//     // alert("Tushar");
//     console.log('Tushar');
    
// }

secondBtn.onmousemove = function() {
    console.log('Tushar Chaudhary');
}

const best = document.querySelector('.best');
// best.addEventListener("click", function() {
//     console.log("Hello World");
// })

best.addEventListener('click', ()   => {
    console.log('Tushar');
})


// function greetings() {
    //     console.log('Tushr');
    // }
    
//     const greetings = () => {
//         console.log('Hellow World');
//     }
    
// best.addEventListener("click", greetings);

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value);
    input.value = '';
})