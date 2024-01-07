function loadMenuContent(wrapper) {
    //set variables
    const content = wrapper;
    let bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    
    //create heading
    let heading = document.createElement("h1");
    heading.innerText = "Menu Page";

    //create blurb
    let blurb = document.createElement("p");
    blurb.innerText = bodyText;

    //append all to content div
    content.append(heading, blurb);

    console.log("menu page loaded");
}

export {loadMenuContent};