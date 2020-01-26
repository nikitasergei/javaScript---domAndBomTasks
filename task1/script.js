window.onload = function () {
  function onChangeTrackBar() {
    document.getElementById('trackBarValue').innerHTML = document.getElementById('trackbar').value;
  }
  var trackBar = document.getElementById('trackbar');
  trackBar.onchange = onChangeTrackBar;
}