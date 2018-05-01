
var ourRequest = new XMLHttpRequest(); // stablish  connection to the url 
ourRequest.open("GET", "https://www.dallasopendata.com/resource/are8-xahz.json"); // open method with 2 argumments , "get' to get the data, and url address as second method. 
ourRequest.onload = function() {   //var ourRequest ,  then method "onload"
    // console.log(ourRequest.responseText); access de data to show on the console. 
    var ourData = JSON.parse(ourRequest.responseText); // store de data in to a variable "ourData"/. interpreter  all the result from "ourRequest.responseText" as JSON data
    console.log(ourData[0])
};

ourRequest.send();