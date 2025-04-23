// --------------------
// NAVIGATION MENU 생성
// --------------------
const menuData = [
    {
    title: "회사소개",
    submenu: [
        { name: "CEO인사말", link: "sub01_1ceo.html" },
        { name: "주요연혁", link: "sub01_2history.html" },
        { name: "경영상태", link: "sub01_3financial.html" },
        { name: "사훈", link: "sub01_4moto.html" },
        { name: "CI소개", link: "sub01_5ci.html" }
    ]
    },
    {
    title: "사업소개",
    submenu: [
        { name: "건축사업", link: "sub02_1construction.html" },
        { name: "토목사업", link: "sub02_2public.html" },
        { name: "조경산업", link: "sub02_3landscape.html" },
        { name: "기전사업", link: "sub02_4electric.html" }
    ]
    },
    {
    title: "인재채용",
    submenu: [
        { name: "인재상", link: "sub03_1talent.html" },
        { name: "채용공고", link: "sub03_2hr.html" }
    ]
    },
    {
    title: "홍보센터",
    submenu: [
        { name: "뉴스", link: "sub04_1news.html" },
        { name: "수상내역", link: "sub04_2award.html" },
        { name: "기업PR", link: "sub04_3pr.html" }
    ]
    },
    {
    title: "고객센터",
    submenu: [
        { name: "찾아오시는 길", link: "sub05_1road.html" }
    ]
    }
];

// 메뉴 DOM 생성
const menuContainer = document.getElementById("mainMenu");
if (menuContainer) {
    menuData.forEach(menu => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = menu.title;
    li.appendChild(a);

    if (menu.submenu?.length) {
        const subUl = document.createElement("ul");
        menu.submenu.forEach(sub => {
        const subLi = document.createElement("li");
        const subA = document.createElement("a");
        subA.href = sub.link;
        const span = document.createElement("span");
        span.textContent = sub.name;
        subA.appendChild(span);
        subLi.appendChild(subA);
        subUl.appendChild(subLi);
        });
        li.appendChild(subUl);
    }

    menuContainer.appendChild(li);
    });
}

// 메뉴 상호작용
const menu = document.querySelector(".menu");
if (menu) {
    const menuUL = menu.querySelector("ul");
    const liList = menuUL.querySelectorAll(":scope > li");
    const nav = menu.closest("nav");

    liList.forEach(li => {
    const a = li.querySelector(":scope > a");

    li.addEventListener("mouseenter", () => {
        menu.classList.add("open");
        a.classList.add("active");
        nav?.classList.add("change");
    });

    li.addEventListener("mouseleave", () => {
        a.classList.remove("active");
    });
    });

    menuUL.addEventListener("mouseleave", () => {
    menu.classList.remove("open");
    nav?.classList.remove("change");
    });
}

// --------------------
// FOOTER 메뉴 생성
// --------------------
const footerMenuData = menuData.map(section => ({
    title: section.title,
    items: section.submenu,
}));

const footerMenu = document.getElementById("footerMenu");
if (footerMenu) {
    footerMenuData.forEach(section => {
    const li = document.createElement("li");
    const titleSpan = document.createElement("span");
    titleSpan.textContent = section.title;
    li.appendChild(titleSpan);

    const subUl = document.createElement("ul");

    section.items.forEach(item => {
        const subLi = document.createElement("li");
        const a = document.createElement("a");
        a.href = item.link;
        const span = document.createElement("span");
        span.textContent = item.name;
        a.appendChild(span);
        subLi.appendChild(a);
        subUl.appendChild(subLi);
    });

    li.appendChild(subUl);
    footerMenu.appendChild(li);
    });
}

// --------------------
// INCLUDE (공통 콘텐츠 삽입)
// --------------------
const includes = document.querySelectorAll('[data-include]');
    includes.forEach(el => {
    const url = el.getAttribute('data-include');
    fetch(url)
        .then(res => res.text())
        .then(data => {
        el.innerHTML = data;
    });
});

// --------------------
// 사업리스트
// --------------------
const items = document.querySelectorAll('.project-item');
const details = document.querySelectorAll('.project-detail');

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    details.forEach((detail, i) => {
      if (i === index) {
        detail.classList.toggle('active');
      } else {
        detail.classList.remove('active');
      }
    });
  });
});