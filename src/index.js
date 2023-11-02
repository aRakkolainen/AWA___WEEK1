//import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";

  let app = document.getElementById("app");
  let container = document.createElement("div");
  container.setAttribute("class", "container");
  /*<div class="wiki-item" >
  <h1 class="wiki-header">Breed X</h1>
  <div class="wiki-content">
     <p class="wiki-text">
       Some text about this breed.
     </p>
     <div class="img-container">
       <img class="wiki-img" src="">
     </div>
  </div>
</div> */
  for (let i = 0; i < 5; i++) {
    let item = document.createElement("div");
    item.setAttribute("class", "wiki-item");
    let header = document.createElement("h1");
    header.setAttribute("class", "wiki-header");
    header.innerText = "Breed " + (i + 1);
    let content = document.createElement("div");
    content.setAttribute("class", "wiki-content");
    let text = document.createElement("p");
    text.setAttribute("class", "wiki-text");
    let imgContainer = document.createElement("div");
    imgContainer.setAttribute("class", "img-container");
    let img = document.createElement("img");
    img.setAttribute("class", "wiki-img");
    img.setAttribute("src", "");
    imgContainer.appendChild(img);
    content.appendChild(text);
    content.appendChild(imgContainer);
    item.appendChild(header);
    item.appendChild(content);
    container.appendChild(item);
  }
  app.append(container);
}
