// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyA_yxo-tQ6JY8EaUSVstJOWq84XnouZDfM",
  authDomain: "let-s-chat-3c1e6.firebaseapp.com",
  databaseURL: "https://let-s-chat-3c1e6-default-rtdb.firebaseio.com",
  projectId: "let-s-chat-3c1e6",
  storageBucket: "let-s-chat-3c1e6.appspot.com",
  messagingSenderId: "566794343593",
  appId: "1:566794343593:web:d6230032121a23eca385b8",
  measurementId: "G-YQDV3EGHER"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.getAnalytics(app);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "Kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; 
  snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
 //End code
 });});}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location.replace("index.html");
  }