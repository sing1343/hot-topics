var $loadContent = document.querySelector(".main-content");
var $selectContent = document.querySelectorAll(".nav-bar");

var content = {};

fetch("./partials/home.html")
  .then(function (response) {
    return response.text();
  })
  .then(function (value) {
    $loadContent.innerHTML = value;
  })

var storeItems = function (url) {

  if (!content[url]) {

    fetch(url)
      .then(function (response) {
        return response.text();
      })
      .then(function (value) {
        content[url] = value;
        $loadContent.innerHTML = content[url];
      });
  } else {
    $loadContent.innerHTML = content[url];
  }
};


const clickhandler = function (e) {

  e.preventDefault();

  let k = e.target.href;

  storeItems(k);

};

for (let i = 0; i < $selectContent.length; i++) {

  $selectContent[i].addEventListener("click", clickhandler);

}