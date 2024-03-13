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






function signinaccount(){
    var useremail=document.getElementById("email").value;
    var userpass=document.getElementById("pass").value;
  
    let usercheck=[];
     const dbRef=ref(db);
     get(child(dbRef,'usersinf'))
     .then((snapshot)=>{
      snapshot.forEach(childsnapshot=>{
      usercheck.push(childsnapshot.val());
      

     });
    

     for(var i=0;i<usercheck.length;i++){
        if(usercheck[i]['email']==useremail && usercheck[i]['pass']==userpass){
            var localuserstorage=usercheck[i]["user"];
            localStorage.setItem("username",JSON.stringify(localuserstorage));

            window.location.href = "chat.html";

        }

      
    }
    

    
    
    })
}
signin.addEventListener("click",signinaccount);