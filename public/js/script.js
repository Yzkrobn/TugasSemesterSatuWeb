document.addEventListener("DOMContentLoaded", () => {
  const navButton = document.getElementById("navButton");
  const navLink = document.getElementById("navContent");
  const listLines = [
    document.getElementById("listLine-1"),
    document.getElementById("listLine-2"),
    document.getElementById("listLine-3"),
  ];
  const dropdowns = document.querySelectorAll("[id^='dropDownButton-']");
  
  const toggleDropdown = (content, icon) => {
    if (content.style.maxHeight) {
      content.style.transition = "max-height 0.5s ease-out";
      content.style.maxHeight = null;
    } else {
      content.style.transition = "max-height 0.5s ease-in-out";
      content.style.maxHeight = content.scrollHeight + "px";
    }
    icon.classList.toggle("rotate-180");
  };

  const closeAllDropdowns = () => {
    dropdowns.forEach((button) => {
      const id = button.id.split("-")[1];
      const content = document.getElementById(`dropDownContent-${id}`);
      const icon = document.getElementById(`dropDownIcon-${id}`);
      if (content && icon && content.style.maxHeight) {
        content.style.maxHeight = null;
        icon.classList.remove("rotate-180");
      }
    });
  };

  const navSide = () => {
    if (navButton && navLink && listLines.every((line) => line)) {
      navButton.addEventListener("click", () => {
        navLink.classList.toggle("w-0");
        navLink.classList.toggle("w-36");
        listLines[0].classList.toggle("rotate-45");
        listLines[1].classList.toggle("opacity-0");
        listLines[1].classList.toggle("invisible");
        listLines[2].classList.toggle("-rotate-45");

        closeAllDropdowns();
      });
    }
  };
  navSide();

  dropdowns.forEach((button) => {
    const id = button.id.split("-")[1];
    const content = document.getElementById(`dropDownContent-${id}`);
    const icon = document.getElementById(`dropDownIcon-${id}`);

    if (content && icon) {
      button.addEventListener("click", () => toggleDropdown(content, icon));
    }
  });
});
