let menuBtn = document.getElementById("menuBar");
let subMenu = document.getElementById("subMenu");
let middleLine = document.getElementById("middleLine");
let firstLine = document.getElementById("firstLine");
let lastLine = document.getElementById("lastLine");

let isOpen = false;

menuBtn.addEventListener("click", () => {
  subMenu.classList.toggle("flex");
  subMenu.classList.toggle("hidden");

  if (!isOpen) {
    firstLine.classList.remove("translate-y-[-8px]");
    firstLine.classList.add("rotate-45");

    middleLine.classList.add("opacity-0");

    lastLine.classList.remove("translate-y-[8px]");
    lastLine.classList.add("-rotate-45");
  } else {
    firstLine.classList.add("translate-y-[-8px]");
    firstLine.classList.remove("rotate-45");

    middleLine.classList.remove("opacity-0");

    lastLine.classList.add("translate-y-[8px]");
    lastLine.classList.remove("-rotate-45");
  }

  isOpen = !isOpen;
});
