var animation = function () {
  var items, winH;

  var initModule = function () {
    items = document.querySelectorAll(".fadeIn");
    winH = window.innerHeight;
    _addEventHandlers();
  }

  var _addEventHandlers = function () {
    window.addEventListener("scroll", _checkPosition);
    window.addEventListener("load", _checkPosition);
    window.addEventListener("resize", initModule);
  };

  var _checkPosition = function () {
    for (var i = 0; i < items.length; i++) {
      var posFromTop = items[i].getBoundingClientRect().top;
      if (winH > posFromTop + 100) {
        items[i].classList.add("active");
      }
    }
  }

  return {
    init: initModule
  }
}

animation().init();





var heroSection = document.querySelector(".hero");
var girlEyes = document.querySelector(".deco-girl-eyes-container");
var eyeMotion = function (e) {
  var posX = ((e.clientX / window.innerWidth * 2) - 1) * 2.1;
  var posY = ((e.clientY / window.innerWidth * 2) - 1) * 2.5;
  girlEyes.style.transform = `translate(${posX}px, ${posY}px)`;
}
heroSection.addEventListener("mousemove", eyeMotion);