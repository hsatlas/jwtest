const data = [
    {
        title: "카이스트 청노화 메타융합관 신축공사",
        thumb: "../images/sub01/01_1/a1.jpeg",
        detail: "위치: 대전 KAIST / 공사기간: 2023~2025"
    },
    {
        title: "생명과학과 교육연구동 증축공사",
        thumb: "../images/sub01/01_1/a2.jpeg",
        detail: "위치: 서울 / 공사기간: 2022~2024"
    },
    {
        title: "카이스트 청노화 메타융합관 신축공사",
        thumb: "../images/sub01/01_1/a1.jpeg",
        detail: "위치: 대전 KAIST / 공사기간: 2023~2025"
    },
    {
        title: "생명과학과 교육연구동 증축공사",
        thumb: "../images/sub01/01_1/a2.jpeg",
        detail: "위치: 서울 / 공사기간: 2022~2024"
    },
    {
        title: "카이스트 청노화 메타융합관 신축공사",
        thumb: "../images/sub01/01_1/a1.jpeg",
        detail: "위치: 대전 KAIST / 공사기간: 2023~2025"
    },
    {
        title: "생명과학과 교육연구동 증축공사",
        thumb: "../images/sub01/01_1/a2.jpeg",
        detail: "위치: 서울 / 공사기간: 2022~2024"
    },
    {
        title: "카이스트 청노화 메타융합관 신축공사",
        thumb: "../images/sub01/01_1/a1.jpeg",
        detail: "위치: 대전 KAIST / 공사기간: 2023~2025"
    },
    {
        title: "생명과학과 교육연구동 증축공사",
        thumb: "../images/sub01/01_1/a2.jpeg",
        detail: "위치: 서울 / 공사기간: 2022~2024"
    },
];

const ITEMS_PER_PAGE = 8;
const container = document.getElementById('projectContainer');
const pagination = document.querySelector('.pagination');
const sliderArea = document.getElementById('sliderArea');
const swiperWrapper = document.getElementById('swiperWrapper');
let swiperInstance;
let currentOpenItemKey = null;

function renderPage(pageIndex) {
  container.innerHTML = '';
  const start = pageIndex * ITEMS_PER_PAGE;
  const end = start + ITEMS_PER_PAGE;
  const pageItems = data.slice(start, end);

  for (let i = 0; i < pageItems.length; i += 4) {
    const row = document.createElement('div');
    row.className = 'project-row';

    pageItems.slice(i, i + 4).forEach((item, j) => {
      const realIndex = start + i + j;
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <img src="${item.thumb}" alt="${item.title}">
        <p>${item.title}</p>
      `;

      card.addEventListener('click', () => {
        const itemKey = item.title; // 또는 item.id 등 고유값 사용
        if (currentOpenItemKey === itemKey) {
          closeSlider();
          return;
        }
        openSlider(item, row);
        currentOpenItemKey = itemKey;
      });

      row.appendChild(card);
    });

    container.appendChild(row);
  }
}

function setupPagination() {
  pagination.innerHTML = '';
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);
  for (let i = 0; i < totalPages; i++) {
    const btn = document.createElement('button');
    btn.className = 'page-btn';
    btn.textContent = i + 1;
    btn.dataset.page = i;
    btn.addEventListener('click', () => {
      closeSlider();
      renderPage(i);
    });
    pagination.appendChild(btn);
  }
}

function openSlider(item, targetRow) {
  swiperWrapper.innerHTML = '';
  const slides = item.slides || [{ src: item.thumb, caption: item.detail }];

  slides.forEach(slide => {
    const el = document.createElement('div');
    el.className = 'swiper-slide';
    el.innerHTML = `
      <img src="${slide.src}" alt="${item.title}">
      <p class="caption">${slide.caption}</p>
    `;
    swiperWrapper.appendChild(el);
  });

  sliderArea.classList.add('active');
  targetRow.insertAdjacentElement('afterend', sliderArea);
  sliderArea.style.maxHeight = sliderArea.scrollHeight + 'px';

  if (swiperInstance) swiperInstance.destroy(true, true);
  swiperInstance = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function closeSlider() {
  sliderArea.style.maxHeight = '0px';
  setTimeout(() => {
    sliderArea.classList.remove('active');
    currentOpenItemKey = null;
  }, 600);
}

document.querySelector('.close-slider').addEventListener('click', () => {
  closeSlider();
});

setupPagination();
renderPage(0);