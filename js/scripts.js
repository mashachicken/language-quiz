$(document).ready(function () {
  $("#language").submit(function (event) {
    event.preventDefault();
    console.log('submit')
    var firstInput = parseInt($("input:radio[name=usability]:checked").val());
    var secondInput = parseInt($("input:radio[name=skills]:checked").val());
    var thirdInput = parseInt($("input:radio[name=characteristics]:checked").val());
    var fourthInput = parseInt($("input:radio[name=name]:checked").val());
    var fithInput = parseInt($("input:radio[name=like]:checked").val());
    var total = (firstInput + secondInput + thirdInput + fourthInput);
    console.log(thirdInput + fithInput);
    if (total <= 5) {
      $("#cresult").toggle();
      $("#javascresult").hide();
      $("#pythonresult").hide();
    } else if (total > 5 && total <= 9) {
      $("#javascresult").toggle()
      $("#cresult").hide()
      $("#pythonresult").hide();
    } else if (total >= 10) {
      console.log('python');
      $("#pythonresult").toggle()
      $("#cresult").hide();
      $("#javascresult").hide();
    } else {
      $("#pythonresult").toggle()
      $("#cresult").hide();
      $("#javascresult").hide();
    }
  });
});