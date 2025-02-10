const bagOpen = document.querySelector(".bag-wrapper");
const asideBar = document.getElementById("aside");
const bagClose = document.querySelector(".aside-close");

bagOpen.addEventListener("click", () => {
  asideBar.classList.add("active");
});
bagClose.addEventListener("click", () => {
  asideBar.classList.remove("active");
});

const plusBtn = document.querySelectorAll(".plus-btn");
plusBtn.forEach((button) => {
  button.addEventListener("click", (event) => {
    const menuAside = event.target.closest(".card-menu");
    addtoMenu(menuAside);
  });
});

const asideContent = document.querySelector(".aside-content");
const addtoMenu = (menuAside) => {
  const menuImgSrc = menuAside.querySelector("img").src;
  const menuTitle = menuAside.querySelector(".card-menu-title").textContent;
  const menuPrice = menuAside.querySelector(".card-menu-price").textContent;

  const menuItems = asideContent.querySelectorAll(".card-menu-title");
  for (let item of menuItems) {
    if (item === menuTitle) {
      alert("nope");
      return;
    }
  }

  const asideMenu = document.createElement("div");
  asideMenu.classList.add(".aside-menu");
  asideMenu.innerHTML = `
        <div class="aside-menu">
            <div class="aside-menu-img">
                <img src="${menuImgSrc}" alt="">
            </div>
            <div class="aside-menu-detail">
                <h1 class='aside-menu-title'>${menuTitle}</h1>
                <h2 class='aside-menu-price'>$${menuPrice}</h2>
                <div class="aside-menu-btn">
                    <button class="decrement-btn">-</button>
                    <h2 class="aside-menu-count">1</h2>
                    <button class="increment-btn">+</button>
                </div>
            </div>
            <div class="aside-menu-delete">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    `;

  asideContent.append(asideMenu);
};
