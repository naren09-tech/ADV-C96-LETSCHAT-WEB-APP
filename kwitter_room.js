var firebaseConfig = {
      apiKey: "AIzaSyAmmUiKRehI7e7X01Gcrymq0k4fpcobC5g",
      authDomain: "letschat-2-dbec3.firebaseapp.com",
      databaseURL: "https://letschat-2-dbec3-default-rtdb.firebaseio.com",
      projectId: "letschat-2-dbec3",
      storageBucket: "letschat-2-dbec3.appspot.com",
      messagingSenderId: "364330018901",
      appId: "1:364330018901:web:b0973fe68d49b858cd4cdc"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";
    function addRoom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
                purpose:"addRoomName"
          });
          localStorage.setItem("room_name",room_name);
          window.location="kwitter_page.html";
       }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room names-"+Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}