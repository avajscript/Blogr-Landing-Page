window.onload = () => {
  // Variables
  const navbarLi = document.querySelectorAll(".li-button");
  const dropdownButton = document.querySelector("#dropdown-button");
  const dropDown = document.querySelector(".navbar-popup");

  // Functions

  function toggleDropdown() {
    dropDown.style.display == "none"
      ? (dropDown.style.display = "block")
      : (dropDown.style.display = "none");
  }

  function toggleNavItem(event) {
    let hiddenList = event.lastChild.previousElementSibling;
    let arrowIcon = event.firstChild.nextElementSibling;

    hiddenList.style.display == "none"
      ? (hiddenList.style.display = "block")
      : (hiddenList.style.display = "none");
  }

  // Events
  navbarLi.forEach((listItem) => {
    listItem.addEventListener("click", () => {
      toggleNavItem(listItem);
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
    }
  });
};
