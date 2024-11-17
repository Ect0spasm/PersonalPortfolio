      //HOMESCREEN
//button to time period screen
onEvent("homeBtnTimePer", "click", function() {
 setScreen("timePerScreen");
});

//button to ridiculous fashion screen
onEvent("homeBtnRid", "click", function() {
 setScreen("ridFashScreen");
});

//button to understandng the style screen
onEvent("homeBtnUnderStyle", "click", function() {
 setScreen("underStyleScreen");
});

//button to citations page
onEvent("homeBtnCite", "click", function() {
 setScreen("citeScreen");
});

      //CITATIONS
//button to return to home screen
onEvent("citeBackBtn", "click", function () {
  setScreen("homeScreen");
});

      //TIME PERIODS THROUGH FASHION
//button to return to home screen
onEvent("timeBackBtn", "click", function () {
  setScreen("homeScreen");
});

//button to return to home screen
onEvent("timeResBackBtn", "click", function () {
  setScreen("homeScreen");
});

//button to see info to explain the fashion of the time period represented
onEvent("TPResBtn", "click", function() {
  setScreen("timePerScreenRes");
});

//button to return to home screen
onEvent("US-BackBtn", "click", function() {
  setScreen("homeScreen");
});

      //RIDICULOUS FASHION
//button to return to home screen
onEvent("ridBackBtn", "click", function() {
  setScreen("homeScreen");
});

      //UNDERSTANDING THE STYLE
//When you click the checkbox, the sound plays to completion
onEvent("US-checkbox", "click", function() {
  playSound("assets/category_instrumental/sax_downscale_2.mp3");
});

//Classmate Dane helped suggest a change in color of app background in order to lessen it's simplicity
