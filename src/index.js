import { loadHomeContent } from "./loadHomeContent";
import { clearContent } from "./clearContent";
import { createHeader } from "./createHeader";
import { loadContactContent } from "./loadContactContent";
import { loadMenuContent } from "./loadMenuContent";

//Create 
content = document.getElementById("content");
createHeader(document.body);
loadHomeContent(content);


let btnHome = document.getElementById("btn-home");
let btnContact = document.getElementById("btn-contact");
let btnMenu = document.getElementById("btn-menu");

btnHome.onclick = function() {
    clearContent(content);
    loadHomeContent(content);
}

btnContact.onclick = function() {
    clearContent(content);
    loadContactContent(content);
}

btnMenu.onclick = function() {
    clearContent(content);
    loadMenuContent(content);
}



