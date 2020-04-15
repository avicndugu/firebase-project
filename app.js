// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyC_-aEzOYrB4AcTRTpJECjcrpLnRS4AmH8",
  authDomain: "medium-sunday.firebaseapp.com",
  databaseURL: "https://medium-sunday.firebaseio.com",
  projectId: "medium-sunday",
  storageBucket: "medium-sunday.appspot.com",
  messagingSenderId: "1037577406253",
  appId: "1:1037577406253:web:8d8c44df2fe203cc6cb5a4",
  measurementId: "G-V1GDKZ4HDK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var database= firebase.database();


// Start of reading firebase data stored
// // Working: Basic read operation on our existing data
// firebase.database().ref('users').on('value',(snap)=>{
//     console.log(snap.val());
// });

// Basic read operation on our existing data
database.ref('users').on('value',(snap)=>{
    var usersData= snap.val()
    listIt(usersData)
})
// End of basic read operation

// Adding the data to the DOM tree
const usersList = document.getElementById("users-list");

function listIt (users){
  users.forEach(function (user) {
    var li = document.createElement('li');
    li.textContent=`Age: ${user.age} Email: ${user.email} Name: ${user.name}`;
    usersList.appendChild(li);
    console.log(user, user.age, user.email, user.name);
  })
}
// End of adding the data to the DOM tree

