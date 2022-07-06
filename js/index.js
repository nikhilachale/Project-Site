import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCxFXL5zGD8OkHs83rc6RPhUY4XbvOxCls",
  authDomain: "educational-site-65e32.firebaseapp.com",
  projectId: "educational-site-65e32",
  storageBucket: "educational-site-65e32.appspot.com",
  messagingSenderId: "227655214336",
  appId: "1:227655214336:web:af4f912821752c32587fe5",
  measurementId: "G-1KHHLWPDKF"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.auth.Auth.Persistence.LOCAL;

$("#btn-login").click(function()
{
    var email = $("#email").val();
    var password = $("#password").val();

    if(email != "" && password != ""){
        var result = firebase.auth().signInWithEmailAndPassword();

        result.catch(function(error){
            var errorCode = error.code;
            var errorMesage = error.message;

            window.alert("Message : " + errorMessage);

        });
    }
    else{
        window.alert("please fill out all fields.");
    }
}
)