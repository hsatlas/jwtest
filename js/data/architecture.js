const data = [
    { title: "카이스트 청노화 메타융합관 신축공사", thumb: "../images/sub01/01_1/a1.jpeg", detail: "공사기간 2023.12 – 2025.11 / 발주자 한국과학기술원 / 공사금액 181억원 / 공사내용 연면적 13,598㎡ (지하1층 - 지상9층)" },
    { title: "생명과학과 교육연구동 증축공사", thumb: "../images/sub01/01_1/a2.jpeg", detail: "공사기간 2024.10 – 2026.10 / 발주자 한국과학기술원 / 공사금액 113억원 / 공사내용 연면적 7,733㎡ (지하1층 - 지상7층)" },
    { title: "부천옥길 중·고 통합운영학교 신축공사", thumb: "../images/sub01/01_1/a3.jpeg", detail: "공사기간 2023.08 – 2025.01 / 발주자 경기도부천교육지원청 / 공사금액 188억원 / 공사내용 연면적 17,196㎡ (지하1층 - 지상4층)" },
    { title: "대전산업정보학교 교사신축공사", thumb: "../images/sub01/01_1/a4.jpeg", detail: "공사기간 2013.12 - 2015.03 / 발주자 대전광역시교육청 / 공사금액 111억원 / 공사내용 연면적 13,208㎡ (지하1층 - 지상5층)" },
    { title: "목원대학교 사범관 신축공사", thumb: "../images/sub01/01_1/a5.jpeg", detail: "공사기간 2008.11 - 2010.02 / 발주자 목원대학교 / 공사금액 126억원 / 공사내용 연면적 10,942㎡ (지하2층 - 지상5층)" },
    { title: "목원대학교 생활관(기숙사) 건축공사", thumb: "../images/sub01/01_1/a6.jpeg", detail: "공사기간 2014.02 - 2016.05 / 발주자 목원대학교 / 공사금액 245억원 / 공사내용 연면적 23,126㎡ (지상10층)" },
    { title: "대전과학기술대학교 체육관 건축공사", thumb: "../images/sub01/01_1/a7.jpeg", detail: "공사기간 2014.10 - 2015.11 / 발주자 대전과학기술대학교 / 공사금액 38억원 / 공사내용 연면적 5,407㎡ (지하1층 - 지상3층)" },
    { title: "대전과학기술대학교 혜천관 증축공사", thumb: "../images/sub01/01_1/a8.jpeg", detail: "공사기간 2017.02 - 2019.02 / 발주자 대전과학기술대학교 / 공사금액 65억원 / 공사내용 연면적 5,407㎡ (지하1층 - 지상3층)" },
    { title: "새마을금고 회관 신축공사", thumb: "../images/sub01/01_1/a9.jpeg", detail: "공사기간 2023.04 – 2025.08 / 발주자 세종 새마을금고 / 공사금액 226억원 / 공사내용 연면적 9,946㎡ (지하4층 - 지상8층)" },
    { title: "국립대전현충원 신청사 건립 건축공사", thumb: "../images/sub01/01_1/a10.jpeg", detail: "공사기간 2024.08 – 2025.10 / 발주자 국가보훈부 국립대전현충원 / 공사금액 62억원 / 공사내용 연면적 2,979.92㎡ (지상2층)" },
    { title: "대전역세권 개발사업", thumb: "../images/sub01/01_1/a11.jpeg", detail: "공사기간 2024.04 - 2028.12(예정) / 발주자 한국철도공사 / 공사금액 7,187억원 / 공사내용 연면적 359,377㎡ / 공동주택 987세대, 호텔 228실, 업무시설, 판매시설 / 참여범위 한화건설 컨소시엄(사업시행+시공)" },
    { title: "오송바이오 오케이타워 신축공사", thumb: "../images/sub01/01_1/a12.jpeg", detail: "공사기간 2021.03 - 2022.12 / 발주자 ㈜오케이도시개발 / 공사금액 135억원 / 공사내용 연면적 11,445.96㎡ (지하2층 - 지상10층)" },
    { title: "공주시 월송동 행복타워 신축공사", thumb: "../images/sub01/01_1/a13.jpeg", detail: "공사기간 2021.06 - 2022.08 / 발주자 ㈜행복마을 / 공사금액 75억원 / 공사내용 연면적 6,819㎡ (지하1층 - 지상7층)" },
    { title: "세종특별자치시 법조타운 건축공사", thumb: "../images/sub01/01_1/a14.jpeg", detail: "공사기간 2016.11 - 2018.07 / 발주자 대영상가㈜, ㈜이안빌딩 / 공사금액 240억원 / 공사내용 연면적 11,783㎡ + 11,855㎡ (지하3층 - 지상7층)" },
    { title: "해양바이오산업화 인큐베이터 건립사업", thumb: "../images/sub01/01_1/a15.jpeg", detail: "공사기간 2022.08 - 2024.10 / 발주자 충청남도 서천군 / 공사금액 116억원 / 공사내용 교육연구시설 신축 연면적 6,183.46㎡ (지하1층 - 지상3층)" },
    { title: "대전국제전시컨벤션센터 건립공사", thumb: "../images/sub01/01_1/a16.jpeg", detail: "공사기간 2019.12 - 2022.04 / 발주자 대전광역시 / 공사금액 1,105억원 / 공사내용 연면적 41,855㎡ (지하2층 - 지상4층) / 참여범위 계룡건설산업 컨소시엄" },
    { title: "경수로원전연료 성형가공시설 및 제3공장 공사", thumb: "../images/sub01/01_1/a17.jpeg", detail: "공사기간 2020.01 - 2023.06 / 발주자 한전원자력연료㈜ / 공사금액 1,518억원 / 공사내용 연면적 37,708㎡ (지하1층 - 지상5층) / 참여범위 대우건설 컨소시엄" },
    { title: "국가기술표준원 이전청사 신축공사", thumb: "../images/sub01/01_1/a18.jpeg", detail: "공사기간 2012.02 - 2014.03 / 발주자 산업통상자원부 국가기술표준원 / 공사금액 189억원 / 공사내용 혁신도시 국가기관 이전사업 연면적 23,038㎡ (지하1층 - 지상5층)" },
    { title: "한국에너지기술연구원 에코에너지 연구센터", thumb: "../images/sub01/01_1/a19.jpeg", detail: "공사기간 2011.12 - 2013.12 / 발주자 한국에너지기술연구원 / 공사금액 108억원 / 공사내용 연면적 10,400㎡ (지하1층 - 지상7층)" },
    { title: "안전성평가연구소 진주환경 독성연구센터", thumb: "../images/sub01/01_1/a20.jpeg", detail: "공사기간 2010.09 - 2011.12 / 발주자 안전성평가연구소 / 공사금액 143억원 / 공사내용 바이오클린룸(동물실험실), 야외온실 연면적 6,493㎡ (지상1층 - 지상3층)" },
    { title: "정읍 제2안전성평가시험 연구동", thumb: "../images/sub01/01_1/a21.jpeg", detail: "공사기간 2007.04 - 2010.06 / 발주자 안전성평가연구소 / 공사금액 470억원 / 공사내용 단지조성 147,602㎡, 연면적 16,196㎡ (지하1층 - 지상3층) / 참여범위 대우건설 컨소시엄" },
    { title: "한진택배 대전종합물류센터 증축공사", thumb: "../images/sub01/01_1/a22.jpeg", detail: "공사기간 2019.10 - 2020.08 / 발주자 ㈜한진 / 공사금액 88억원 / 공사내용 연면적 4,204㎡" },
    { title: "농산물도매시장 시설확장 건축공사", thumb: "../images/sub01/01_1/a23.jpeg", detail: "공사기간 2014.03 - 2017.04 / 발주자 충청남도 천안시 건설사업소 / 공사금액 144억원 / 공사내용 연면적 30,356㎡ (지하1층 - 지상3층)" },
    { title: "월평1동 공영주차 전용빌딩 건립공사", thumb: "../images/sub01/01_1/a24.jpeg", detail: "공사기간 2014.01 - 2014.09 / 발주자 대전광역시 서구 / 공사금액 33억원 / 공사내용 연면적 4,918㎡ (지하1층 - 지상5층)" },
    { title: "중구 국민체육센터 건립 건축공사", thumb: "../images/sub01/01_1/a25.jpeg", detail: "공사기간 2009.09 - 2010.08 / 발주자 대전광역시 중구 / 공사금액 37억원 / 공사내용 다목적 체육관, 실내수영장 / 연면적 4,284㎡" },
    { title: "천주교 대전교구 진산성지 신축공사", thumb: "../images/sub01/01_1/a26.jpeg", detail: "공사기간 2022.04 - 2023.05 / 발주자 재단법인 대전교구천주교회유지재단 / 공사금액 58억원 / 공사내용 연면적 1,372㎡" },
    { title: "천주교 대전교구 관저2동성당 신축공사", thumb: "../images/sub01/01_1/a27.jpeg", detail: "공사기간 2018.05 - 2019.05 / 발주자 재단법인 대전교구천주교회유지재단 / 공사금액 34억원 / 공사내용 연면적 1,716㎡ (지하1층 - 지상4층)" },
    { title: "천주교 대전교구 관평동 성당 신축공사", thumb: "../images/sub01/01_1/a28.jpeg", detail: "공사기간 2017.08 - 2018.07 / 발주자 재단법인 대전교구천주교회유지재단 / 공사금액 38억원 / 공사내용 연면적 2,837㎡ (지상4층)" },
    { title: "천주교 대전교구 온양성당 신축공사", thumb: "../images/sub01/01_1/a29.jpeg", detail: "공사기간 2017.09 - 2018.10 / 발주자 재단법인 대전교구천주교회유지재단 / 공사금액 33억원 / 공사내용 연면적 4,155㎡" },
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