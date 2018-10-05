/*function setupCalendars() {
   // Embedded Calendar
   /*Calendar.setup({
      dateField: 'embeddedDateField',
      parentElement: 'embeddedCalendar'
   })*/

// Popup Calendar
/*Calendar.setup({
      dateField: 'popupDateField',
      triggerElement: 'popupDateField'
   })
}

Event.observe(window, 'load', function() {
   setupCalendars()
})*/

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

function maxCard(objId) {
   document.getElementById(objId).style.width = "97%";
   document.getElementById(objId).onclick =  function() {
      minCard(objId);
   };;
   document.getElementById(objId).style.position = "absolute";
}

function minCard(objId) {
   document.getElementById(objId).style.width = "30%";
   document.getElementById(objId).onclick = function() {
      maxCard(objId);
   };;
   document.getElementById(objId).style.position = "static";
}
