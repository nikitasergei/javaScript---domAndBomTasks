window.onload = function () {
  var main = document.getElementById("main");
  var cont = document.getElementsByClassName("content");
  main.addEventListener("click", showContent);

  function showContent(event) {
    var target = event.target;
    for (var i = 0; i < cont.length; i++) {
      cont[i].style.display = "none";
    }
    target.children[0].style.display = "block";
  }

};