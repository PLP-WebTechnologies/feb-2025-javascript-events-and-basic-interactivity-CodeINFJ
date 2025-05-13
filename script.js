// Style tips
const tips = [
  "Layer a vintage jacket over a simple dress for instant chic.",
  "Accessories can turn a plain look into a statement.",
  "Neutral thrift finds are the easiest to style.",
  "Mix textures: Denim + silk = chef’s kiss.",
  "Oversized? Belt it and slay."
];

// Get references to elements
const tipBtn = document.getElementById("tipBtn");
const tipText = document.getElementById("styleTip");
const galleryImg = document.getElementById("galleryImg");
const galleryBtns = document.querySelectorAll(".galleryBtn");

// Event: Show a random style tip
tipBtn.addEventListener("click", () => {
  const randomTip = tips[Math.floor(Math.random() * tips.length)];
  tipText.textContent = randomTip;
});

// Event: Change image based on button click
galleryBtns.forEach(button => {
  button.addEventListener("click", () => {
    const newImg = button.getAttribute("data-img");
    galleryImg.src = newImg;
  });
});
