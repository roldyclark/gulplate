function menuToggle() {
  var x = document.getElementById("mobile-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function menuHide() {
  document.getElementById("mobile-nav").style.display = "none";
}

document.querySelectorAll('#menu-toggle').forEach(item => {
  item.addEventListener('click', menuToggle)
})

document.querySelectorAll('#menu-hide').forEach(item => {
  item.addEventListener('click', menuHide)
})




