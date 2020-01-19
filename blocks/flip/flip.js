document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    const flip = document.getElementsByClassName('flip');
    for (let item of flip) {
      item.classList.add("flip__slide");
    }
  }, 300);
}, false);
