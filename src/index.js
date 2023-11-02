//import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}
async function fetchDogImage(url) {
  let response = await fetch(url);
  let json = await response.json();
  console.log(json);
}
async function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let url = "https://dog.ceo/api/breed/";
  let app = document.getElementById("app");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  //Creating list of five possible breeds:
  let breeds = ["Akita", "Chihuahua", "Labrador", "Samoyed", "Whippet"];
  console.log(breeds);
  for (let i = 0; i < 5; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "wiki-item");
    let header = document.createElement("h1");
    header.setAttribute("class", "wiki-header");
    header.innerText = breeds[i];
    //fetchDogImage(url);
    let content = document.createElement("div");
    content.setAttribute("class", "wiki-content");
    let text = document.createElement("p");
    text.setAttribute("class", "wiki-text");
    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");
    let img = document.createElement("img");
    // Fetching the image:
    let url =
      "https://dog.ceo/api/breed/" + breeds[i].toLowerCase() + "/images/random";
    let response = await fetch(url);
    let dogJSON = await response.json();
    let dog_img = dogJSON.message;
    img.setAttribute("class", "wiki-img");
    img.setAttribute("src", dog_img);

    imgContainer.appendChild(img);
    content.appendChild(text);
    content.appendChild(imgContainer);
    item.appendChild(header);
    item.appendChild(content);
    container.appendChild(item);
  }
  app.append(container);
}
