// scroll-to-top

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
};

scrollToTopBtn.onclick = function (event) {
  event.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
};

// activate and deactivate class action nav menu

function toggleButtonMenu(e) {


  if (e.target.classList.contains("toggle-button")) {
    if (e.target.classList.contains('active')) {
      return; // Выходим из функции
    }

    const buttons = document.querySelectorAll(".toggle-button")

    buttons.forEach((button) => {
      if (e.target !== button) {
        button.classList.remove('active');
      }
      e.target.classList.toggle('active');

    })
  }
}

document.addEventListener('click', toggleButtonMenu)

// active section 

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const buttons = document.querySelectorAll('.toggle-button');

  sections.forEach(section => {
    const rect = section.getBoundingClientRect();

    // Проверяем, попадает ли секция в видимую область
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      // Убираем активный класс у всех кнопок
      buttons.forEach(button => {
        button.classList.remove('active');
      });

      // Находим кнопку, которая соответствует текущей секции
      const activeButton = [...buttons].find(button => button.dataset.target === `#${section.id}`);
      if (activeButton) {
        activeButton.classList.add('active');
      }
    }
  });
});