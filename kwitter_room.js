var firebaseConfig = {
      apiKey: "AIzaSyBdrb3s1sDlqujZcjub54QBUc_b80TCHYU",
      authDomain: "kwitter-6791b.firebaseapp.com",
      databaseURL: "https://kwitter-6791b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6791b",
      storageBucket: "kwitter-6791b.appspot.com",
      messagingSenderId: "57359902021",
      appId: "1:57359902021:web:0673f27dbb4abc6b7eca2c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    user_name = localStorage.getItem("user_name");
    function addRoom()
    {
room_name = document.getElementById("room_name").value
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomName(this.id)' ># "+Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}
      //End code
      });});}
getData();
