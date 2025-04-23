const data = [
    { title: "하남미사 A5, A16BL 옥외기계설비공사", thumb: "./images/sub01/04_1/d1.jpg", detail: "발주처 한국토지주택공사" },
    { title: "국가가뭄정보분석 통합물 관리센터 신축 전기공사", thumb: "./images/sub01/04_1/d2.jpg", detail: "발주처 한국수자원공사" },
    { title: "대전역사박물관 교육수장동 증축 기계설비공사", thumb: "./images/sub01/04_1/d3.jpg", detail: "발주처 대전광역시" },
    { title: "경기북부특수학교 교사신축 기계설비공사", thumb: "./images/sub01/04_1/d4.jpg", detail: "발주처 경기도 교육청" },
    { title: "글벗중학교 신축 기계설비공사", thumb: "./images/sub01/04_1/d5.jpg", detail: "발주처 세종특별자치시교육청" },
    { title: "대전과학기술대학교 체육관 전기, 통신, 소방, 설비공사", thumb: "./images/sub01/04_1/d6.jpg", detail: "발주처 대전과학기술대학교" },
    { title: "대전과학기술대학교 혜천관 전기, 통신, 소방, 설비공사", thumb: "./images/sub01/04_1/d7.jpg", detail: "발주처 대전과학기술대학교" },
    { title: "대전나노융합 R&BD센터 구축 전기공사", thumb: "./images/sub01/04_1/d8.jpg", detail: "발주처 나노종합기술원" },
    { title: "대전노은동사무소 신축 소방공사", thumb: "./images/sub01/04_1/d9.jpg", detail: "발주처 대전광역시 유성구" },
    { title: "대전문화예술센터건립 기계설비공사", thumb: "./images/sub01/04_1/d10.jpg", detail: "발주처 대전광역시" },
    { title: "대전유평초, 태평중학교 교사신축전기공사", thumb: "./images/sub01/04_1/d11.jpg", detail: "발주처 대전광역시 교육청" },
    { title: "부산 해강고등학교 교사신축 기계설비공사", thumb: "./images/sub01/04_1/d12.jpg", detail: "발주처 부산광역시 교육청" },
    { title: "송, 변전 시설공사", thumb: "./images/sub01/04_1/d13.jpg", detail: "발주처 ." },
    { title: "수원광교A30BL 옥외기계설비공사", thumb: "./images/sub01/04_1/d14.jpg", detail: "발주처 한국토지주택공사" },
    { title: "자동제어 시스템 설비공사", thumb: "./images/sub01/04_1/d15.jpg", detail: "발주처 ." },
    { title: "전북정읍 제2안전성 평가시험 연구동 건설사업 중 기계설비(크린룸설치) 전기, 통신, 소방공사", thumb: "./images/sub01/04_1/d16.jpg", detail: "발주처 안전성평가연구소" },
    { title: "제주 중앙지하상가 개보수 공사 (기계설비)", thumb: "./images/sub01/04_1/d17.jpg", detail: "발주처 제주특별자치도 제주시" },
    { title: "창원장애인문화센터건립공사 기계설비 공사", thumb: "./images/sub01/04_1/d18.jpg", detail: "발주처 경상남도 창원시" },
    { title: "충남대학교 법경관 기계설비공사", thumb: "./images/sub01/04_1/d19.jpg", detail: "발주처 충남대학교" },
    { title: "한국기계연구원 기숙사 증축 소방공사", thumb: "./images/sub01/04_1/d20.jpg", detail: "발주처 한국기계연구원" },
    { title: "한국에너지기술연구원 복합기술 실험동 신축 기계설비공사", thumb: "./images/sub01/04_1/d21.jpg", detail: "발주처 한국에너지기술연구원" },
    { title: "한밭대학교 종합교육센터 신축 기계설비공사", thumb: "./images/sub01/04_1/d22.jpg", detail: "발주처 한밭대학교" },

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