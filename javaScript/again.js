$(document).ready(function(){

    $('h1').delay(500).animate({'opacity':'1'},2000);

    var song = document.getElementById("song");
    $(window).click(function() {
        song.play();
        window.location.replace("./chrd.html");
    });
});