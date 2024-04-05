
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".spanClass");
const buttons = document.querySelectorAll("button");

let currentSwitch = 1;

const updateSwitch = (e) => {
    currentSwitch = e.target.id === "nextId" ? ++currentSwitch : --currentSwitch;

    circles.forEach((circle, index) => {
        circle.classList[index < currentSwitch ? "add" : "remove"]('active');
    });

    progressBar.style.width = `${((currentSwitch - 1) / (circles.length - 1)) * 100}%`;


    if (currentSwitch === circles.length) {
        buttons[1].disabled = true;
    }
    else if (currentSwitch === 1) {
        buttons[0].disabled = true;
    }
    else {
        buttons.forEach((button) => (button.disabled = false));
    }
};

buttons.forEach((button) => {
    button.addEventListener("click", updateSwitch);
});
