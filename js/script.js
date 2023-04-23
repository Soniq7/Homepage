{
    const welcome = () => {
        console.log("Hi all! Hope exploring this page will be as sweet as honey! 😎🍯");
    };

    const toggleBackground = () => {
        const button = document.querySelector(".js-button");
        const body = document.querySelector(".js-body");

        body.classList.toggle("darkMode");
        button.classList.toggle("darkMode");
        button.innerText = (button.innerText === "Dark mode") ? "Light mode" : "Dark mode";
        
        button.addEventListener("click", toggleBackground);
    };

    welcome();
    toggleBackground();

}



