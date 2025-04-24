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
