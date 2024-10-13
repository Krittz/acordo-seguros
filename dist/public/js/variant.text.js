const textElement = document.getElementById("variant-text");
const texts = ["Agilidade", "Qualidade", "Credibilidade"];
let textIndex = 0;
let charIndex = 0;
let currentText = "";
let typingSpeed = 100;

function typeText() {
  if (charIndex < texts[textIndex].length) {
    currentText += texts[textIndex].charAt(charIndex);
    textElement.textContent = currentText;
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(eraseText, 2000);
  }
}

function eraseText() {
  if (charIndex > 0) {
    currentText = texts[textIndex].substring(0, charIndex - 1);
    textElement.textContent = currentText;
    charIndex--;
    setTimeout(eraseText, typingSpeed);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeText, typingSpeed);
  }
}

typeText();
