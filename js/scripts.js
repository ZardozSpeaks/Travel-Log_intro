function Location(city, month, landmark) {
  this.city = city;
  this.month = month;
  this.landmark = landmark;
  this.trip = [];
}

Location.prototype.userPlace = function() {
  return this.city + ", " + this.month + ", " + this.landmark;
}

$(function () {
  $("form#tripInfo").submit(function(event) {
    event.preventDefault();

    var userCity = $("input.newCity").val();
    var userMonth = $("input.newMonth").val();
    var userLandmark = $("input.newLandmark").val();
    var newLocation = new Location(userCity, userMonth, userLandmark);



    $("ul#places").append("<li><span class='places'>" + newLocation.city + "</span></li>");

    $(".places").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text("Place Visited");
      $(".city").text(newLocation.city);
      $(".month").text(newLocation.month);
      $(".landmark").text(newLocation.landmark);
      $("ul#addresses").text("");
      newLocation.forEach(function(location) {
        $("ul#userPlace").append("<li>" + location.userPlace() + "</li>");
      });
    });



  });
});
