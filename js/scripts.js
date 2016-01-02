
$(document).ready(function () {

    /*
        Background slideshow
    */
    $('.coming-soon').backstretch([
      "./img/1.jpg"
    , "./img/2.jpg"
    , "./img/3.jpg"
    ], { duration: 3000, fade: 750 });

    /*
        Countdown initializer
    */
    var now = new Date();
    var countTo = 34 * 24 * 60 * 60 * 1000 + now.valueOf();
    $('.timer').countdown(countTo, function (event) {
        var $this = $(this);
        switch (event.type) {
            case "seconds":
            case "minutes":
            case "hours":
            case "days":
            case "weeks":
            case "daysLeft":
                $this.find('span.' + event.type).html(event.value);
                break;
            case "finished":
                $this.hide();
                break;
        }
    });
});

