const lightThemeLink = document.querySelector(
  'link[media="(prefers-color-scheme: light)"]'
);
const darkThemeLink = document.querySelector(
  'link[media="(prefers-color-scheme: dark)"]'
);
document.addEventListener('DOMContentLoaded', function () {
  const switcherControls = document.querySelectorAll('.switcher-control');
  const body = document.body;

  switcherControls.forEach(function (switcher) {
    switcher.addEventListener('change', function () {
      const selectedTheme = switcher.getAttribute('data-theme');

      // Удаляем все классы связанные с темами
      body.classList.remove('light-theme', 'dark-theme');

      // Добавляем выбранный класс темы
      body.classList.add(selectedTheme);
    });
  });
});
