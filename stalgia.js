/*

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    console.log(decodedCookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
*/

/*
// creates a cookie
$(document).ready(function() {

  $("#deposit").click(function(){

// gets the input from the textarea
var memoryToDeposit = $("#userTextArea").val();
console.log(memoryToDeposit);

   var d = new Date();
   d.setTime(d.getTime() + (30*24*60*60*10000));
   var expires = "expires="+ d.toUTCString();
   var toBeCookie = "memory=" + memoryToDeposit + ";" + expires + ";";
   console.log(toBeCookie);
   document.cookie = toBeCookie;
console.log(getCookie("memory"));

*/

/*
console.log(memoryToDeposit);

document.cookie = "memory = " + memoryToDeposit + "expires=Thu, 1 Dec 2019 12:00:00 UTC;"

console.log(document.cookie);

*/

function setCookie(cname,cvalue) {
    var d = new Date();
    d.setTime(d.getTime() + (300*24*60*600*10000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(cvalue);
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
var cvalue = $("#userTextArea").val();
setCookie("memory", cvalue);

    var user=getCookie("memory");

}


$(document).ready(function() {

  $("#deposit").click(function(){
    var cname = "memory";
    var cvalue = $("#userTextArea").val();

     checkCookie();

console.log( getCookie(cname));



// return cookie


});
});







// parse function that really needs to be renamed or broken down into different pieces
$(document).ready(function() {



    // end of experimenting ground
    function parse(document) {
        console.log("success");

        $("#chooseQuestion").change(function() {

            $("#ourText").show();


            var questionChosen = $('#chooseQuestion').val();


            // if user chooses "What do you want to remember from today?"
            if (questionChosen == "What do you want to remember from today?") {

                // this snag of code clears out whatever is in the jumbotron
                $("#content").empty();
                $("#ourText").add("div").addClass("content");
            //    $("#inputBar").hide();
                // finds persona and moves to text of that tag
                $(document).find("PERSONA").each(function() {
                    var $persona = $(this);
                    $("#content").append("<p class = \"charList\">" + $persona.text() + "</p> <br>");
                });

            }
            // else if for choosing type of search
            else if (questionChosen == "What did you learn today?") {

                // this snag of code clears out whatever is in the jumbotron
                $("#content").empty();
                $("#ourText").add("div").addClass("content");
                $("#inputBar").show();

                // hides the div in case you want a blank screen
              //  $("#ourText").hide();

            }

            // search by scene or act
            else if (questionChosen == "Who do you appreciate today?") {
                // this snag of code clears out whatever is in the jumbotron
                $("#content").empty();
                $("#ourText").add("div").addClass("content");
              //  $("#inputBar").hide();


            }



        });

    };



});
