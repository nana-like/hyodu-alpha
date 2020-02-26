var fadeInItem = document.querySelector(".slogan-container");
var scrollEvt = function () {

  var winH = window.innerHeight;
  var scrollY = window.scrollY;
  var posFromTop = fadeInItem.getBoundingClientRect().top;
  var absolutePos = scrollY + posFromTop;

  console.log("winH: ", winH);
  console.log("scrollY: ", scrollY);
  console.log("posFromTop: ", posFromTop);
  console.log("absolutePos: ", absolutePos);
}


window.addEventListener("scroll", scrollEvt);






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