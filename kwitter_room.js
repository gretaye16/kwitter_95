import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
 const firebaseConfig = {
      apiKey: "AIzaSyDu8cN2cDkby6Fk7RJM9Ca2A3aAzP-APK4",
      authDomain: "kwitter-f90ea.firebaseapp.com",
      databaseURL: "https://kwitter-f90ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-f90ea",
      storageBucket: "kwitter-f90ea.appspot.com",
      messagingSenderId: "289856761120",
      appId: "1:289856761120:web:3f62d577a0316429ecfb45"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+"!";


function addroom() {
      room_name=document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name) {
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html"
}