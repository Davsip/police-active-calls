var activeCalls = document.getElementById("calls"); // var  that points towards the empty div
var btn = document.getElementById("btn"); // target the button with the id and store it in to a variable

btn.addEventListener("click", function() {
  // add an Event listener and anonymous function

  var ourRequest = new XMLHttpRequest(); // stablish  connection to the url
  ourRequest.open(
    "GET",
    "https://www.dallasopendata.com/resource/are8-xahz.json"
  ); // open method with 2 argumments , "get' to get the data, and url address as second method.
  ourRequest.onload = function() {
    //var ourRequest ,  then method "onload"
    // console.log(ourRequest.responseText); access de data to show on the console.
    var ourData = JSON.parse(ourRequest.responseText); // store de data in to a variable "ourData"/. interpreter  all the result from "ourRequest.responseText" as JSON data
   
    // console.log(ourData[0]);
    renderHTML(ourData); // render html function to add html to the page
  };
  ourRequest.send();
}); // pasted Ax call

function renderHTML(data) {
  // create and add html to the page
  for (i = 0; i < data.length; i++) {
    let code = data[i].nature_of_call; //nature of the call is assigned to code variable
    let natureOfCallArr = code.split(""); //splits the string into an array variable
    let whiteOutArray = [];

    // console.log(natureOfCallArr);

    let whiteSpace = 0; // Counts the white space in the police code in the for loop

    for (let j = 0; j < natureOfCallArr.length; j++) {
      if (natureOfCallArr[j] === " ") { // checks if the index of 'i' is an space string 
        whiteSpace++;
      }
      if(whiteSpace === 2){
          for(let y = 1 + j; y < natureOfCallArr.length; y++){
            whiteOutArray.push(natureOfCallArr[y]); // push all of the 
          }
          break; //breaks the original for loop
      }
    };


    $("#table-body").append(
      "<tr><td>" +
        whiteOutArray.join("") + // joins the new array into a string
        "</td><td>" +
        data[i].block +
        "</td><td>" +
        data[i].location +
        "</td><td>" +
        data[i].date_time +
        "</td></tr>"
    );
  }

  // activeCalls.insertAdjacentHTML('beforeend', htmlString); //  target the empty div (activeCalls),  //dom elemnt insertAdja..
}
