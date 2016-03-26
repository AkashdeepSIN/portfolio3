"use strict";

// setup your function
(function() {

    if (document.getElementById("about") != null) {
        console.log("About Page");
    } else if (document.getElementById("projects") != null) {
        console.log("Projects Page");
    } else if (document.getElementById("contact") != null) {
        console.log("Contact Page");
        //declare variables and create a reference to form elements
        var name = document.getElementById("name");
        var email = document.getElementById("email");
		var mobile = document.getElementById("mobile");
		var message = document.getElementById("message");
		var checkMeOut= document.getElementById("checkMeOut");
        var submitButton = document.getElementById("submitButton");
        submitButton.pre

        // checkbox event listener
        checkMeOut.addEventListener("change", function () {

            if (checkMeOut.checked) {
                console.log("It's checked");
            } else {
                console.log("It's unchecked");
            } // end else
        }); // end addEventListener
        
        submitButton.addEventListener("click", function(event){
            event.preventDefault();
            console.log("Name: " + name.value);
            console.log("Email: " + email.value);
			console.log("Mobile: " + mobile.value);
			console.log("Message: " + message.value);
        });
        
	}
	



})();

