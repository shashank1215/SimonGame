if ($(window).width() < 600) {
  $('.col').addClass('btnsm');
} else {
  $('.col').addClass('btnlg');
}
var correct = [];
var j = 0;
var lvl = 1;
var game = 0;
var colour = ["green", "red", "yellow", "blue"];
var audio;

function nxt() {
  var rand = Math.floor(Math.random() * 4);
  correct.push(rand);console.log(correct);
  $("." + colour[rand]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  audio = new Audio(colour[rand] + ".mp3");
  audio.play();
}
$(document).keydown(function() {
  $("h1").text("level " + lvl);
  game = 1;
  nxt();
})

$(".btn").click(function() {
  if (game == 1) {
    var i = $(this).attr("id");
    $("." + colour[i]).addClass("pressed");
    audio = new Audio(colour[i] + ".mp3");
    audio.play();
    setTimeout(function() {
      $("." + colour[i]).removeClass("pressed");
      if(correct[j]==i){
        j++;
        if(j==correct.length){
        lvl++;
        j = 0;
        $("h1").text("level " + lvl);
        nxt();
    }}
    }, 100);
    if (correct[j] != i) {
      $("h1").text("Game over!! You reached level " + lvl + ".\n Press any key start again.");
      audio = new Audio("wrong.mp3");
      audio.play();
      j = 0;
      lvl = 0;
      while (correct.length) correct.pop();
      game = 0;

    }
  }
});
