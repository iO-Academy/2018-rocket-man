function shootLaser($city) {
    var cityid = $city.data('city')
    $city.addClass('laser')
    setTimeout(function () {
        $city.removeClass('laser')
    }, 300)
}
