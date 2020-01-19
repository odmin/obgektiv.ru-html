const axios = require("axios").default;

const list = document.getElementsByClassName("gallery-input");

if (list.length < 1) {
  console.warn("Your gallery don't have a input for switch");
}
for (let item of list) {
  item.addEventListener("change", function(){
    console.debug("checked");
    let content;
    if (this.checked === true) {
      content = this.getAttribute("data-true");
    }
    else {
      content = this.getAttribute("data-false");
    }
    if (content.length > 0) {
      let html = axios.get(content)
        .then(response => {
          for (let container of document.getElementsByClassName("gallery-container")) {
            container.innerHTML = response.data;
          }
        })
        .catch(function (error) {
          // handle error
          console.error(error);
        });
    }
    else {
      console.error("Content urls did not set on data-attributes");
    }
  });
}
