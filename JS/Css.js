let currentSlide = 1;

function showSlide(n) {
  const slide1 = document.getElementById("slide1");
  const slide2 = document.getElementById("slide2");

  if (!slide1 || !slide2) return;

  slide1.style.opacity = n === 1 ? "1" : "0";
  slide2.style.opacity = n === 2 ? "1" : "0";
}

showSlide(currentSlide);

setInterval(() => {
  currentSlide = currentSlide === 1 ? 2 : 1;
  showSlide(currentSlide);
}, 2500);
