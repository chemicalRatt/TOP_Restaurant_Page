function loadPage() {
    //set variables
    const content = document.getElementById("content");
    const imgSrc = "https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg";
    let bodyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    //create image
    let img = new Image();
    img.src = imgSrc;

    //create heading
    let heading = document.createElement("h1");
    heading.innerText = "Welcome!";

    //create blurb
    let blurb = document.createElement("p");
    blurb.innerText = bodyText;

    //append all to content div
    content.append(img, heading, blurb);

    console.log("page loaded");
}

export {loadPage};