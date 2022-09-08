const bookmarkToggle = document.querySelector(".bookmark");

bookmarkToggle.addEventListener("click", () => {
  bookmarkToggle.classList.toggle("bookmark--active");
});

const answerToggle = document.querySelector(".card__button-answer");
const cardAnswerToggle = document.querySelector(".card__answer");

answerToggle.addEventListener("click", () => {
  if (cardAnswerToggle.style.display === "none") {
    cardAnswerToggle.style.display = "block";
  } else {
    cardAnswerToggle.style.display = "none";
  }
});

// Character Count

let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = counter + "/100";
};

textArea.addEventListener("input", countCharacters);
