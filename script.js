import { stories } from "./constants.js";

const storyImg = document.querySelector(".story-img");
const leftZone = document.querySelector(".nav.left");
const rightZone = document.querySelector(".nav.right");

let currentIndex = 0;
let timer = null;

const showStory = () => {
  const story = stories[currentIndex];

  storyImg.style.opacity = "0";

  const img = new Image();
  img.src = story.storyImage;

  img.onload = () => {
    storyImg.src = story.storyImage;
    storyImg.style.opacity = "1";
  };
};

const nextStory = () => {
  if (currentIndex < stories.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  showStory();
  resetTimer();
};

const prevStory = () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = stories.length - 1;
  }

  showStory();
  resetTimer();
};

const startTimer = () => {
  timer = setInterval(nextStory, 5000);
};

const resetTimer = () => {
  clearInterval(timer);
  startTimer();
};

const init = () => {
  showStory();
  startTimer();
};

init();

rightZone.addEventListener("click", nextStory);
leftZone.addEventListener("click", prevStory);
