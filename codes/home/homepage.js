const toggleButton = document.getElementsByClassName("toggleButton")[0];
const links = document.getElementsByClassName("links")[0];

toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
});

// for background slider
let index = 0;
slide();

function slide() {
  let x = document.getElementsByClassName("mySlide");

  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;

  if(index > x.length) {
    index = 1;
  }
  x[index - 1].style.display = "block";
  setTimeout(slide, 3000); //image changes every 2 seconds
}
