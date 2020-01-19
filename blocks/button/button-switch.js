let switches = document.getElementsByClassName("button--input");
for (let item of switches) {
item.addEventListener("click", function(){
  let attr = this.getAttribute("data-parent");
  if(this.checked) {
    document.getElementById(attr).classList.add("checked");
  }
  else {
    document.getElementById(attr).classList.remove("checked");
  }
})
}
