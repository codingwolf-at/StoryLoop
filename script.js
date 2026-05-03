import { stories } from "./constants.js";

const list = document.querySelector(".stories-list");
const mainScreen = document.querySelector(".main-screen");
const player = document.querySelector(".story-player");

const storyImg = document.querySelector(".story-img");
const leftZone = document.querySelector(".nav.left");
const rightZone = document.querySelector(".nav.right");
const profilePic = document.querySelector(".profile-pic");
const usernameEl = document.querySelector(".username");
const timeEl = document.querySelector(".time");

stories.forEach((story, index) => {
    const img = document.createElement("img");
    img.src = story.profilePic;
    img.classList.add("story-thumb");
  
    img.addEventListener("click", () => {
      openStory(index);
    });
  
    list.appendChild(img);
});

const openStory = (index) => {
    currentIndex = index;
  
    mainScreen.classList.add("story-open");
    player.classList.add("active");
  
    showStory();
    startTimer();
};

const closeViewer = () => {
    player.classList.remove("active");
    mainScreen.classList.remove("story-open"); 
    clearInterval(timer);
};

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

    profilePic.src = story.profilePic;
    usernameEl.textContent = story.username;
    timeEl.textContent = story.timeAgo;
};

const nextStory = () => {
    if (currentIndex < stories.length - 1) {
        currentIndex++;
        showStory();
        resetTimer(); 
    } else {
        closeViewer();
    }
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
    clearInterval(timer);
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
