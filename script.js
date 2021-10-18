//////////////////////////////////////////////////
// Subj:        Coding Dojo > Web Fundamentals > Javascript
//              Button Clicker
// By:          Virgilio D. Cabading Jr.
// Created:     October 16, 2021
//////////////////////////////////////////////////

//// FUNCTION DECLERATION SECTION ////////////////

function add_likes(element) {                               // Function adds 1 to likes and gives alert that ninja was liked
    var str = element.innerText;                            // get what is written inside of element
    var match = str.match(/(\d+)/);                         // get the number in the string
    var temp_num = match[0];
    temp_num++;                                             // add 1 to the number of likes in the string
    element.innerText = temp_num + " likes";                // update the number of likes
    alert("Ninja was liked");                               // give out alert text box saying ninja was liked
}

function remove(element) {                                  // Function the removes the element from the screen
    element.remove();
}

function log_in_or_log_out(element) {                       // Function the alternates between the button
    if (element.innerText == "Log In") {                    //     saying "Log In" or "Log Out"
        element.innerText = "Log Out";
    } else {
        element.innerText = "Log In";
    }
}