window.onload = function () {
  var button = document.getElementById("generate");
  var table = document.getElementById('t');
  var monthTitle = document.querySelector("span");

  function tableCleaning() {
    while (table.rows.length > 1) {
      table.deleteRow(1);
    }
  }

  button.onclick = function createTable() {
    tableCleaning();
    var currentMonth = +(document.getElementById("input-month").value) - 1;
    var currentYear = +(document.getElementById("input-year").value);
    var temp = new Date(currentYear, currentMonth + 1, 1);
    var lastDay = temp.getDate();
    var d = new Date(currentYear, currentMonth, 1);
    monthTitle.innerHTML = d.toLocaleString('default', {month: 'long'}) + ", " + d.getFullYear();
    var t = d.getDay() - 1;
    if (t < 0) {
      t = 6;
    }
    var a = 0;
    while (d.getMonth() === currentMonth) {
      var tr = document.createElement('tr');
      var i = 0;
      while (i < 7) {
        var td = document.createElement('td');
        if (a === 0) {
          if (i < t) {
            td.innerHTML = '';
          } else {
            td.innerHTML = d.getDate();
            d.setDate(d.getDate() + 1);
          }
        } else {
          if (d.getDate() === lastDay) {
            d.setDate(d.getDate() + 1);
            break;
          }
          td.innerHTML = d.getDate();
          d.setDate(d.getDate() + 1);
        }
        tr.appendChild(td);
        i++;
      }
      table.appendChild(tr);
      a++;
    }
  };
};