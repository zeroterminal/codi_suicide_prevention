// PAGES
const home             = document.getElementById("home");
const goal             = document.getElementById("goal");
const contact          = document.getElementById("contact_page");
const get_educated     = document.getElementById("get_educated");
// BUTTONS
const home_button      = document.getElementById("home_button");
const goal_button      = document.getElementById("goal_button");
const contact_button   = document.getElementById("contact_button");
const get_educated_button = document.getElementById("get_educated_button");
// functions
home_button.onclick = function() {
    document.getElementById("home").scrollIntoView("smooth");
}

goal_button.onclick = function() {
    document.getElementById("goal").scrollIntoView("smooth");
}

contact_button.onclick = function() {
    document.getElementById("contact_page").scrollIntoView("smooth");
}

get_educated_button.onclick = function() {
    document.getElementById("get_educated").scrollIntoView("smooth");
}



const counter_section = document.getElementById("counter");
const counter_number  = document.getElementById("counter-number");


let counter = 699990;

function suiciders() {
    let random = Math.floor(Math.random() * 2) + 1 ;
    counter += random;
    
    counter_number.textContent = counter;
}

setInterval(suiciders, 600);
