//
//variable
//

let needHelp = -1;
let takeInOUT = -1;
let total_price = 0;

let currentRow = -1;
let initPage = true;
let menuBasketInfos = new Array();

let menu = [
  [
    {
      name: "원조 김밥",
      price: 3500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20190701_DHK%EC%B4%AC%EC%98%81_%EC%95%BC%EC%B1%84%EA%B9%80%EB%B0%A5_Side_01_1080x640.jpg?width=384&amp;height=273&amp;quality=100",
      isSelect: 0,
      afew: 1,
      row: 0,
      column: 0,
    },
    {
      name: "참치 김밥",
      price: 4000,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20190801_DHK%EC%B4%AC%EC%98%81_%EC%B0%B8%EC%B9%98%EA%B9%80%EB%B0%A5_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 0,
      column: 1,
    },
    {
      name: "돈까스 김밥",
      price: 4500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20190801_DHK%EC%B4%AC%EC%98%81_%EB%8F%88%EA%B9%8C%EC%8A%A4%EA%B9%80%EB%B0%A5_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 0,
      column: 2,
    },
  ],
  [
    {
      name: "원조 라면",
      price: 4500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20190801_DHK%EC%B4%AC%EC%98%81_%EB%9D%BC%EB%A9%B4_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 1,
      column: 0,
    },
    {
      name: "김치 라면",
      price: 5000,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20190924_DHK%EC%B4%AC%EC%98%81_%EA%B9%80%EC%B9%98%EB%9D%BC%EB%A9%B4_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 1,
      column: 1,
    },
    {
      name: "치즈 라면",
      price: 5000,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EB%B6%84%EC%8B%9D%EB%94%94%EC%A0%80%ED%8A%B8/%EB%B6%84%EC%8B%9D/%EC%8A%A4%ED%83%81_20210819_DHK%EB%82%B4%EB%B6%80_%EC%B9%98%EC%A6%88%EB%9D%BC%EB%A9%B4_Side01_1080x640_RXQM13.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 1,
      column: 2,
    },
  ],
  [
    {
      name: "어묵탕",
      price: 6000,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EA%B5%AD%EB%AC%BC%EC%9A%94%EB%A6%AC-%EC%B0%8C%EA%B0%9Cn%ED%83%95%EB%A5%98/%EC%8A%A4%ED%83%81_20190911_DHK%EC%B4%AC%EC%98%81_%EC%98%A4%EB%8E%85%ED%83%95_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 2,
      column: 0,
    },
    {
      name: "우동",
      price: 6500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%9D%BC%EC%8B%9D%EB%8F%88%EA%B9%8C%EC%8A%A4/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20190813_DHK%EC%B4%AC%EC%98%81_%EC%9A%B0%EB%8F%99_Side01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 2,
      column: 1,
    },
    {
      name: "칼국수",
      price: 7500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%ED%95%9C%EC%8B%9D/%EB%A9%B4%EB%A5%98/%EC%8A%A4%ED%83%81_20190704_DHK%EC%B4%AC%EC%98%81_%EC%B9%BC%EA%B5%AD%EC%88%98_Side_01_1080x640.jpg?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 2,
      column: 2,
    },
  ],
  [
    {
      name: "콜라 1.25L",
      price: 3500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%9D%8C%EB%A3%8C%EC%A3%BC%EB%A5%98/%EC%9D%8C%EB%A3%8C/%EC%8A%A4%ED%83%81_20171027_yogiyo_mg9443_%EC%BD%9C%EB%9D%BC06_1080x640.png?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 3,
      column: 0,
    },
    {
      name: "사이다 1.25L",
      price: 3500,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%9D%8C%EB%A3%8C%EC%A3%BC%EB%A5%98/%EC%9D%8C%EB%A3%8C/%EC%8A%A4%ED%83%81_20171027_yogiyo_mg9404_%EC%82%AC%EC%9D%B4%EB%8B%A406_1080x640.png?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 3,
      column: 1,
    },
    {
      name: "생수 2L",
      price: 2000,
      imgSrc:
        "https://images.yogiyo.co.kr/image/yogiyo/STOCK_IMG/%EC%9D%8C%EB%A3%8C%EC%A3%BC%EB%A5%98/%EC%9D%8C%EB%A3%8C/%EC%8A%A4%ED%83%81_20171208_yogiyo_mg_5182_%EC%83%9D%EC%88%9801_1080x640.png?width=384&height=273&quality=100",
      isSelect: 0,
      afew: 1,
      row: 3,
      column: 2,
    },
  ],
];

