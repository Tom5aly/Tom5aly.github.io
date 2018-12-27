function myFunction() {
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("demo").innerHTML = n;
}
myFunction();

/* strat of contact */

$("#button-a").click(function() {
  swal({
    title: "tom.aly@hotmail.com"
  });
});

$(document).on("click", "#link", function(e) {
  swal({
    title: "Request a callback ",
    confirmButtonText: "Send an Email",
    showCancelButton: true
  }).then(result => {
    if (result.value) {
      window.location = href = "mailto:tom.aly@hotmail.com";
    } else if (result.dismiss === "cancel") {
      swal("Maybe later ", "Thank you :)");
    }
  });
});
