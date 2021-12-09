const firebaseConfig = {
    apiKey: "AIzaSyDkcqqpTe1zsdDGtwlcawDyqv2w8ixRL6o",
    authDomain: "fun-chat-6fd75.firebaseapp.com",
    databaseURL: "https://fun-chat-6fd75-default-rtdb.firebaseio.com",
    projectId: "fun-chat-6fd75",
    storageBucket: "fun-chat-6fd75.appspot.com",
    messagingSenderId: "870631142626",
    appId: "1:870631142626:web:83d7ac9649cda4eaec9abb",
    measurementId: "${config.measurementId}"
  };
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);  
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome"+ user_name + "!";
 function addRoom() {
       room_name=document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
             purpose:"addingroomname"
       });
       localStorage.setItem("room_name", room_name);
       window.location="kwitter_room.html";
 }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   console.log("Roomname-"+ Room_names);
   row="<div class='room_name' id="+ Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>"; 
   document.getElementById("output").innerHTML += row;
   });});}
getData(); 
function redirectToRoomName() {
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location="kwitter_room.html";
}

function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
   window.location="index.html";
}