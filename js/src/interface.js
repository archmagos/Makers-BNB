$(document).ready(function() {

  var listing = new Listing();

  $('#submit-details').on('click', function() {
    listing.setTitle($('#title').val());
    listing.setPrice($('#price').val());
    listing.setDescription($('#description').val());
  });
});
