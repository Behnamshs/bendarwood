   window.addEventListener("load", () => {
    const slider = document.getElementById("slider");

    // اول اسکرول رو از ابتدا صفر کن
    slider.scrollLeft = 0;

    // بعد از یه لحظه (برای اینکه المنت لود شه) شروع به حرکت کن
    setTimeout(() => {
      slider.scrollTo({
        left: slider.scrollWidth,
        behavior: "smooth"
      });
    }, 300); // ۳۰۰ میلی‌ثانیه تأخیر برای بارگذاری کامل
  });
 
 window.addEventListener("load", () => {
    const favoriteButtons = document.querySelectorAll('.favorite-btn');

    favoriteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const heartImg = btn.querySelector('img');
        const src = heartImg.getAttribute('src');

        if (src.includes('heart-white.png')) {
          heartImg.setAttribute('src', 'icon/heart-red.png');
        } else {
          heartImg.setAttribute('src', 'icon/heart-white.png');
        }
      });
    });
  });
