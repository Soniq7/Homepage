console.log("Hi all! Hope exploring this page will be as sweet as honey! 😎🍯");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");

button.addEventListener("click", () => {
    body.classList.toggle("darkMode");
    button.classList.toggle("darkMode");
    button.innerText = (button.innerText === "Dark mode") ? "Light mode" : "Dark mode";
    });




