document.addEventListener('DOMContentLoaded', () => {
    // --------------------------
    // 🎬 INTRO VIDEO LOGIC
    // --------------------------
    const introVideo = document.getElementById('introVideo');
    const intro = document.getElementById('intro');
    const main = document.getElementById('section0');
    const mainVideo = document.getElementById('mainVideo');

    introVideo?.addEventListener('ended', () => {
    intro?.classList.add('slide-up');

    setTimeout(() => {
        main?.classList.add('visible');

        if (mainVideo?.readyState >= 3) {
        mainVideo.play();
        } else {
        mainVideo?.addEventListener('canplay', () => {
            mainVideo.play();
        }, { once: true });
        }
    }, 800);
    });

    // --------------------------
    // 📌 SECTION & SLIDE STATE
    // --------------------------
    let currentSection = 0;
    let currentSlide = 0;

    const sections = document.querySelectorAll('.section');
    const totalSections = sections.length;
    const horizontal = document.getElementById('horizontal');
    const wrapper = document.querySelector('.wrapper');

    // --------------------------
    // ⬇️ SECTION TRANSITION
    // --------------------------
    function moveToSection(index) {
    sections.forEach((section, i) => {
        section.style.transform = `translateY(${(i - index) * 100}vh)`;
    });

    currentSection = index;
    updateDots(index);
    toggleDarkTheme(index);
    handleSectionAnimations(index);
    }

    function toggleDarkTheme(index) {
    const darkSections = [1, 2, 4, 5];
    const nav = document.querySelector('nav');
    const navDots = document.querySelector('.nav-dots');

    nav?.classList.toggle('dark', darkSections.includes(index));
    navDots?.classList.toggle('dark', darkSections.includes(index));
    }

    function handleSectionAnimations(index) {
    const allImages = document.querySelectorAll('.image-wrap');
    const allMessages = document.querySelectorAll('[class^="brand-messege"]');
    const vision = document.querySelector('.vision');

    allImages.forEach(img => img.classList.remove('clip-circle', 'clip-square', 'clip-triangle'));
    allMessages.forEach(msg => {
        msg.classList.remove('slide-fade');
        msg.style.animation = 'none';
        void msg.offsetWidth;
        msg.style.animation = '';
    });

    if (index === 2) {
        const currentSlideEl = document.querySelectorAll('.hr-slide')[currentSlide];
        const image = currentSlideEl.querySelector('.image-wrap');
        const message = currentSlideEl.querySelector('[class^="brand-messege"]');

        setTimeout(() => {
        if (image?.classList.contains('circle')) image.classList.add('clip-circle');
        else if (image?.classList.contains('square')) image.classList.add('clip-square');
        else if (image?.classList.contains('triangle')) image.classList.add('clip-triangle');

        message?.classList.add('slide-fade');
        }, 100);
    }

    // Section 3: deactivate all panels
    document.querySelectorAll('.panel').forEach(panel => {
        panel.classList.remove('active');
    });

    // Section 4: activate vision
    vision?.classList.toggle('active', index === 4);
    }

    // --------------------------
    // ⬅️➡️ SLIDE TRANSITION
    // --------------------------
    function moveToSlide(index) {
        horizontal.style.transform = `translateX(-${index * 100}vw)`;
        currentSlide = index;
        updateSlideDots(index);
        handleSectionAnimations(currentSection);
    }

    function updateSlideDots(index) {
    document.querySelectorAll('#slideDots button').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
    }

    function createSlideDots() {
        const slideDots = document.getElementById('slideDots');
        if (!slideDots) return;

        slideDots.innerHTML = '';

        for (let i = 0; i < 3; i++) {
            const dot = document.createElement('button');
            dot.dataset.index = i;
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => moveToSlide(i));
            slideDots.appendChild(dot);
        }
    }


    // --------------------------
    // 🎯 DOT NAVIGATION
    // --------------------------
    const dotNav = document.getElementById("dotNav");

    function updateDots(index) {
    dotNav?.querySelectorAll("button").forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
    updateDotLabels();
    }

    function updateDotLabels() {
    dotNav?.querySelectorAll("button").forEach(btn => {
        const label = btn.querySelector(".dot-label");
        if (label) {
        label.style.display = btn.classList.contains("active") ? "inline" : "none";
        }
    });
    }

    dotNav?.querySelectorAll("button").forEach((btn, i) => {
    btn.addEventListener("click", () => moveToSection(i));
    });

    // --------------------------
    // 🔝 TOP BUTTON
    // --------------------------
    document.querySelector(".top")?.addEventListener("click", e => {
    e.preventDefault();
    moveToSection(0);
    });

    // --------------------------
    // 🖱️ SCROLL + TOUCH EVENTS
    // --------------------------
    let scrollLock = false;

    window.addEventListener('wheel', (e) => {
    if (scrollLock) return;
    scrollLock = true;

    if (currentSection === 2) {
        if (e.deltaY > 0 && currentSlide < 2) {
        moveToSlide(currentSlide + 1);
        } else if (e.deltaY < 0 && currentSlide > 0) {
        moveToSlide(currentSlide - 1);
        } else if (e.deltaY > 0 && currentSlide === 2) {
        moveToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSlide === 0) {
        moveToSection(currentSection - 1);
        }
    } else {
        if (e.deltaY > 0 && currentSection < totalSections - 1) {
        moveToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
        moveToSection(currentSection - 1);
        }
    }

    setTimeout(() => scrollLock = false, 1000);
    });

    let touchStartY = 0;
    let touchStartX = 0;
    wrapper?.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
    touchStartX = e.touches[0].clientX;
    });

    // --------------------------
    // ✅ INITIALIZATION
    // --------------------------
    window.onload = () => {
    // 초기 위치 설정
    sections.forEach((section, i) => {
        section.style.transition = 'none';
        section.style.transform = `translateY(${(i - 0) * 100}vh)`;
    });

    horizontal.style.transition = 'none';
    horizontal.style.transform = 'translateX(0)';

    // 다음 프레임에 transition 복원
    requestAnimationFrame(() => {
        sections.forEach(section => section.style.transition = 'transform 0.8s ease');
        horizontal.style.transition = 'transform 0.8s ease';
    });

    // 패널 클릭 이벤트
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
        const isActive = panel.classList.contains('active');
        panels.forEach(p => p.classList.remove('active'));
        if (!isActive) panel.classList.add('active');
        });
    });

    createSlideDots();
    moveToSection(0);
    moveToSlide(0);
    updateDots(0);
    };
});
