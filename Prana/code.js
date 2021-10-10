onEvent("button1", "click", function(click) {
  setScreen("login-2");
});
onEvent("button2", "click", function(Verify) {
  var password = getText("text_input2");
  var password_check = getText("text_input4");
  if (password=="") {
    setText("error_login", "Please enter a valid password");
  } else {
    if (password!=password_check) {
      setText("error_login", "Your passwords don't match!");
    } else {
      setScreen("welcome_screen");
    }
  }
});
onEvent("button3", "click", function(display) {
  setScreen("Homescreen");
});
onEvent("map_button", "click", function(display ) {
  setScreen("Mapscreen");
});
onEvent("Quest_button", "click", function(pop_quest) {
  showElement("Quest_pop");
  showElement("questaccept");
});
onEvent("questaccept", "click", function( ) {
  hideElement("Quest_pop");
  hideElement("questaccept");
});
onEvent("map_button", "click", function(show) {
  setScreen("Mapscreen");
});
onEvent("home_button", "click", function( ) {
  setScreen("Homescreen");
});
onEvent("floris", "click", function( ) {
  setScreen("florist");
});
onEvent("mich", "click", function( ) {
  console.log("hello");
});
onEvent("florcomm", "click", function( ) {
  showElement("popup");
  showElement("communityjoin");
});
onEvent("communityjoin", "click", function( ) {
  hideElement("communityjoin");
  hideElement("popup");
});
onEvent("diy", "click", function( ) {
  setScreen("diyscreen");
});
onEvent("diycomm", "click", function( ) {
  showElement("diycoacc");
  showElement("diypopco");
});
onEvent("diycoacc", "click", function( ) {
  hideElement("diycoacc");
  hideElement("diypopco");
});
onEvent("recycle", "click", function( ) {
  setScreen("recyclingscreen");
});
onEvent("recyclecomm", "click", function( ) {
  showElement("rec_pop");
  showElement("rec_com_accept");
});
onEvent("rec_com_accept", "click", function( ) {
  hideElement("rec_com_accept");
  hideElement("rec_pop");
});
onEvent("button7", "click", function( ) {
  setScreen("Mapscreen");
});
onEvent("button6", "click", function( ) {
  setScreen("Mapscreen");
});
onEvent("button4", "click", function( ) {
  setScreen("Mapscreen");
});



