window.onload = function () {
  var arr = ["img/1.png", "img/2.png", "img/3.png"];
  var button1 = document.getElementById("left");
  var button2 = document.getElementById("right");
  var i = 0;
  button1.onclick = function () {
    document.querySelector("img").src = arr[i-1];
    i--;
    if (i==0) {
      button1.style.display = "none";
    }
    button2.style.display = "block";
  };
  button2.onclick = function () {
    document.querySelector("img").src = arr[i+1];
    i++;
    if ((i+1)===arr.length){
      button2.style.display = "none";
    }
    button1.style.display = "block";
  }
};