function tstReservation() {
   var date = document.getElementById("dateField").value;
   console.log(date);
   var heure = document.getElementById("horaire").value;
   console.log(heure);


   var database = firebase.database();
   database.ref('/reservationLocal/' + (date + "-" + heure)).on('value', function(snapshot) {
      if (!(snapshot.exists())) { // tst si première co ou pas
         const ref = database.ref('/reservationLocal/' + (date + "-" + heure));
         ref.set({ // creation et sauvegarde du profil
            reservation: true
         });
      } else {
         alert("impossible");
      }
   });
}

function upScale(objId) {
   var cpt = 49;
   var lim = 97;

   var id = setInterval(frame, 5);

   function frame() {
      if (cpt == lim) {
         clearInterval(id);
      } else {
         cpt += 16;
         document.getElementById(objId).style.width = cpt + "%";
      }
   }
}

function downScale(objId) {
   var cpt = 78;
   var lim = 30;

   var id = setInterval(frame, 5);

   function frame() {
      if (cpt == lim) {
         //document.getElementById(("column-" + objId)).appendChild(document.getElementById(objId));
         clearInterval(id);


      } else {
         cpt -= 16;
         document.getElementById(objId).style.width = cpt + "%";
      }
   }
}

function maxCard2(objId) {
   document.getElementById('imgCard2').style.width = "100%";
   upScale(objId);
}

function maxCard1(objId) {
   //document.getElementById('imgCard2').style.width = "100%";
   upScale(objId);
}

function maxCard3(objId) {
   //document.getElementById('imgCard2').style.width = "100%";
   upScale(objId);
}

function maxCard(objId) {
   //document.getElementById(objId).style.width = "97%";
   document.getElementById('imgCard2').style.width = "100%";
   document.getElementById('fullCardDiv').appendChild(document.getElementById(objId));
   document.getElementById(objId).onclick = function() {
      minCard(objId);
   };;
   //document.getElementById(objId).style.position = "relative";
   if (objId == 'card2') {
      maxCard2(objId);
   } else if (objId == 'card1') {
      maxCard1(objId);
   } else {
      maxCard3(objId);
   }
}

function minCard(objId) {
   downScale(objId);
   //document.getElementById(objId).style.width = "30%";
   document.getElementById(("column-" + objId)).appendChild(document.getElementById(objId));
   document.getElementById(objId).onclick = function() {
      maxCard(objId);
   };;
}
