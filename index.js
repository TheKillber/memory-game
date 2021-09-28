let emojiDiv = document.querySelectorAll(".emoji-container");
let emojis = [
  "🌨",
  "🚣",
  "💯",
  "🚗",
  "👌",
  "🚛",
  "🐗",
  "🔶",
  "🌨",
  "🚣",
  "💯",
  "🚗",
  "👌",
  "🚛",
  "🐗",
  "🔶",
];
const btn = document.querySelector("#btn");
const generalDivEmoji = document.querySelectorAll(".col");
let userClickedEmoji = [];

btn.addEventListener("click", startGame);

function randomEmojiOrder(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

}

function btnStyling() {
  for (let i = 0; i < emojiDiv.length; i++) {
    emojiDiv[i].innerHTML = emojis[i];
    generalDivEmoji[i].addEventListener("click", function (e) {
      userClickedEmoji.push(e.path[1].innerText);

      emojiDiv[i].classList.add("show");
      comprobation();
    });
  }
}
function comprobation() {
  for (let i = 1; i < userClickedEmoji.length; i++) {
    if (
      userClickedEmoji[i - 1] == userClickedEmoji[i] &&
      userClickedEmoji.length == 2
    ) {
      document.body.classList.add("passed");
      setTimeout(function () {
        document.body.classList.remove("passed");
      }, 500);
    } else {
     
      document.body.classList.add("danger");
      setTimeout(function () {
        emojiDiv.forEach((each) => {
          each.classList.remove("show");
        });
        document.body.classList.remove("danger");
      }, 500);

    }
    userClickedEmoji = [];
  }
}
function startGame() {
  document.querySelector(".btn-container").classList.add("hide-panel");
  randomEmojiOrder(emojis);
  btnStyling();
}
