import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
 import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
 import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"


 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA_xetjBg8rK5N-blvC02pQ-z_MTQ3g_IQ",
   authDomain: "satishform-1db1b.firebaseapp.com",
   projectId: "satishform-1db1b",
   storageBucket: "satishform-1db1b.appspot.com",
   messagingSenderId: "605569953686",
   appId: "1:605569953686:web:4a5a8e0a3e1c0a6d3337b7"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 
  function showMessage(message, divId){
     var messageDiv=document.getElementById(divId);
     messageDiv.style.display="block";
     messageDiv.innerHTML=message;
     messageDiv.style.opacity=1;
     setTimeout(function(){
         messageDiv.style.opacity=0;
     },4000);
  }
  const signUp=document.getElementById('submitSignUp');
  signUp.addEventListener('click', (event)=>{
     event.preventDefault();
     const email=document.getElementById('rEmail').value;
     const password=document.getElementById('rPassword').value;
     const firstName=document.getElementById('fName').value;
     const lastName=document.getElementById('lName').value;
 
     const auth=getAuth();
     const db=getFirestore();
 
     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential)=>{
         const user=userCredential.user;
         const userData={
             email: email,
             firstName: firstName,
             lastName:lastName
         };
         showMessage('Account Created Successfully', 'signUpMessage');
         const docRef=doc(db, "users", user.uid);
         setDoc(docRef,userData)
         .then(()=>{
             window.location.href='index.html';
             window.location.href="librarymanagement.html"
         })
         .catch((error)=>{
             console.error("error writing document", error);
 
         });
     })
     .catch((error)=>{
         const errorCode=error.code;
         if(errorCode=='auth/email-already-in-use'){
             showMessage('Email Address Already Exists !!!', 'signUpMessage');
         }
         else{
             showMessage('unable to create User', 'signUpMessage');
         }
     })
  });
 
  const signIn=document.getElementById('submitSignIn');
  signIn.addEventListener('click', (event)=>{
     event.preventDefault();
     const email=document.getElementById('email').value;
     const password=document.getElementById('password').value;
     const auth=getAuth();
 
     signInWithEmailAndPassword(auth, email,password)
     .then((userCredential)=>{
         showMessage('login is successful', 'signInMessage');
         const user=userCredential.user;
         localStorage.setItem('loggedInUserId', user.uid);
         window.location.href='homepage.html';
         window.location.href="librarymanagement.html";
     })
     .catch((error)=>{
         const errorCode=error.code;
         if(errorCode==='auth/invalid-credential'){
             showMessage('Incorrect Email or Password', 'signInMessage');
         }
         else{
             showMessage('Account does not Exist', 'signInMessage');
         }
     })
  })
 
 
 






 
