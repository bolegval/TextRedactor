"use strict";

let edit = document.querySelector(".edit");
let save = document.querySelector(".save");
let cancel = document.querySelector(".cancel");
let textArea = document.querySelector(".textarea");

if (localStorage.getItem("content")) {
  textArea.innerHTML = localStorage.getItem("content");
} else {
  localStorage.setItem("content", textArea.innerHTML);
}

function local() {
  localStorage.setItem("content", textArea.innerHTML);
}

edit.addEventListener("click", () => {
  save.style.cssText = "display: inline-block";
  cancel.style.cssText = "display: inline-block";
  edit.setAttribute("disabled", "disabled");
  textArea.setAttribute("contenteditable", "true");
});

save.addEventListener("click", () => {
  edit.removeAttribute("disabled");
  save.style.cssText = "display: none";
  cancel.style.cssText = "display: none";
  textArea.setAttribute("contenteditable", "false");
  local();
});

cancel.addEventListener("click", () => {
  edit.removeAttribute("disabled");
  save.style.cssText = "display: none";
  cancel.style.cssText = "display: none";
  textArea.innerHTML = localStorage.getItem("content");
});
