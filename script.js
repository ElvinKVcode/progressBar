
// Burada bizim üçün "Selektorları" çağırır
const circles = document.querySelectorAll(".circle");
const progressBar = document.querySelector(".spanClass");
const buttons = document.querySelectorAll("button");

// İlkin dəyər kimi currentSwitch dəyişənini 1 olaraq təyin edir
let currentSwitch = 1;
// Bir düymə kliklənəndə keçidi yeniləyən funksiyanı təyin edir
const updateSwitch = (e) => {
  // Kliklənən düymənin növbəti və ya əvvəlki olduğunu təyin edir
  // currentSwitch dəyərini müvafiq olaraq artırır və ya azaldır
  currentSwitch = e.target.id === "nextId" ? ++currentSwitch : --currentSwitch;
  // Hər bir circle üzərində dövr edir və currentSwitch dəyərinə əsasən 'active' sinifini əlavə edir və ya çıxarır
  circles.forEach((circle, index) => {
    circle.classList[index < currentSwitch ? "add" : "remove"]("active");
  });
  // currentSwitch dəyərinə əsasən progressBar-ın enini yeniləyir
  progressBar.style.width = `${
    ((currentSwitch - 1) / (circles.length - 1)) * 100
  }%`;
  // currentSwitch dəyərinə əsasən düymələri aktivləşdirir və ya deaktivləşdirir
  if (currentSwitch === circles.length) {
    // Əgər sonuncu dairəyə çatılıbsa, növbəti düyməni deaktivləşdirir
    buttons[1].disabled = true;
  } else if (currentSwitch === 1) {
    // Əgər birinci dairədədirsə, əvvəlki düyməni deaktivləşdirir
    buttons[0].disabled = true;
  } else {
    // Əgər currentSwitch ortadadırsa, hər iki düyməni aktivləşdirir
    buttons.forEach((button) => (button.disabled = false));
  }
};
// Hər bir düyməyə klik hadisəsi dinləyicisi əlavə edir, kliklənəndə updateSwitch funksiyasını çağırır
buttons.forEach((button) => {
  button.addEventListener("click", updateSwitch);
});
