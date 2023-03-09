const menuButton = document.getElementById("btn_menu");
const menuList = document.getElementById("list_menu");

menuButton.addEventListener("click", (e) => {
  //   console.log(e.target);
  menuList.classList.toggle("active");
  menuButton.classList.toggle("active");
});
