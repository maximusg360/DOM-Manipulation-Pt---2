function buildSubMenuEl(array, subMenuEl) {
    subMenuEl.innerHTML = "";
    array.forEach((link) => {
      let aEl = document.createElement("a");
      aEl.setAttribute("href", link.href);
      aEl.innerHTML = link.text;
      subMenuEl.append(aEl);
    });
  }
  export{
    buildSubMenuEl
  }