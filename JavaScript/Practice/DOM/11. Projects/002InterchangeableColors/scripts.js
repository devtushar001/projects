const btns = document.querySelectorAll(".btn");
console.log(btns);

const body = document.body;

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        let color = btn.value;
        changeBackground(color);
        console.log(btn);
        console.log(color)
    });
});

function changeBackground(color) {
    body.className = "";
   switch(color) {
    case "purple":
        body.classList.add('purple')
        break;
    case "blue":
        body.classList.add('blue')
        break;
    case "red":
        body.classList.add('red')
        break;
    case "green":
        body.classList.add('green')
        break;
    case "yellow":
        body.classList.add('yellow')
        break;
    case "teal":
        body.classList.add('teal');
     default:
        break;
    }
}