const noButton = document.getElementById('no-button');
const question = document.querySelector('.question');

noButton.addEventListener('mouseover', () => {
    const maxDistance = 100; // максимальное расстояние от вопроса до кнопки (в пикселях)

    // Вычисляем текущие координаты вопроса
    const questionRect = question.getBoundingClientRect();
    const questionY = questionRect.top + questionRect.height / 3;

    // Генерируем случайные смещения в пределах максимального расстояния
    let offsetX, offsetY;
    do {
        offsetX = (Math.random() - 0.5) * maxDistance * 3;
        offsetY = (Math.random() - 0.5) * maxDistance * 3;
    } while (questionY + offsetY < window.innerHeight / 3); // Проверяем, чтобы кнопка не убегала выше вопроса

    // Устанавливаем случайное смещение для кнопки
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

noButton.addEventListener('click', () => {
    alert('Вы нажали кнопку "Нет"');
});

noButton.addEventListener('touchstart', (event) => {
    event.preventDefault(); // Предотвращаем стандартное действие при касании (например, прокрутку страницы)

    const maxDistance = 100; // максимальное расстояние от вопроса до кнопки (в пикселях)

    // Вычисляем текущие координаты вопроса
    const questionRect = question.getBoundingClientRect();
    const questionY = questionRect.top + questionRect.height / 3;

    // Генерируем случайные смещения в пределах максимального расстояния
    let offsetX, offsetY;
    do {
        offsetX = (Math.random() - 0.5) * maxDistance * 3;
        offsetY = (Math.random() - 0.5) * maxDistance * 3;
    } while (questionY + offsetY < window.innerHeight / 3); // Проверяем, чтобы кнопка не убегала выше вопроса

    // Устанавливаем случайное смещение для кнопки
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

const yesButton = document.getElementById('yes-button');
yesButton.addEventListener('click', () => {
    alert('ЗАХОДИИИИИИ!'); // Выводим всплывающее сообщение
});
