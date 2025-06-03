const quotes = [
  "The best way to predict the future is to invent it.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Do what you can, with what you have, where you are.",
  "It does not matter how slowly you go as long as you do not stop.",
  "Believe you can and you're halfway there."
];

const quoteText = document.querySelector("p");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = `"${quotes[randomIndex]}"`;
});
