const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const resetBtn = document.querySelector(".reset-btn");

// Store original content to reset later
const originalQuestion = "Do you love me?";
const originalGif = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif";

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "I know u love me..... my chrissyy......";
  gif.src = "https://media.tenor.com/-rGuSncuEAEAAAAi/love-hug-love-couple.gif";

  // Hide the Yes and No buttons, and show the Reset button
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  resetBtn.style.display = "block";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Reset everything back to the original state
resetBtn.addEventListener("click", () => {
  // Reset the question text and gif
  question.innerHTML = originalQuestion;
  gif.src = originalGif;

  // Show Yes and No buttons, hide Reset button
  yesBtn.style.display = "block";
  noBtn.style.display = "block";
  resetBtn.style.display = "none";

  // Optional: reset No button's position
  noBtn.style.left = "50%";
  noBtn.style.top = "auto";
});
