const paras = document.querySelectorAll("p");
paras.forEach((para) => {
  if (para.textContent.includes("error")) {
    para.classList.add("error");
  }
  if (para.textContent.includes("success")) {
    para.classList.add("success");
  }
});

const title = document.querySelector(".title");
title.classList.toggle("test");
