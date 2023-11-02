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
  let app = document.getElementById("app");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  //Creating list of five possible breeds:
  let breeds = ["Akita", "Labrador", "Pitbull", "Samoyed", "Whippet"];
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
    let wikiurl =
      "https://en.wikipedia.org/api/rest_v1/page/summary/" +
      breeds[i].toLowerCase();
    console.log(wikiurl);
    let text_response = await fetch(wikiurl);
    let summaryJSON = await text_response.json();
    let summaryText = summaryJSON.extract;
    text.innerText = summaryText;
    //"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque natus itaque voluptatem eos aspernatur necessitatibus facilis quidem assumenda cum, sequi perferendis aliquid laudantium nihil temporibus quos modi, nisi quis adipisci.";
    // fetching the sumary text from wikipedia

    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");
    let img = document.createElement("img");
    // Fetching the image:
    let url =
      "https://dog.ceo/api/breed/" + breeds[i].toLowerCase() + "/images/random";
    let img_response = await fetch(url);
    let dogJSON = await img_response.json();
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
