function googleLogin() {
   document.getElementById("accountLogo").onclick=null; //evite de clicker plusieur fois dessus
   const provider = new firebase.auth.GoogleAuthProvider();

   firebase.auth().signInWithPopup(provider).then(result => {
      // Show user information
      const user = result.user;
      console.log(user);
      // Change card
      document.getElementById("userName").textContent = user.displayName;
      document.getElementById("emailAdress").textContent = user.email;
      document.getElementById("googlePic").src = user.photoURL;
      //document.getElementById("accountLogo").src=Content = user.email;
      document.getElementById("accountLogo").textContent= " ";
      document.getElementById("accountLogo").style.width="1em";
      document.getElementById("accountLogo").style.height="1em";
      document.getElementById("accountLogo").style.backgroundImage= 'url("'+user.photoURL+'")';
   }).catch(function(error) {
      // Handle Errors
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // Show error
      console.log(errorCode);
      console.log(errorMessage);
      console.log(email);
      alert(errorMessage);
      document.getElementById("accountLogo").onclick=googleLogin;//reactive le btn en cas d'err
   });
}
