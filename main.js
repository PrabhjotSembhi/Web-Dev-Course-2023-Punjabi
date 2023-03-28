const slideNodelist = document.querySelectorAll(".slide");

const next = document.querySelector("#next");

const slides = Array.prototype.slice.call(slideNodelist);

let slideValue = 0;

next.addEventListener("click", function () {
  slides.forEach((element) => {
    element.style.transform = `translateX(-${slideValue + 350}px)`;
  });
  slideValue = slideValue + 350;

  if (slideValue == 1750) {
    slideValue = -350;
  }
  console.log(slideValue);
});
