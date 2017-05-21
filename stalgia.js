
$(document).ready(function(){

console.log("spurk");
var text, value;

value = $("#userText").val();

text = $("#userText").text();

console.log("value" + value);

console.log("text" + text);



$("#submitButton").click(function(){
  value = $("#userText").val();
  text = $("#userText").text();
  console.log("**********************");
emailjs.send("gmail","rick",{our_name: "Daniel", theMessage: value})
.then(function(response) {
   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
}, function(err) {
   console.log("FAILED. error=", err);
});

});

});




  /*

function sendMail()
{
console.log("stuckle");

emailjs.send("gmail","template_ZLsXrLsz",{name: "James", notes: "Check this out!"})
.then(function(response) {
   console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
}, function(err) {
   console.log("FAILED. error=", err);
});


  var mailBody= $("#userText").val();
  console.log("spurk");
  console.log(mailBody);
  window.location="mailto:dfolivieri@gmail.com?subject=hii&body="+mailBody;
  */



/*
$(document).ready(function(){
   console.log("spurk");
$("#submitButton").click(function()
{
   var mailBody= $("#userText").val();
   console.log("spurk");
   console.log(mailBody);
   window.location="mailto:dfolivieri@gmail.com?subject=hii&body="+mailBody;
});
});
*/
