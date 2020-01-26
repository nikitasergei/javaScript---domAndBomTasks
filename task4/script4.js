window.onload = function () {
  var w = document.documentElement.clientWidth;

  window.onscroll = function () {
    var scr = window.scrollTop();
    var winHei = document.documentElement.clientHeight;
    var h = document.documentElement.clientHeight;

    if ((scr + winHei) >= h) {
      alert("End");
    }
  };
}
  //


