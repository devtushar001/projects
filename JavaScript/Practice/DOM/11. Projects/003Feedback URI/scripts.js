// Getting Elements from the dom

const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector('#panel');

let selectedRating = "Satisfied";
console.log(ratings);
console.log(ratingsContainer);

ratingsContainer.addEventListener("click", (e) => {
    if(e.target.parentNode.classList.contains("rating")) {
        //   console.log(e.target.parentNode.classList.contains("rating"));
        removActive();
        e.target.parentNode.classList.add("active");
        selectedRating = e.target.nextElementSibling.innerHTML;
       } 
});

sendBtn.addEventListener('click', () => {
    panel.innerHTML = 
    `
    <p class="heart">💖</p>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    `
});

function removActive() {
    for (let i = 0; i < ratings.length; i++) {
        ratings[i].classList.remove('active');
    }
}