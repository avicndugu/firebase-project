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
Some reference notes that might be helpful during queries.
https://www.fullstackfirebase.com/realtime-database/notes

1302-1501

Article ideas
firebase database is not a function 1-10k searches
Database:
https://console.firebase.google.com/u/1/project/medium-sunday/database/medium-sunday/data


Learning objective:
Understand what an algorithm is. 
Be able to create an algorithm for a simple activity.
Be able to complete a simple coding activity.

Instruction:
Think of the instructions you would give somebody so that they can draw a smiley face.
In technology, the list of steps that you have just made is called an Algorithm!

1. Watch this video https://www.youtube.com/watch?v=Da5TOXCwLSg and respond the question:
what is an algorithm?

2. Think of something that you do daily. Write you own algorithm(step by step instructions) of how it is done. Examples: washing hands, drawing smiley face, jumping jacks, make a firework show.

Activity:
1. Create an algorithm to draw a square or rectangle in turtle academy https://turtleacademy.com/lessons/1 using the instructions found 
You can move the turtle with simple commands.
To move the turtle foward 50 steps use: fd 50
To turn the turtle a quarter to the right, use: rt 90
To turn the turtle a quarter to the left, use: lt 90

Write down the algorithm you used to draw a square or rectangle.

Resources (Video links, website, workbook page number):
Video: https://www.youtube.com/watch?v=Da5TOXCwLSg
Activity area: https://turtleacademy.com/lessons/1
Drawing shapes algorithms worksheet: 

Year 1:
Algorithm worksheet: https://code.org/curriculum/course2/2/Assessment2-EverydayAlgorithms.pdf
https://code.org/curriculum/course2/2/Activity2-RealLifeAlgorithms.pdf

Teacher resources
https://www.remc.org/mitechkids/2nd-grade/algorithm/
Code club has new lessons on html css, 3d modelling, sonic pi.







Laptop shopping
HP EliteBook 840 G3 Laptop 14" display
https://nairobicomputershop.co.ke/catalogue/hp-elitebook-840-g3-laptop-14-fhd-display-intel-core-i5-6300u-24ghz-256gb-ssd-8gb-ddr4-ram-webcam-wifi-windows-10-pro_250/

Lenovo ThinkPad T450 14in Laptop, Core i5 5300U 2.3GHz 4GB Ram 500GB HDD Windows 10 Pro 64bit Webcam
https://nairobicomputershop.co.ke/catalogue/lenovo-thinkpad-t450-14in-laptop-core-i5-5300u-23ghz-4gb-ram-500gb-hdd-windows-10-pro-64bit-webcam_252/


Minimum Laptop Requirements
Type: PC
Processor: Intel Core i5 or i7 or AMD equivalent
Display: 13” or larger
Memory: 8GB or higher for PC
Hard Drive: 256GB SSD or higher
I/O ports: Two USB 3.0 ports
Video out: HDMI or DisplayPort
Wireless: AC preferred, N minimum
OS: Windows 10 (preferred) for PC
Warranty: 3 years’ minimum


Slax OS 
Under 300 mb
Debian
RAM: 128 MB (offline usage) / 512 MB (for web browser usage)
CPU: i686 or newer


https://nairobicomputershop.co.ke/catalogue/hp-elitebook-8470p-laptop-intel-quad-core-i7-3740qm-27ghz-windows-10-pro-64-bit-4gb-ddr3-ram-500gb-hdd_260/

For the average consumer, I focus processor selection on three things: cores, cycles, and cost.

4 cores better thatn two.

While often limited by other reasons, a 3.0Ghz processor is roughly twice as fast as a 1.5Ghz processor.




Inserting data into firebase

There are 3 methods
  - Push()
  - Set() and
  - Update()



Write the function that will receive the form data and push it to the database:
// Function to write the data to the database
function writeUserData(age, email, name) {
  firebase
    .database()
    .ref('users/')
    .push({
      name: name,
      email: email,
      age: age
    });
}

Test the function with raw data
// test the function to write the data to the database with raw data without the form
writeUserData(33, 'larawara@gmail.com', 'Lara');

Add error handler to the push function so that you can know if your function call was successful.

.push({
        name: name,
        email: email,
        age: age
      },
      function(error) {
        if (error) {
          console.log("Data could not be saved." + error);
        } else {
          console.log("Data saved successfully.");
        }
    })




EDITING cCURRENT USERS
set() method will overwrite everything in that specific path and all other keys will be deleted. It’s kind of dangerous because you may lose data without knowing.



HTML form to add the data: 
<!-- add user module -->
<section id="add-user-module" >
  <button id="open-add-user-form-btn">+</button>
  <form>
    <h2>Add User</h2>
    name:<br>
    <input type='text' data-key='name' class='user-input'><br>
    age:<br>
    <input type='text' data-key='age' class='user-input'><br>
    email:<br>
    <input type='text' data-key='email' class='user-input'><br>
    <button type='button' id="add-user-btn">add user</button>
 </form>
</section>
