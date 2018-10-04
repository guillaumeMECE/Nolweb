function setupCalendars() {
   // Embedded Calendar
   /*Calendar.setup({
      dateField: 'embeddedDateField',
      parentElement: 'embeddedCalendar'
   })*/

   // Popup Calendar
   Calendar.setup({
      dateField: 'popupDateField',
      triggerElement: 'popupDateField'
   })
}

Event.observe(window, 'load', function() {
   setupCalendars()
})

function tstReservation() {
   var date = document.getElementById("popupDateField").textContent;
   console.log(date);
   var heure = document.getElementById("horaire").value;
   console.log(heure);


   var database = firebase.database();
   database.ref('/reservationLocal/' + (date + "-" + heure + "-" + (heure + 1))).on('value', function(snapshot) {
      if (!(snapshot.exists())) { // tst si première co ou pas
         const ref = database.ref('/reservationLocal/' + (date + "-" + heure + "-" + (heure + 1)));
         ref.set({ // creation et sauvegarde du profil
            reservation: true
         });
      }else {
         //alert("impossible");
      }
   });
}
