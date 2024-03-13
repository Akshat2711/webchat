import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";


const firebaseConfig = {
  apiKey: "AIzaSyBAUhQnvst1RvP-JQfcoeR80ui4VstKK6Y",
  authDomain: "testing-88bc3.firebaseapp.com",
  databaseURL: "https://testing-88bc3-default-rtdb.firebaseio.com",
  projectId: "testing-88bc3",
  storageBucket: "testing-88bc3.appspot.com",
  messagingSenderId: "633592353172",
  appId: "1:633592353172:web:5fa3678eacc9125a90bf81",
  measurementId: "G-DX55Q8CSS2"};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//extratowrite 
import {getDatabase,ref,child,get,set,update,remove} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js"
const db=getDatabase();
///////////////////////////////DATABASE ABOVE CONNECTION OBJ//////////////////////////////////////////////////////////////////////////////////////////////////////////


var generatedotp;
var username=document.getElementById("name").value;
var userpass=document.getElementById("pass").value;
var useremail=document.getElementById("email").value;
var userotp=document.getElementById("otp").value;



function otp()
{   
  var useremail=document.getElementById("email").value;

    generatedotp = Math.floor(1000 + Math.random() * 9000);
    Email.send({
      SecureToken:"e0fe881c-fbbf-489a-b81c-9301e1ca7e43",
      To: useremail,
      From: 'akshatsrivastava206@gmail.com',
      Subject: 'OTP FOR SIGN UP',
      Body: 'Hello there! your OTP is '+generatedotp,
  }).then(
      message => alert("check your email for otp!")
  );
}


function submitform()
{
var username=document.getElementById("name").value;
var userpass=document.getElementById("pass").value;
var useremail=document.getElementById("email").value;
var userotp=document.getElementById("otp").value;

if(userotp==generatedotp){
alert("correct OTP");

var emailpath=useremail.replace(/[.#$\[\]]/g, '');;//to replace . present in email as not allowed in database


const dbRef=ref(db);
  set(ref(db,'usersinf/'+emailpath),{
    user:username,email:useremail,pass:userpass}
).then(()=>{
    console.log("database updated succesfully!");
    alert("database updated succesfully!");
}).catch((error)=>{
    alert("unsuccesfull");
    console.log("error unable to add data to database!");
})}









else{
alert("incorrect OTP");

}
}






otpgen.addEventListener("click",otp);
submit.addEventListener("click",submitform);
