// SUB 상단 메뉴
const select = document.getElementById("subpageSelect");
    if (select) {
    const selected = select.querySelector(".selected");
    const options = select.querySelector(".select-options");

    // 페이지 구분값 가져오기
    const menuType = select.dataset.menu; // "intro", "biz", etc

    // 메뉴 데이터 선택
    let menuData;
    if (menuType === "introduce") {
        menuData = [
            { name: "CEO인사말", value: "sub01_1ceo.html" },
            { name: "회사연혁", value: "sub01_2history.html" },
            { name: "경영상태", value: "sub01_3financial.html" },
            { name: "사훈", value: "sub01_4moto.html" },
            { name: "CI소개", value: "sub01_5ci.html" }
        ];
    } else if (menuType === "biz") {
        menuData = [
            { name: "건축사업", value: "sub02_1construction.html" },
            { name: "토목사업", value: "sub02_2public.html" },
            { name: "조경사업", value: "sub02_3landscape.html" },
            { name: "기전사업", value: "sub02_4electric.html" }
        ];
    }

    // 현재 페이지 기준 active 처리
    const currentPath = location.pathname.split("/").pop();

    menuData.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        li.setAttribute("data-value", item.value);
        if (item.value === currentPath) {
        li.classList.add("active");
        selected.textContent = item.name;
        }
        options.appendChild(li);
    });

    // 기타 로직 그대로 유지
    selected.addEventListener("click", () => {
        select.classList.toggle("open");
    });

    options.querySelectorAll("li").forEach(option => {
        option.addEventListener("click", () => {
        selected.textContent = option.textContent;
        options.querySelectorAll("li").forEach(li => li.classList.remove("active"));
        option.classList.add("active");
        select.classList.remove("open");

        const url = option.getAttribute("data-value");
        if (url && location.pathname !== url) {
            location.href = url;
        }
        });
    });

    document.addEventListener("click", (e) => {
        if (!select.contains(e.target)) {
        select.classList.remove("open");
        }
    });
}


// 주요연혁
    // 1. line stype
    document.addEventListener('scroll', () => {
        const activeBox = document.querySelector('.history-box.active');
        const line = activeBox?.querySelector('#scroll-line');
        if (!activeBox || !line) return;

        const rect = activeBox.getBoundingClientRect();
        const visible = Math.min(
        Math.max(0, window.innerHeight / 1.5 - rect.top),
        rect.height
        );

        const percent = (visible / rect.height) * 100;
        line.style.height = `${percent}%`;
    });


    // 2. 탭 & swiper
    document.addEventListener('DOMContentLoaded', () => {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabContents = document.querySelectorAll('.history-box');

        tabButtons.forEach((button) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = button.dataset.target;

                // 탭 버튼 활성화
                tabButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // 탭 콘텐츠 전환
                tabContents.forEach(content => {
                content.classList.remove('active');
                if (content.id === targetId) {
                    content.classList.add('active');
                }
            });
        });
    });
});
