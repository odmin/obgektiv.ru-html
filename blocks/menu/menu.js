const list = document.getElementsByClassName("menu--item");
for (let item of list) {
    if(window.location.href === item.href) {
      item.classList.add("menu--item__current");
      console.debug("Added current class for " + item.className.toString())
    }
    else {
      item.classList.remove("menu--item__current")
      console.debug("Removed current from " + item.className.toString())
    }
}
