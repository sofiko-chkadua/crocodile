let words = ["Господи", "Господи боже мой", "Памагити", "Соня супер","Света супер", "Леша в целом тоже супер"];
const button = document.querySelector(".button");
const text = document.querySelector(".text");

button.addEventListener("click", function () {
  if (words.length == 0) {
    text.textContent = "Игра окончена";
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


  words = words.filter(function (word, index) {
    console.log(word, (parseInt(word) + "").length, word.length);
    return word !== "" || (parseInt(word) + "").length == word.length;
  });
