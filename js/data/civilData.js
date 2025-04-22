const data = [
    { title: "대전하수처리장 시설현대화사업", thumb: "../images/sub01/02_1/b1.jpeg", detail: "공사기간 2023.03 - 2028.12(예정) / 발주자 대전광역시 / 공사금액 8,435억원 (총 사업비 9,233억원) / 공사내용 하수처리 시설 650,000㎡, 일분뇨처리시설 900㎡, 일차집관로 11.6㎞ / 참여범위 한화건설 컨소시엄 (사업시행+시공)" },
    { title: "갑천친수구역 생태호수공원 조성공사", thumb: "../images/sub01/02_1/b2.jpeg", detail: "공사기간 2022.03 - 2025.09 / 발주자 대전도시공사 / 공사금액 624억원 / 공사내용 생태호수공원 430,000㎡ 조성 / 참여범위 장원토건+신세계건설" },
    { title: "제2매립장(1단계) 조성사업 건설공사", thumb: "../images/sub01/02_1/b3.jpeg", detail: "공사기간 2023.04 – 2026.02 / 발주자 대전도시공사 / 공사금액 1,400억원 / 공사내용 폐기물매립량 5,977천㎡, 진입도로 380m, 침출수처리시설 400㎡(일) / 참여범위 장원토건+신세계건설" },
    { title: "서구 복수동 일원 하수관로 정비사업", thumb: "../images/sub01/02_1/b4.jpeg", detail: "공사기간 2020.11 - 2024.11 / 발주자 대전광역시 / 공사금액 225억원 / 공사내용 하수관로 신설 19.5㎞, 교체 9.6㎞, 배수설비 정비 1,383 가구" },
    { title: "국가하천 배수영향구간 청미지구 환경 정비사업", thumb: "../images/sub01/02_1/b5.jpeg", detail: "공사기간 2024.04 - 2027.10 / 발주자 환경부 한강유역환경청 / 공사금액 331억원 / 공사내용 하천연장 L=2.810km" },
    { title: "대전산업단지 서측진입도로 건설공사", thumb: "../images/sub01/02_1/b6.jpeg", detail: "공사기간 2018.12 - 2021.12 / 발주자 대전광역시 / 공사금액 413억원 / 공사내용 한샘대교(교량 420m), 도로개설 L=420m, B=23.9-46.8 / 참여범위 계룡건설산업 컨소시엄" },
    { title: "춘천숲체원 신규조성 건설공사", thumb: "../images/sub01/02_1/b7.jpeg", detail: "공사기간 2017.11 - 2020.07 / 발주자 한국산림복지진흥원 / 공사금액 115억원 / 공사내용 연면적 3,350,000㎡" },
    { title: "대덕연구개발특구 1단계 조경공사", thumb: "../images/sub01/02_1/b8.jpeg", detail: "공사기간 2012.12 - 2017.10 / 발주자 한국토지주택공사 / 공사금액 111억원 / 공사내용 생태형 및 완충형 근린공원 조성 12개소, 면적 269,721㎡" },
    { title: "대청호 상수원보호구역내 하수관거 확장공사", thumb: "../images/sub01/02_1/b9.jpeg", detail: "공사기간 2013.03 - 2016.03 / 발주자 대전광역시 / 공사금액 144억원 / 공사내용 하수관로 신설 및 교체 72.8㎞, 배수설비 1,119가구" },
    { title: "행정도시~대덕테크노밸리 도로건설공사", thumb: "../images/sub01/02_1/b10.jpeg", detail: "공사기간 2011.09 - 2015.12 / 발주자 행정중심복합도시건설청 / 공사금액 1,263억원 / 공사내용 총연장 L=4.99㎞, 6차로 / 참여범위 대우건설 컨소시엄" },
    { title: "대전도안신도시 계룡로 우회도로 건설공사", thumb: "../images/sub01/02_1/b11.jpeg", detail: "공사기간 2009.02 - 2013.09 / 발주자 한국토지주택공사 / 공사금액 510억원 / 공사내용 계룡대교(L=218m, 10~12차로), 지하차로 2개소(계룡지하차도 L=472m, 6차로, 천변지하차도 L=225m, 8~4차로)" },
    { title: "국가가뭄정보분석 통합물 관리센터 전기시설공사", thumb: "../images/sub01/02_1/b12.jpeg", detail: "공사기간 2016.12 - 2018.07 / 발주자 한국수자원공사 / 공사금액 32억원" },
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