function writeToForm() {
  var first_name = $('#first_name').val();
  var last_name = $('#last_name').val();
  var email = $('#email').val();

  console.log("Pulled information: " + first_name + ", " + last_name + ", " + email);

  $.ajax({
    url: "https://docs.google.com/forms/d/e/1FAIpQLSfhgB5L9q21RXl3HWr2jRJHI5DgBNuRf4M_jTG_6uN0Ev9y7w/formResponse",
      //https://docs.google.com/forms/d/e/1FAIpQLSerArjIG51KGDAZwlKdl9ySuQBWBvf5Sv3y626QC6uBXWm2vw/formResponse
    data: {
      "entry.196738818": first_name,
      "entry.987771062": last_name,
      "entry.596617604": email
    },
    type: "POST",
    dataType: "jsonp",
    cache: false,
    statusCode: {
      0: function() {
          //Success message
          console.log("Success, status code 0!");
      },
      200: function() {
          //Success Message
          console.log("Success, status code 200!");
      }
    }
    });
  }
