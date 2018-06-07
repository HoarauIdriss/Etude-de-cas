$(document).ready(function () {
  
      $.ajax({
          type: 'GET',
          url: 'http://localhost:3088/liste',
          success: function (dur) {

              $('#lol').html('<ul id="lola"></ul>');
              // for (var i = 0; i < dur.length; i++) {
              $.each(dur, function (index, value) {
                  $('#lola').append('<a href="#" class="list-group-item list-group-item-action list-group-item-primary">' + value.name.first + " "  + '<a>');


              });
          }
      });

  });
  

