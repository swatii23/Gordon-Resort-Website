

let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});


let signup=document.querySelector("#sign-up-btn")
let login=document.querySelector("#login-btn")




// firsebase start

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-app.js";
  import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyCQysjOaY2BtfXBoxomXc0VeQDSklAczck",
    authDomain: "login-signup-1cb8a.firebaseapp.com",
    projectId: "login-signup-1cb8a",
    storageBucket: "login-signup-1cb8a.appspot.com",
    messagingSenderId: "27140695174",
    appId: "1:27140695174:web:c2dcbe0f6e2ecc8f549d07",
    measurementId: "G-VKX4MQ3VC1"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  

 
signup.addEventListener("click",(e)=>{
e.preventDefault();
const auth = getAuth();
let email=document.getElementById("up_email").value ;
let password=document.getElementById("up_pass").value;


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    document.querySelector("#up_email").value="";
    document.querySelector("#up_pass").value="";
    document.querySelector("#up_pass2").value="";
    document.querySelector("#up_name").value="";

    // ...
    Swal.fire({
      icon: 'success',
      title: 'Signup Successful!',
      text: 'You have successfully signed up.',
  });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorMessage);
    // alert(errorMessage)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: errorMessage,
  });
    

  });
})
 
login.addEventListener("click",async(e)=>{
  e.preventDefault();
  let email=document.getElementById("in_email").value ;
  let password=document.getElementById("in_pass").value;
  const auth = await getAuth();
 
await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    console.log("hi")
    const user = userCredential.user;

    window.location.assign("index.html")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("this is error");
    Swal.fire({
      icon: 'error',
      title: 'Login Failed',
      text: errorMessage,
  });
  });

})


  