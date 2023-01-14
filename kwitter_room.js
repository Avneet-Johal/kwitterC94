const firebaseConfig = {
      apiKey: "AIzaSyAGNr2WuggbanoskiyzjcLB2tkACiPIINA",
      authDomain: "kwitter-d1357.firebaseapp.com",
      databaseURL: "https://kwitter-d1357-default-rtdb.firebaseio.com",
      projectId: "kwitter-d1357",
      storageBucket: "kwitter-d1357.appspot.com",
      messagingSenderId: "179443343451",
      appId: "1:179443343451:web:2b8b41ca53f14cebae1f7e"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
