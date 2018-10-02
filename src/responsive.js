function resizeMargin() {
   var larg = (document.body.clientWidth);
   var haut = (document.body.clientHeight);

   var singleMargin = (larg * 0.095) / 6;
   cards = document.getElementsByClassName('card');
   for (var i = 0; i < cards.length; i++)
      cards[i].style.margin = singleMargin + "px";
}

window.onload = resizeMargin();
window.onresize = resizeMargin;
