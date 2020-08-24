/*jshint esversion: 6 */
$(document).ready(function(){
    var song = document.getElementById("song");
    song.play();

    $('p').removeAttr('id');

    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
    anime.timeline({loop: false})
        .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    });

    $('').html(function (i, html) {
        var chars = $.trim(html).split("");
        return '<span>' + chars.join('</span><span>') + '</span>';
    });

    setTimeout(function() {
        $("#img_1, #img_2, #img_3, #img_4, #img_5, #img_6").fadeIn(2500);
    }, 1500);

    $('div').delay(2500).animate({'opacity':'1'},4000);
    $('p').delay(3000).animate({'opacity':'1'},3500);

    setTimeout(function() {
        $("#img_1, #img_2, #img_3, #img_4, #img_5, #img_6, #hi, #chrd").fadeOut(2500);
    }, 90000);

    setTimeout(function() {
        window.location.replace("./again.html");
    }, 100000);
});