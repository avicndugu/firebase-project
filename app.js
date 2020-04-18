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

////////////////////////////////////////////////////
// Start of reading firebase data stored
// // Working: Basic read operation on our existing data
// firebase.database().ref('users').on('value',(snap)=>{
//     console.log(snap.val());
// });

// // Basic read operation on our existing data
function readDatabase(){
  firebase
    .database()
    .ref('users')
    .on('value',(snap)=>{
      var usersData= snap.val()
      listIt(usersData)
  })
}

readDatabase();
// // End of basic read operation

// // Adding the data to the DOM tree
const usersList = document.getElementById("users-list");

function listIt (users){
  // console.log(Object.keys(users))
  Object.keys(users).forEach(function (user) {
    // console.log(user); // key
    // console.log(users[user]); // value
    var li = document.createElement('li');
    li.textContent=`Age: ${users[user].age} Email: ${users[user].email} Name: ${users[user].name}`;
    usersList.appendChild(li);
    function searchName(searchTerm){
      if (users[user].name==searchTerm){
        // console.log(users[user]);
      }else{
          // console.log("No user found")
        }
    }
  searchName("Anita");
  });
}



// // End of adding the data to the DOM tree
//////////////////////////////////////////////////////////////////////////////////////////////
function updateDatabase(age, email, username, name){
  firebase
    .database()
    .ref('users/')
    .child(username).update({
      age:age,
      name: name,
      email:email
    });
}
updateDatabase(39, 'weewie@gmail.com', 'Lalav  Elein', 'Kimondi')
// updateDatabase(36, 'anitawew@gmail.com', 'Anita')

////////////////////////////////////////////////////

// Add new data to the database code
/////////////////////////////////////////////////////
// Working: Function to write the data to the database
function writeUserData(age, email, name) {
  firebase
    .database()
    .ref('users')
    .push({
        name: name,
        email: email,
        age: age
      },
      function(error) {
        if (error) {
          // console.log("Data could not be saved." + error);
        } else {
          // console.log("Data saved successfully.");
        }
    })
}

// // test the function to write the data to the database with raw data without the form
writeUserData(31, 'anitawew@gmail.com', 'Anita');
//////////////////////////////////////////////////////////////////////////////////


// // ////////////////////////////////////////////////////////
// // Working: Function to delete user
// function deleteUser(userId) {
//   return firebase
//     .database()
//     .ref('/users/' + userId)
//     .remove();
// }

// // Call the function with specific user
// deleteUser("-M5BzOBxcaUe74SHbCmQ")
// ////////////////////////////////////////////////////////////
// Read single user
function readSingleUser(username){
  firebase
    .database()
    .ref('users')
    .child(username)
    .on('value',(snap)=>{
      var userData= snap.val()
      console.log(userData)
    })
}
readSingleUser("Lalav  elein");
//////////////////////////////////////////////////////////////
