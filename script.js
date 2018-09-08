<!-- Script to allow minimum data as current date -->
datePickerId.min = new Date().toISOString().split("T")[0];
<!-- jQuery script to show div data -->
$("#myAnc").click(function(){
  $("#myDiv").show();
});