//variable save & load
function saveVariable() {
  localStorage.setItem("needHelp", JSON.stringify(needHelp));
  localStorage.setItem("takeInOUT", JSON.stringify(takeInOUT));
  localStorage.setItem("total_price", JSON.stringify(total_price));

  localStorage.setItem("currentRow", JSON.stringify(currentRow));
  localStorage.setItem("initPage", JSON.stringify(initPage));
  localStorage.setItem("menuBasketInfos", JSON.stringify(menuBasketInfos));

  localStorage.setItem("menu", JSON.stringify(menu));
}

function loadVariable() {
  if (JSON.parse(localStorage.getItem("needHelp")) != null) {
    needHelp = JSON.parse(localStorage.getItem("needHelp"));
  }
  if (JSON.parse(localStorage.getItem("takeInOUT")) != null) {
    takeInOUT = JSON.parse(localStorage.getItem("takeInOUT"));
  }
  if (JSON.parse(localStorage.getItem("total_price")) != null) {
    total_price = JSON.parse(localStorage.getItem("total_price"));
  }

  if (JSON.parse(localStorage.getItem("currentRow")) != null) {
    currentRow = JSON.parse(localStorage.getItem("currentRow"));
  }
  if (JSON.parse(localStorage.getItem("initPage")) != null) {
    initPage = JSON.parse(localStorage.getItem("initPage"));
  }
  if (JSON.parse(localStorage.getItem("menuBasketInfos")) != null) {
    menuBasketInfos = JSON.parse(localStorage.getItem("menuBasketInfos"));
  }

  if (JSON.parse(localStorage.getItem("menu")) != null) {
    menu = JSON.parse(localStorage.getItem("menu"));
  }
  console.log(needHelp);
  console.log(takeInOUT);
  console.log(total_price);

  console.log(currentRow);
  console.log(initPage);
  console.log(menuBasketInfos);
  
  console.log(menu);
}

loadVariable();
localStorage.clear();

//
//const element
//

//index.html
const bodyElement = document.querySelector("#index-page-body");

//help.html
const homeElement = document.querySelector(".header-grid-imgItem"); // index.html 빼고 모두 사용
const helpItemElements = document.querySelectorAll(".help-item-center");

//take.html
const takeItemElements = document.querySelectorAll(".take-item-center");

//main.html
const mainHelpElements = document.querySelector("#help-main");
const prevButtonElement = document.querySelector("#prev-to-take");
const nextButtonElement = document.querySelector("#next-to-detail");
const caterogyElemnts = document.querySelectorAll(".menu-category-items");
const menuContainer = document.querySelector("#menu-sub-container");
const shoppingBasketContainer = document.querySelector(
  ".shopping-basket-item-container"
);
const totalPriceElement = document.querySelector(".shopping-basket-sum h3");

let menuSubItemElements = document.querySelectorAll(".menu-sub-items");
let shoppingBasketItemElements = document.querySelectorAll(
  ".shopping-basket-items"
);
let cancelButtonElements = document.querySelectorAll(".shopping-basket-x");
let downButtonElements = document.querySelectorAll(
  ".shopping-basket-downButton"
);
let upButtonElements = document.querySelectorAll(".shopping-basket-upButton");
