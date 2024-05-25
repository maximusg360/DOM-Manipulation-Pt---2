const menuLinks = [
    { text: "about", href: "/about" },
    {
      text: "catalog",
      href: "#",
      subLinks: [
        { text: "all", href: "/catalog/all" },
        { text: "top selling", href: "/catalog/top" },
        { text: "search", href: "/catalog/search" },
      ],
    },
    {
      text: "orders",
      href: "#",
      subLinks: [
        { text: "new", href: "/orders/new" },
        { text: "pending", href: "/orders/pending" },
        { text: "history", href: "/orders/history" },
      ],
    },
    {
      text: "account",
      href: "#",
      subLinks: [
        { text: "profile", href: "/account/profile" },
        { text: "sign out", href: "/account/signout" },
      ],
    },
  ];
  
  const mainEl = document.querySelector("main");

  mainEl.style.background = "var(--main-bg)";
  
  mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

  mainEl.classList.add("flex-ctr");
  
  const topMenuEl = document.getElementById("top-menu");

  topMenuEl.style.height = "100%";
 
  topMenuEl.style.background = "var(--top-menu-bg)";

  topMenuEl.classList.add("flex-around");
  
  menuLinks.forEach((linkObj) => {
   
    const aEl = document.createElement("a");
   
    aEl.setAttribute("href", linkObj.href);
  
    aEl.textContent = linkObj.text;
    
    topMenuEl.append(aEl);
  });
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.background = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  const topMenuLinks = document.querySelectorAll("a");
  console.log(topMenuLinks);
  
  topMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName !== "A") {
      return;
    } else {
     
      topMenuLinks.forEach((a) => a.classList.remove("active"));
      mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
      event.target.classList.toggle("active");
  
      if (event.target.classList.contains("active")) {
        const currentLink = event.target.innerHTML;
        menuLinks.forEach((link) => {
          if (link.text === currentLink) {
            if (link.hasOwnProperty("subLinks")) {
              subMenuEl.style.top = "100%";
              buildSubMenuEl(link.subLinks);
            } else {
              subMenuEl.style.top = "0";
            }
          }
        });
      }
    }
  });
  
  function buildSubMenuEl(array) {
    subMenuEl.innerHTML = "";
    array.forEach((link) => {
      let aEl = document.createElement("a");
      aEl.setAttribute("href", link.href);
      aEl.innerHTML = link.text;
      subMenuEl.append(aEl);
    });
  }
  
  subMenuEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (!event.target.matches("a")) {
      return;
    } else {
      // console.log(event.target);
      subMenuEl.style.top = "0";
      topMenuLinks.forEach((link) => link.classList.remove("active"));
      mainEl.innerHTML = `<h1>${event.target.innerHTML}</h1>`;
    }
  });