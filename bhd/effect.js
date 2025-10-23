$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
    });

    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();
        $(this).fadeOut('slow').delay(1000).promise().done(function () {
            $('#stop').fadeIn('slow');
        });
    });


    $('#stop').click(function () {
        var audio = $('.song')[0];
        audio.pause();          // Stop playback
        audio.currentTime = 0;  // Reset song to beginning

        // Hide off button and show play button again
        $(this).fadeOut('slow').promise().done(function () {
            $('#play').fadeIn('slow');
        });
    });
});
