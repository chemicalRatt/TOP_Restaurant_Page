function createHeader(content){
    const header = document.createElement('header');
    let homeButton = document.createElement('button');
    let contactButton = document.createElement('button');
    let menuButton = document.createElement('button');

    homeButton.id = "btn-home";
    homeButton.innerText = "Home";
    contactButton.id = "btn-contact";
    contactButton.innerText = "Contact";
    menuButton.id = "btn-menu";
    menuButton.innerText = "Menu";


    header.append(homeButton, contactButton, menuButton);
    content.insertBefore(header, content.firstChild);
}

export {createHeader};