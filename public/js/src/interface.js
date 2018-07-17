$(document).ready(function() {

  var listing = new Listing();

  $('#submit-details').on('click', function(event) {
    event.preventDefault();
    listing.setTitle($('#title').val());
    listing.setPrice($('#price').val());
    listing.setDescription($('#description').val());
    console.log(listing);
  });
});
