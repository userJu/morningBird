const yesBtn = document.querySelector(".yesBtn");
const noBtn = document.querySelector(".noBtn");
const show = document.querySelector("#show");
const intro = document.querySelector("#intro");

yesBtn.addEventListener("click", () => {
  show.classList.remove("hide");
  const introPos = intro.offsetTop;
  intro.scrollIntoView({ behavior: "smooth" });
});

const main = document.querySelector("#main");
const mainCurtain = document.querySelector(".main_curtain");
const outtro = document.querySelector("#outtro");
const sun = document.querySelector(".sun");

window.addEventListener("scroll", () => {
  if (window.scrollY > main.offsetTop - 500) {
    const animation = window.scrollY - main.offsetTop + 500;
    mainCurtain.style.left = `${animation}px`;
  }
  if (window.scrollY > outtro.offsetTop) {
    sun.classList.add("sunrise");
    const sunHeight =
      ((window.scrollY - outtro.offsetTop) / outtro.offsetHeight) * 100;
    sun.style.bottom = `${sunHeight}%`;
    console.log(sunHeight);
  } else {
    sun.classList.remove("sunrise");
  }
});

const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;
  cursor.style.transform = `translate(${x}px, ${y}px)`;
});
