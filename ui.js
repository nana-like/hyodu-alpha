(function () {

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


  var heroSection = document.querySelector(".hero");
  var girlEyes = document.querySelector(".deco-girl-eyes-container");
  var winW = window.innerWidth;

  var getWinW = function () {
    winW = window.innerWidth;
  }
  var eyeMotion = function (e) {
    var posX = ((e.clientX / winW * 2) - 1) * 2.1;
    var posY = ((e.clientY / winW * 2) - 1) * 2.5;
    if (winW < 1060) {
      var posX = ((e.clientX / winW * 2) - 1) * 1.2;
      var posY = ((e.clientY / winW * 2) - 1) * 1.5;
    }
    girlEyes.style.transform = `translate(${posX}px, ${posY}px)`;
  }

  animation().init();
  window.addEventListener("resize", getWinW);
  heroSection.addEventListener("mousemove", eyeMotion);
})();