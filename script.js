window.onload = () => {
  // Variables
  const navbarLi = document.querySelectorAll(".li-button");
  const dropdownButton = document.querySelector("#dropdown-button");
  const dropDown = document.querySelector(".navbar-popup");
  const desktopNavbarLi = document.querySelectorAll(".desktop-nav-item");

  // Functions

  function clearDesktopNav() {
    desktopNavbarLi.forEach((liItem) => {
      let dropdown = liItem.lastElementChild;
      if (!dropdown.classList.contains("active")) {
        dropdown.style.display = "none";
      }
      dropdown.classList.remove("active");
    });
  }

  function displayDesktopNav(element) {
    let dropDown = element.lastElementChild;
    dropDown.classList.add("active");

    clearDesktopNav();
    dropDown.style.display == "block"
      ? (dropDown.style.display = "none")
      : (dropDown.style.display = "block");
  }

  function toggleDropdown() {
    if (dropDown.style.display == "none") {
      dropDown.style.display = "block";
      dropdownButton.src = "./images/icon-close.svg";
    } else {
      dropDown.style.display = "none";
      dropdownButton.src = "./images/icon-hamburger.svg";
    }
  }

  function toggleNavItem(event) {
    let hiddenList = event.lastChild.previousElementSibling;
    let arrowIcon = event.firstChild.nextElementSibling;

    if (hiddenList.style.display == "none") {
      hiddenList.style.display = "block";
      arrowIcon.style.transform = "rotate(180deg)";
    } else {
      hiddenList.style.display = "none";
      arrowIcon.style.transform = "rotate(0deg)";
    }
  }

  // Events
  navbarLi.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      toggleNavItem(listItem);
    });
  });

  desktopNavbarLi.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      displayDesktopNav(listItem);
    });
  });

  dropdownButton.addEventListener("click", toggleDropdown);

  window.addEventListener("click", () => {
    if (
      !event.target.matches("li") &&
      !event.target.matches("p") &&
      !event.target.matches(".sign-up") &&
      !event.target.matches(".navbar-popup") &&
      !event.target.matches("#dropdown-button")
    ) {
      dropDown.style.display = "none";
      dropdownButton.src = "./images/icon-hamburger.svg";
    }
  });
};
