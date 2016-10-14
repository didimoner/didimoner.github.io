$(document).ready(function() {
  var obj = JSON.parse(json);
  console.log(obj);

  $('.title').text(obj['title']);

  $.each(obj['bands'], function(b_index, band) {
    var html_item = '';
    html_item += '<strong>Название:</strong> ' + band['name'] + '<br>';
    html_item += '<strong>Год основания:</strong> ' + band['year'] + '<br>';
    html_item += '<strong>Жанр:</strong> ' + band['genre'] + '<br>';
    html_item += '<strong>Список альбомов:</strong>' + '<br>';

    $.each(band['albums'], function(a_index, album) {
      var html_album = '';

      html_album += '<img src="img/' + album['cover'] + '">';
      html_album += album['title'] + ', ' + album['year'];

      html_item += '<div class="album-item">' + html_album + '</div>';
    });

    $('.wrap').append('<div class="wrap-item">' + html_item + '</div>');
  });
});

var json = '{"title":"Список групп","bands":[{"name":"Nirvana","genre":"Grunge","year":"1987","albums":[{"title":"Bleach","year":"1989","cover":"n_1.jpg"},{"title":"Nevermind","year":"1991","cover":"n_2.jpg"},{"title":"Incesticide","year":"1992","cover":"n_3.jpg"},{"title":"In Utero","year":"1993","cover":"n_4.jpg"},{"title":"MTV Unplugged in New York","year":"1994","cover":"n_5.jpg"}]},{"name":"Linkin Park","genre":"Alternative","year":"1996","albums":[{"title":"Hybrid Theory","year":"2000","cover":"l_1.jpg"},{"title":"Meteora","year":"2003","cover":"l_2.jpg"},{"title":"Minutes to Midnight","year":"2007","cover":"l_3.jpg"},{"title":"A Thousand Suns","year":"2010","cover":"l_4.jpg"},{"title":"Living Things","year":"2012","cover":"l_5.jpg"},{"title":"The Hunting Party","year":"2014","cover":"l_6.jpg"}]	}]}';
