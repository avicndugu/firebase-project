Found this tutorial on pluralsight that has all the need of what I want to accomplish.
https://app.pluralsight.com/library/courses/firebase-fundamentals/table-of-contents
Duration: 3h 45m
Course Overview
Introduction
Firebase Basics
Reading Data
Writing Data
Querying Data
Indexing Data
Authentication
Authorization and Validation


How to install it and query it
Data design

Indexing

Aunthetication

Security and authorisation

Going to production

1. Why firebase?
NoSQL databases
It is proven by a large number of developers and backed by google.
Real time data.
Versatile: Can work with any front-end.

The course uses jquery and underscore templates: two technologies I am not familiar with.
After seeing this, I want to run away and look for another course.
11:30-11:51
I have decided to stick around after looking around for about 5 minutes.

### Firebase firestore
Easily sync data to different apps.
Basics, reading, writing, querying data, indexing and security of data

### Create project
1. Go to https://console.firebase.google.com/u/1/
2. Click the create project button.
3. Allow analytics add the analytics property and click create project.
    Finishing up…ssdb-test
Your new project is ready
Click continue and get redirected to project dashboard.

Enable firebase
By default the firebase used realtime database. Change that configuration by:
    1. Enable cloud firestore
    2. Configuration script.

Currently, firebase gives you a choice.
Click on Develop > database to create database.
Choose: Start in production mode
click next, and then done.
After this is done, click on project overview again.
Choose web (</>) icon to get the configuration details.
Choose the web app name: 
and click register.
Copy the code that appears

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCznAjymiDvNREhQEHDeJxoZHZJZiS_kIo",
    authDomain: "ssdb-test.firebaseapp.com",
    databaseURL: "https://ssdb-test.firebaseio.com",
    projectId: "ssdb-test",
    storageBucket: "ssdb-test.appspot.com",
    messagingSenderId: "914852613263",
    appId: "1:914852613263:web:12ff66e91be80715c6f4fa",
    measurementId: "G-4SXN5R7T9Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

then click proceed to console.

1151-1217
---------------------------------------------------------------
### Setup the development environment:


Struggled to look for the link to clone. The basic setup project. The github link provided does not have the files indicate. So I abandoned that tutorial and I am now looking for Articles that have:
Vanilla javascript and firebase implementation.
I Have found two articles that I want to look at and try them.
1. https://medium.com/@rajatamil/learn-to-build-firebase-crud-app-with-javascript-part-1-reading-data-b3f8f8e0d924
2. https://medium.com/@rajatamil/in-this-firebase-crud-javascript-web-tutorial-you-will-be-learning-how-to-do-create-update-and-c3ca4f4da15d
These uses realtime db while I my setup has firestore database.

Vanilla Javascript and firebase app.
Source files: https://github.com/tpkahlon/javascript/tree/master/27A
Published here: https://angry-mcclintock-c3e2db.netlify.com/
1233-1258
------------------------------------------------------------------
Create a new project:medium-sunday
Go back to the console home page.

Click on web deployment and give the app a nickname: 
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-analytics.js"></script>

<script>
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
</script>


### Create json file
Since this database system uses json to store data
Sample user json data: 

{
  "users" : [ 
     {"name": "Alex Meraz",
       "age" : 24,
       "email" : "ameraz@email.com"
     },
     {"name":"Mohammed Rafi",
       "age" : 21,
       "email" : "mrafi@email.com"
     },
     {"name":"Raja Tamil",
       "age" : 31,
       "email" : "rtamil@email.com"
     },
     { "name":"Sundar Pichai",
       "age" : 21,
       "email" : "spichai@email.com"
     }]
}

Open a text editor and paste this data:
Save as json file with a .json filename extension.

### Choose realtime database:
Click the Realtime database option:
Choose Start in test mode option that has this json:
Get set up quickly by allowing all reads and writes to your database.
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
Get set up quickly by allowing all reads and writes to your database
Click on the three dots menu and click import data.
Choose your json file and add it.

### Reading the data from the database
A had an error that troubled me:
Uncaught TypeError: firebase.database is not a function at 

If you check the code, you copypasted, there is  a comment:

<!-- TODO: Add SDKs for Firebase products that you want to use
https://firebase.google.com/docs/web/setup#available-libraries -->
If you read this comment, it says to add any products you need, so in your case, add the line:


It turns out I had to add realtime db script tag below the first script tag and that sorted it.
<script src="https://www.gstatic.com/firebasejs/7.14.0/firebase-database.js"></script>


https://medium.com/codingurukul/firebase-for-web-firebase-realtime-database-9280a52ced83
This tutorial ended up helping me in making basic operations in firebase.

var database= firebase.database();

// Basic read operation on our existing data
database.ref('users').on('value',(snap)=>{
    var usersData= snap.val()
    console.log(usersData)
})
// End of basic read operation
You should be able to get a result with the data already in the database.


I will use it for the other operations: delete and update.

1302-1501

Article ideas
firebase database is not a function 1-10k searches




