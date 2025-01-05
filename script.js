let currentIndex = 0;
let vantaEffect;

function nextCard() {
    const cards = document.querySelectorAll('.card');
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add('active');
}

window.onload = function () {
    // إعداد تأثير VANTA.NET
    vantaEffect = VANTA.NET({
        el: "#background",
        color: 0x1e90ff, // لون الشبكة
        backgroundColor: 0x0a0a0a, // لون الخلفية
        points: 15.0, // عدد النقاط (زيادة تعطي تأثيرًا أكثر حيوية)
        maxDistance: 15.0, // المسافة القصوى بين النقاط
        spacing: 10.0, // تباعد الشبكة
        speed: -30.0, // تسريع الحركة
    });

    // إضافة تأثير ضوء نابض
    setInterval(() => {
        const randomColor = Math.random() * 0xffffff; // لون عشوائي
        vantaEffect.setOptions({
            color: randomColor,
        });
    }, 3000); // تكرار كل 3 ثوانٍ

    // إضافة فاكهة جديدة (نقاط إضافية)
    setInterval(() => {
        vantaEffect.setOptions({
            points: vantaEffect.options.points + 1, // زيادة عدد النقاط
        });
    }, 10000); // تحديث النقاط كل 5 ثوانٍ
};

window.onunload = function () {
    if (vantaEffect) vantaEffect.destroy();
};


function togglePopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');
    const buttons = document.querySelectorAll('.popup-buttons button');
    const closeBtn = document.getElementById('close-btn');

    if (popup.style.display === 'flex') {
        // إغلاق الصفحة مع تأثير
        anime({
            targets: '#popup-content',
            scale: [1, 0.8],
            opacity: [1, 0],
            duration: 500,
            easing: 'easeInOutQuad',
            complete: function () {
                popup.style.display = 'none';
            }
        });
    } else {
        // فتح الصفحة مع تأثير
        popup.style.display = 'flex';
        anime({
            targets: '#popup-content',
            scale: [0.8, 1],
            opacity: [0, 1],
            duration: 500,
            easing: 'easeInOutQuad',
        });
        anime({
            targets: [...buttons, closeBtn],
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(200), // يظهر العناصر تدريجياً
            duration: 500,
            easing: 'easeOutQuad',
        });
    }
}

function openPage(pageUrl) {
    window.location.href = pageUrl;
}
