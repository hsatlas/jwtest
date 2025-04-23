const data = [
    { title: "춘천 숲체원 신규조성 조경공사", thumb: "./images/sub01/03_1/c2.jpg", detail: "발주처 한국산림복지진흥원" },
    { title: "대전과학기술대학교 체육관 신축 조경공사", thumb: "./images/sub01/03_1/c3.jpg", detail: "발주처 대전과학기술대학교" },
    { title: "정읍 안전성 평가 시험연구동 건설사업 조경공사", thumb: "./images/sub01/03_1/c4.jpg", detail: "발주처 안전성평가연구소" },
    { title: "대청댐 시민휴식공간 조성사업", thumb: "./images/sub01/03_1/c5.jpg", detail: "발주처 대전광역시 대덕구" },
    { title: "대전연구개발특구 1단계 조경공사", thumb: "./images/sub01/03_1/c6.jpg", detail: "발주처 한국토지주택공사" },
    { title: "대전도안신도시 조경공사", thumb: "./images/sub01/03_1/c7.jpg", detail: "발주처 한국토지주택공사" },
    { title: "대전과학기술대학교 혜천관 증축 조경공사", thumb: "./images/sub01/03_1/c8.jpg", detail: "발주처 대전과학기술대학교" },
    { title: "대전 하소일반산업단지 조경공사", thumb: "./images/sub01/03_1/c9.jpg", detail: "발주처 대전도시공사" },
    { title: "대전 뿌리공원 정비사업 조경공사", thumb: "./images/sub01/03_1/c10.jpg", detail: "발주처 대전광역시 중구" },
    { title: "대전 대덕구 마을쉼터 조성공사", thumb: "./images/sub01/03_1/c11.jpg", detail: "발주처 대전광역시 대덕구" },
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
                <div class="img-wrapper">
                    <img src="${item.thumb}" alt="${item.title}">
                </div>
                <div class="project-title">
                    <span>${item.title}</span>
                </div>
            `;

            card.addEventListener('click', () => {
                const itemKey = item.title;
                const titleEl = card.querySelector('.project-title');

                if (currentOpenItemKey === itemKey) {
                    titleEl.classList.remove('active');
                    closeSlider();
                    currentOpenItemKey = null;
                    return;
                }

                document.querySelectorAll('.project-title.active').forEach(el => {
                    el.classList.remove('active');
                });

                titleEl.classList.add('active');
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
        btn.addEventListener('click', (e) => {
            closeSlider();
            renderPage(i);

            // 모든 버튼에서 active 제거
            document.querySelectorAll('.page-btn').forEach(b => b.classList.remove('active'));

            // 현재 클릭된 버튼에 active 추가
            e.currentTarget.classList.add('active');
        });
        pagination.appendChild(btn);
    }

    // 초기 페이지 active 설정
    const firstBtn = pagination.querySelector('.page-btn');
    if (firstBtn) firstBtn.classList.add('active');
}

function openSlider(item, targetRow) {
    swiperWrapper.innerHTML = '';
    const slides = item.slides || [{ src: item.thumb, caption: item.detail }];

    slides.forEach(slide => {
        const el = document.createElement('div');
        el.className = 'swiper-slide';

        const captionList = slide.caption
            ? `<ul class="caption-list">
                ${slide.caption.split('/').map(str => {
                    const [key, ...rest] = str.trim().split(' ');
                    const value = rest.join(' ');
                    return `<li><span>${key}</span><span>${value}</span></li>`;
                }).join('')}
                </ul>`
            : '';

        el.innerHTML = `
            <img src="${slide.src}" alt="${item.title}">
            ${captionList}
        `;
        swiperWrapper.appendChild(el);
    });

    // 슬라이더 활성화 및 삽입
    sliderArea.classList.add('active');
    targetRow.insertAdjacentElement('afterend', sliderArea);

    // 렌더링 이후 scrollHeight를 계산해 maxHeight 설정 + Swiper 초기화
    setTimeout(() => {
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
    }, 50); // 약간의 렌더링 딜레이
}


function closeSlider() {
    // 현재 높이를 0으로 줄여서 부드럽게 닫힘
    sliderArea.style.maxHeight = '0px';

    // transition 시간 후 클래스 제거 및 상태 초기화
    setTimeout(() => {
        sliderArea.classList.remove('active');
        currentOpenItemKey = null;

        // Swiper 인스턴스도 정리 (선택 사항)
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }

        // 슬라이더 내부 콘텐츠도 정리
        swiperWrapper.innerHTML = '';
    }, 600); // CSS transition 시간과 동일하게
}

document.querySelector('.close-slider').addEventListener('click', () => {
    closeSlider();
});

setupPagination();
renderPage(0);