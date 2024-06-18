const modal = document.querySelector(".modal");
const btn = document.querySelector(".open");
const none = document.querySelector(".close");

btn.addEventListener("click", () =>  {
  modal.style.display = "block";
});

none.addEventListener("click", () => {
  modal.style.display = "none";
});