function resizeMargin() {
   var larg = (document.body.clientWidth);
   var haut = (document.body.clientHeight);

   var singleMargin = (larg * 0.095) / 6;
   cards = document.getElementsByClassName('card');
   for (var i = 0; i < cards.length; i++)
      cards[i].style.margin = singleMargin + "px";

   /*pics = document.getElementsByClassName('pic');
   var minH = pics[1].height;
   console.log(minH);
   for (var i = 0; i < pics.length; i++) {
      if (pics[i].height < minH) {
         minH = pics[i].height;
      };
   }
   for (var i = 0; i < pics.length; i++)
      pics[i].style.maxHeight  = minH + "px";*/
}

window.onload = resizeMargin();
window.onresize = resizeMargin;
