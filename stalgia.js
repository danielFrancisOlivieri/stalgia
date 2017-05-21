
$(document).ready(function(){


//$('textarea').autoResize();

console.log("spurk");
var text, value, anEmail;

value = $("#userText").val();

text = $("#userText").text();


console.log("value" + value);

console.log("text" + text);



$("#submitButton").click(function(){
  value = $("#userText").val();
  text = $("#userText").text();

  title = $("#titleInput").val();

  anEmail = $("#email").val();

  console.log (value);
  console.log (text);
  console.log (title);
  console.log(anEmail);
  console.log("**********************");

  if (title.length < 1)
  {
    title = "Memory";
  }
emailjs.send("gmail","official",{memoryTitle: title, message: value, email: anEmail})
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
