$(document).ready( function () {
    $("body").append('<audio id="audio_file" controls></audio');
    $(".w_tg-tlc-storybody").before('<audio id="audio_file" controls></audio');
    $("#audio_file").attr({
        'src':'http://www.uscis.gov/files/nativedocuments/Track%2093.mp3',
        'volume':0.4,
        'autoplay':'autoplay'
    });

    $("audio:hover, audio:focus, audio:active").css({
        "-webkit-box-shadow": "15px 15px 20px rgba(0,0, 0, 0.4)",
        "-moz-box-shadow": "15px 15px 20px rgba(0,0, 0, 0.4)",
        "box-shadow": "15px 15px 20px rgba(0,0, 0, 0.4)",
        "-webkit-transform": "scale(1.05)",
        "-moz-transform": "scale(1.05)",
        "transform": "scale(1.05)"
    });
    
    $("#audio_file").css({
        "-webkit-transition":"all 0.5s linear",
        "-moz-transition":"all 0.5s linear",
        "-o-transition":"all 0.5s linear",
        "transition":"all 0.5s linear",
        "-moz-box-shadow": "2px 2px 4px 0px #006773",
        "-webkit-box-shadow":  "2px 2px 4px 0px #006773",
        "box-shadow": "2px 2px 4px 0px #006773",
        "-moz-border-radius":"7px 7px 7px 7px",
        "-webkit-border-radius":"7px 7px 7px 7px",
        "border-radius":"7px 7px 7px 7px" 
    });
})