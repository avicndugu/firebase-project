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

### Setup the development environment: