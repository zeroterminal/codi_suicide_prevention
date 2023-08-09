// PAGES
const home             = document.getElementById("home");
const goal             = document.getElementById("goal");
const gallery          = document.getElementById("gallery");
const CTA              = document.getElementById("services");
const contact          = document.getElementById("contact");

// BUTTONS
const home_button      = document.getElementById("home_button");
const goal_button      = document.getElementById("goal_button");
const gallery_button   = document.getElementById("gallery_button");
const CTA_button       = document.getElementById("CTA_button");
const contact_button   = document.getElementById("contact_button");

// functions
home_button.onclick = function() {
    document.getElementById("home").scrollIntoView("smooth");
}

goal_button.onclick = function() {
    document.getElementById("goal").scrollIntoView("smooth");
}

gallery_button.onclick = function() {
    document.getElementById("gallery").scrollIntoView("smooth");
}

CTA_button.onclick = function() {
    document.getElementById("CTA").scrollIntoView("smooth");
}

contact_button.onclick = function() {
    document.getElementById("contact").scrollIntoView("smooth");
}




const counter_section = document.getElementById("counter");
const counter_number  = document.getElementById("counter-number");


let counter = 1000000;

function suiciders() {
    let random = Math.floor(Math.random() * 2) + 1 ;
    counter += random;
    
    counter_number.textContent = counter;
}

setInterval(suiciders, 600);
