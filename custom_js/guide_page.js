
//Table Scrolling
const slider = document.querySelector('.table-responsive');
let mouseDown = false;
let startX, scrollLeft;

let startDragging = function (e) {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
};
let stopDragging = function (event) {
  mouseDown = false;
};

slider.addEventListener('mousemove', (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
});

// Event listeners
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);


//SideNav
function openNav() {
  document.getElementById("sidenav").style.width = "250px";
  document.getElementById("sidenavButton").style.left = "250px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
  document.getElementById("sidenavButton").style.left = "0px";
}

function toggleFunction() {
  var element = document.getElementById("sidenavButton");
  var icon = document.getElementById("sidenavToggle");
  element.classList.toggle("toggle")

  if (element.classList.contains("toggle")) {
    openNav();
    icon.classList.remove("fa-angle-double-up");
    icon.classList.add("fa-angle-double-down");
  }

  else {
    closeNav();
    icon.classList.add("fa-angle-double-up");
    icon.classList.remove("fa-angle-double-down");
  }
}

// document.getElementsByClassName("toc_h_one").onclick = toggleFunction();
// document.getElementsByClassName("toc_h_two").onclick = toggleFunction();
// document.getElementsByClassName("toc_h_three").onclick = toggleFunction();
// document.getElementById("toc_h_four").addEventListener("onclick", toggleFunction())

