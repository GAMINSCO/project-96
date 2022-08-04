const firebaseConfig = {
      apiKey: "AIzaSyDlxNbCj5JPl1N-C2Cmjn6mJP6JX_ZEi4s",
      authDomain: "kwitter-6a600.firebaseapp.com",
      databaseURL: "https://kwitter-6a600-default-rtdb.firebaseio.com",
      projectId: "kwitter-6a600",
      storageBucket: "kwitter-6a600.appspot.com",
      messagingSenderId: "307522776790",
      appId: "1:307522776790:web:fc9e7fe7f62592ebd0e377"
};
  
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user_name");
roomname = localStorage.getItem("roomname");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      console.log("function logout works!");
      localStorage.removeItem("roomname");
      localStorage.removeItem("user_name");
      window.location = "index.html";
}

function send() {
      console.log("function send works!");
      msg = document.getElementById("main_input").value
      firebase.database().ref(roomname).push({
            name: username,
            message: msg,
            like: 0
      
      })
      document.getElementById("main_input").value = "";
}