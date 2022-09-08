// Character Count
document.getElementById("textbox").maxLength = "100";

let textArea = document.getElementById("textbox");
let characterCounter = document.getElementById("char_count");
const maxNumOfChars = 100;

const countCharacters = () => {
  let numOfEnteredChars = textArea.value.length;
  let counter = maxNumOfChars - numOfEnteredChars;
  characterCounter.textContent = counter + "/100";
};

textArea.addEventListener("input", countCharacters);

// 3. Create new Cards

const form = document.getElementById("form");

const newContainer = document.getElementById("list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const card1 = document.createElement("li");
  card1.textContent = data.questionbox;
  newContainer.append(card1);
  console.log(data);
});
