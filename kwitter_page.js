var firebaseConfig = {
      apiKey: "AIzaSyBdrb3s1sDlqujZcjub54QBUc_b80TCHYU",
      authDomain: "kwitter-6791b.firebaseapp.com",
      databaseURL: "https://kwitter-6791b-default-rtdb.firebaseio.com",
      projectId: "kwitter-6791b",
      storageBucket: "kwitter-6791b.appspot.com",
      messagingSenderId: "57359902021",
      appId: "1:57359902021:web:0673f27dbb4abc6b7eca2c"
    };
 
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

    function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;



      } });  }); }
getData();
