let truck = document.querySelector(".truck");
let stat = document.querySelector(".status");

truck.addEventListener("click", (ele) => {
  ele.currentTarget.classList.toggle("active");
  if (truck.classList.contains("active")) {
    stat.innerHTML = "Enable";
    document.body.style.color = "white";
    document.body.style.background = "black";
    document.querySelector("header").style.color = "white";
    document.querySelector("header").style.background = "black";
  } else {
    stat.innerHTML = "Disable";
    document.querySelector("header").style.color = "black";
    document.querySelector("header").style.background = "white";
    document.body.style.color = "black";
    document.body.style.background = "white";
  }
});
