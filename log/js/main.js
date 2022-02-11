// TODO: Replace the following with your app's Firebase project configuration
		// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
		var firebaseConfig = {
			apiKey: "AIzaSyCYBl10eDT770hwJQQzsBgoAFWDgAPjBh0",
			authDomain: "afrodemoz-tech.firebaseapp.com",
			databaseURL: "https://afrodemoz-tech.firebaseio.com",
			projectId: "afrodemoz-tech",
			storageBucket: "afrodemoz-tech.appspot.com",
			messagingSenderId: "319212406837",
			appId: "1:319212406837:web:6dfc73680eb2b6dd6d097c",
			measurementId: "G-9F9ZKTTR8S"
			};
	
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);


// Java script for login and register//
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("bttn");

function register(){
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login(){
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
// END Java script for login and register//
