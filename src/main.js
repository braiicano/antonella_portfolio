const btns = document.querySelector("#btn");
const content = document.querySelector("#content");

btns.addEventListener("click", (e) => {
  const { target: btn } = e;
  const { value: sect } = btn.attributes.tag;
  const selSect = document.getElementById(sect);
  //   console.log(selSect);
  selSect.style.top = "1rem";
});
content.addEventListener("click", (e) => {
  const { target: btn } = e;
  let sect;
  if (btn.tagName === "BUTTON") sect = btn.parentNode;
  if (sect) sect.style.top = "120%";
});
