const data = {
    email: $('#loginn-email').val(),
    password: $('#loginn-password').val()
  };
  
  let auth = null;
  
  firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
    .then((user) => {
      console.log("Authenticated successfully with payload:", user);
      auth = user;
    })
    .catch((error) => {
      console.log("Login Failed!", error);
    });