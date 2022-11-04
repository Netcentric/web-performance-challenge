const accessibleBoxes = () => {
  const teasers = document.querySelectorAll(".teaser__item");

  teasers.forEach((teaser) => {
    const link = teaser.querySelector("a");
    if (!link) { return;}
    
    const url = link.getAttribute("href");
    teaser.addEventListener("click", () => {
      location.href = url;
      link.preventDefault;
    });
    teaser.classList.add("teaser__item--isLink");
    link.addEventListener("focus", () => {
      console.log("Is focused");
      teaser.classList.add("isfocused");
    });
    link.addEventListener("blur", () => {
      teaser.classList.remove("isfocused");
    });

    teaser.insertAdjacentHTML("beforeend", '<span class="teaser__link" aria-hidden="true">Read more</span>');
  });
}
document.addEventListener("DOMContentLoaded", function () {
  if ("querySelector" in document) {
    accessibleBoxes();
  }
});