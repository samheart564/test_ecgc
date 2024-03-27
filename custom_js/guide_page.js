
//Table Scrolling
const slider = document.querySelector('.table-responsive');
let mouseDown = false;
let startX, scrollLeft;

if (slider) {
  let startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  };
  let stopDragging = function (e) {
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
}

//SideNav
function toggleFunction() {
  var sidenav = document.getElementById("sidenav");
  var sidenavButton = document.getElementById("sidenavButton");
  var main = document.getElementById("main");

  if (window.innerWidth >= 1000) {
    sidenav.classList.toggle("custom-sidenav-collapse");
    sidenavButton.classList.toggle("custom-sidenav-collapse");
    main.classList.toggle("custom-sidenav-collapse");

    if (sidenav.classList.contains("toggle") && sidenav.classList.contains("custom-sidenav-collapse")) {
      sidenav.classList.remove("toggle");
      sidenavButton.classList.remove("toggle");
    }
  }
  
  else {
    sidenav.classList.toggle("toggle");
    sidenavButton.classList.toggle("toggle");
    
    if (sidenav.classList.contains("custom-sidenav-collapse") && sidenav.classList.contains("toggle")) {
      sidenav.classList.remove("custom-sidenav-collapse");
      sidenavButton.classList.remove("custom-sidenav-collapse");
      main.classList.remove("custom-sidenav-collapse");
    }
  }
}

function smToggleFunction() {
  if (window.innerWidth < 1000) {
    toggleFunction();
  }
}

function catchupToggleFunction() {
  // var button = document.getElementById("catchupButton");
  var content = document.getElementById("catchupToggleContent")
  var icon = document.getElementById("catchupToggle");
  var button = document.getElementById("catchupButton");

  if (content.classList.contains("d-none")) {
    content.classList.toggle("d-none");
    button.classList.toggle("active");
    icon.classList.remove("fa-angle-down");
    icon.classList.add("fa-angle-up");
  }

  else {
    content.classList.toggle("d-none");
    button.classList.toggle("active");
    icon.classList.remove("fa-angle-up");
    icon.classList.add("fa-angle-down");
  }

}


// document.getElementsByClassName("toc_h_one").onclick = toggleFunction();
// document.getElementsByClassName("toc_h_two").onclick = toggleFunction();
// document.getElementsByClassName("toc_h_three").onclick = toggleFunction();
// document.getElementById("toc_h_four").addEventListener("onclick", toggleFunction())

