window.onload = () => {
  // Variables
  const navbarLi = document.querySelectorAll(".li-button");

  // Functions

  function toggleNavItem(event) {
    let hiddenList = event.target.lastChild.previousElementSibling;
    let arrowIcon = event.target.firstChild.nextElementSibling;

    hiddenList.style.display == "none"
      ? (hiddenList.style.display = "block")
      : (hiddenList.style.display = "none");
  }

  // Events
  navbarLi.forEach((listItem) => {
    listItem.addEventListener("click", toggleNavItem);
  });
};
