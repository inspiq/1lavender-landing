/*===== HEADER ACTIVE AND SCROLL UP =====*/
window.onscroll = () => {
  if (window.scrollY > 1) {
    document.querySelector(".header").classList.add("header-active");
  } else {
    document.querySelector(".header").classList.remove("header-active");
  }
  if (window.scrollY > 600) {
    document.querySelector("#arrow-up").classList.remove("arrow-up-hide");
  } else {
    document.querySelector("#arrow-up").classList.add("arrow-up-hide");
  }
};

/*===== ACTIVE BURGER BUTTON =====*/
$(document).ready(function () {
  $(".nav__toggle").click(function () {
    $(this).toggleClass("toggle-active");
  });
});

/*===== MENU SHOW =====*/
const menu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

menu("nav-toggle", "nav-menu");

/*===== DISABLE MENU =====*/
const navLink = document.querySelectorAll(".nav__link"),
  navMenu = document.getElementById("nav-menu");

function linkAction() {
  navMenu.classList.remove("show");
  document.querySelector(".nav__toggle").classList.remove("toggle-active");
}

navLink.forEach((n) => n.addEventListener("click", linkAction));

/*===== ANIMATED TEXT =====*/
const animItems = document.querySelectorAll("._anim-items");

if (animItems.length > 0) {
  window.addEventListener("scroll", animOnScroll);
  function animOnScroll(params) {
    for (let index = 0; index < animItems.length; index++) {
      const animItem = animItems[index];
      const animItemHeight = animItem.offsetHeight;
      const animItemOffset = offset(animItem).top;
      const animStart = 4;

      let animItemPoint = window.innerHeight - animItemHeight / animStart;
      if (animItemHeight > window.innerHeight) {
        animItemPoint = window.innerHeight - window.innerHeight / animStart;
      }

      if (
        pageYOffset > animItemOffset - animItemPoint &&
        pageYOffset < animItemOffset + animItemHeight
      ) {
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("_anim-no-hide"))
          animItem.classList.remove("_active");
      }
    }
  }
  function offset(el) {
    var rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
  }
  setTimeout(() => {
    animOnScroll();
  }, 150);
}

/*===== SCROLL DIV =====*/
$(document).ready(function () {
  $('[data-href^="#"]').on("click", function (e) {
    e.preventDefault();
    var t = 50;
    var d = $(this).attr("data-href")
      ? $(this).attr("data-href")
      : $(this).attr("href");
    $("html,body")
      .stop()
      .animate({ scrollTop: $(d).offset().top - 250 }, t);
  });
});

/*===== SHOW MORE BTN =====*/
let btnMoreShow = document.querySelector('.product__show');

btnMoreShow.addEventListener('click', function (event) {
  let hiddenItems = Array.prototype.slice.call(document.querySelectorAll('.hideable')),
  showing = btnMoreShow.textContent === "Показать еще";

  hiddenItems.forEach(function(item){
    if(!showing){
      item.classList.add("hidden-item");
      btnMoreShow.style.bottom = '40px';
    } else {
      item.classList.remove("hidden-item");
      btnMoreShow.style.bottom = '0px';
    }

    btnMoreShow.textContent = btnMoreShow.textContent === "Показать еще" ? "Скрыть товары" : "Показать еще";
  });
});
