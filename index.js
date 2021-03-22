let words = ["Наброски",
"Риэлтор",
"Застройщик",
"Сделка",
"Комиссия",
"Каска",
"Трудоустройство",
"Рабочее место",
"Варданян Рубик",
"Презентация",
"Киримова Вера",
"Онлайн-показ",
"Бронь",
"Согласование",
"Клиент",
"Инвестиции",
"Инвестор",
"Лояльность",
"КЭВ",
"Директор",
"Юрист",
"Маркетолог",
"HR",
"Руководитель",
"Амбассадор",
"Менеджер",
"Видео",
"Облётка",
"Инвестиционный прогноз",
"Рендеры",
"Инстаграм",
"Заявка",
"Агентство недвижимости",
"Договор",
"Земля в аренду",
"Земля в собственности",
"Центральный офис",
"Плейлист",
"Библиотека",
"Фирменный стиль",
"Визитка",
"Буклет",
"Брошюра",
"Баннер",
"Инженерный проект",
"Макет",
"Генплан",
"Планировка",
"Книга",
"Возражение",
"Переговоры",
"Продажа",
"Продавец",
"Переговорка",
"Закрытие месяца",
"KPI",
"Корпоратив",
"Путешествие",
"Поездка",
"Цель",
"Визуализация",
"Ипотека",
"Рассрочка",
"Партнер",
"Партнерство",
"Мерседес",
"Айфон",
"Инкасатор",
"Банк",
"Залог",
"Предварительный договор",
"Отельный оператор",
"Управляющая компания",
"Консьерж",
"Территория",
"Район",
"Инфраструктура",
"Коммуникации",
"Центральные коммуникации",
"Комната",
"Квартира",
"Апартамент",
"Этаж",
"Кухня",
"Двушка",
"Трешка",
"Студия",
"Панорамные окна",
"Обед",
"Перерыв",
"Встреча",
"Суд",
"Вакансия",
"Соискатель",
"Собеседование",
"Тестовое задание",
"Испытательный срок",
"Видеосъемка",
"Фотосъемка",
"Квадрокоптер",
"Парковка",
"Бассейн",
"Бассейн инфинити",
"Девелопмент",
"Редевелопмент",
"Консалтинг",
"IT",
"Приложение",
"Контент",
"Сервис",
"Обслуживание",
"Цехин Анатолий",
"Крестелева Татьяна",
"Увольнение",
"Сокращение",
"Зарплата",
"Премия",
"Бонус",
"План",
"План продаж",
"Зохан",
"Мобильное приложение Nedvex",
"Шахматки",
"Решетов Роман",
"Миссия компании",
"Сотрудники",
"Передача ключей",
"Новый объект",
"Выполнение плана",
"Годовые цели",
"Поездки за границу",
"Ресепшен",];
const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener("click", function () {
  if (words.length == 0) {
    text.textContent = "Игра окончена, вы угадали все слова! Вы просто супер! Похвалите себя!";
    // form.classList.remove('form_close');
    return;
  }

  let index = getRandomInt(0, words.length - 1);
  text.textContent = words[index];
  words.splice(index, 1);
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

// const form = document.querySelector(".form");
// let input = document.querySelector(".form__input");
// form.addEventListener("submit", function (e) {
//   e.preventDefault();
// form.classList.add('form_close');
// words = input.value.split(",");
//   words = words.map(function (word, index) {
//     return word.trim();
//   });
// });


  words = words.filter(function (word, index) {
    // console.log(word, (parseInt(word) + "").length, word.length);
    return word !== "" || (parseInt(word) + "").length == word.length;
  });
