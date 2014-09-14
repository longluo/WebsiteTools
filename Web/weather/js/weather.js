// Docs at http://simpleweatherjs.com
//$(document).ready(function() {
//    $.simpleWeather({
//        location: 'Shenzhen, CN',
//        woeid: '2161853',
//        unit: 'c',
//        success: function(weather) {
//            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
//            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
//            html += '<li class="currently">'+weather.currently+'</li>';
//            html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
//
//            $("#weather").html(html);
//        },
//        error: function(error) {
//            $("#weather").html('<p>'+error+'</p>');
//        }
//    });
//});

// Docs at http://simpleweatherjs.com

/* Does your browser support geolocation? */
if ("geolocation" in navigator) {
    $('.js-geolocation').show();
} else {
    $('.js-geolocation').hide();
}

/* Where in the world are you? */
$('.js-geolocation').on('click', function() {
    navigator.geolocation.getCurrentPosition(function(position) {
        loadWeather(position.coords.latitude+','+position.coords.longitude); //load weather using your lat/lng coordinates
    });
});

/*
 * Test Locations
 * Austin lat/long: 30.2676,-97.74298
 * Austin WOEID: 2357536
 */
$(document).ready(function() {
    loadWeather('Shenzhen','2161853'); //@params location, woeid
});

function loadWeather(location, woeid) {
    $.simpleWeather({
        location: location,
        woeid: woeid,
        unit: 'c',
        success: function(weather) {
            html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
            html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
            html += '<li class="currently">'+weather.currently+'</li>';
            html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';

            //Don't forget to include the moment.js plugin.
            var timestamp = moment(weather.updated);
            html += '<p>Weather updated '+moment(timestamp).fromNow()+'</p>';
            html += '<p>Weather updated at '+moment(timestamp).format('MM/DD/YY h:mma')+'</p>';

            $("#weather").html(html);
        },
        error: function(error) {
            $("#weather").html('<p>'+error+'</p>');
        }
    });
}
