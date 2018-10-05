function googleLogin() {
   document.getElementById("accountLogo").onclick = null; // evite de clicker plusieur fois dessus
   const provider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(provider).then(result => {
      // Show user information
      const user = result.user;
      console.log(user);
      // Change card tst
      document.getElementById("emailAdress").textContent = user.email;
      document.getElementById("googlePic").src = user.photoURL;
      initAccountLogo(user); // logo account refresh with user info

      initDataUser(user); // manage multi co
   }).catch(function(error) {
      // Handle Errors
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      // Show error
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      alert(errorMessage);
      document.getElementById("accountLogo").onclick = googleLogin; //reactive le btn en cas d'err
   });
}

function initAccountLogo(user) {
   document.getElementById("accountLogo").textContent = " ";
   document.getElementById("accountLogo").style.width = "0.9em";
   document.getElementById("accountLogo").style.height = "0.9em";
   document.getElementById("accountLogo").style.backgroundImage = 'url("' + user.photoURL + '")';
   document.getElementById("accountLogo").style.cursor = "default";
   document.getElementById("userName").textContent = user.displayName;
}

function initDataUser(user) {
   // console.log(user.uid);
   var database = firebase.database();
   database.ref('/users/' + user.uid).on('value', function(snapshot) {
      if (!(snapshot.exists())) { // tst si première co ou pas
         const ref = database.ref('/users/' + user.uid);
         ref.set({ // creation et sauvegarde du profil
            username: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            membreNol: false // attribut pour la reservation
         });
      }
   });
}
