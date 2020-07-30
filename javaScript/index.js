$(document).ready(function(){
    $('#hey').delay(100).animate({'opacity':'1'},2000);
    $('#main').delay(1000).animate({'opacity':'1'},2000);
    var song = document.getElementById("song");
    $(window).click(function() {
        song.play();
        window.location.replace("./html/chrd.html");
    });
});