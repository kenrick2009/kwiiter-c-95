function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html" ;

}

var firebaseConfig = {
    apiKey: "AIzaSyDlZ13-PNcxfin71IbUJxWjfLcf8eJEPSw",
    authDomain: "kwitter-hw-76889.firebaseapp.com",
    databaseURL: "https://kwitter-hw-76889-default-rtdb.firebaseio.com",
    projectId: "kwitter-hw-76889",
    storageBucket: "kwitter-hw-76889.appspot.com",
    messagingSenderId: "339371482561",
    appId: "1:339371482561:web:1a6451263fdd7d26cea340"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase .database().ref("/").child(room_name).update
    ({
        purpose:"adding user"
    });;

    localStorage.setItem("room_name",room_name);
    

    


}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id= " + Room_names + "onclick = 'redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>" ;
document.getElementById("output").innerHTML = row ;
//End code
});});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location = "kwitter_page.html" ;
}





document.getElementById("user_name_label").innerHTML = "Welcome " + user_name + "!";







