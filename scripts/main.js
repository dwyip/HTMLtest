/*//Creating a variable
var myHead = document.querySelector('h1');
myHead.textContent = 'Hello Sun & Rain'

//When you click on the webpage
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}
*/

//Swaps image between clicks.
var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/samoyed.jpg') {
      myImage.setAttribute ('src','images/ragdoll.jpg');
    } else {
      myImage.setAttribute ('src','images/samoyed.jpg');
    }
}

//Adding personalized welcome message
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
  var myName = prompt('Please enter name');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozza is yum, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
