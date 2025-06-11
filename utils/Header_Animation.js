document.addEventListener("DOMContentLoaded", () => {
  const label = document.querySelector("#W_R label");
  const phrases = ["Web Developer", "Rohan Ingle"];
  const typingSpeed = 150;
  const delayAfterTyping = 1000;
  const underscoreBlinkDuration = 500;
  let currentPhraseIndex = 0;

  function typePhrase(phrase, callback) {
    let charIndex = 0;

    function typeChar() {
      if (charIndex <= phrase.length) {
        label.textContent = phrase.slice(0, charIndex) + "_";
        charIndex++;
        setTimeout(typeChar, typingSpeed);
      } else {
        blinkUnderscore(callback);
      }
    }

    typeChar();
  }

  function blinkUnderscore(callback) {
    let blinkCount = 3;

    function toggleUnderscore() {
      if (blinkCount > 0) {
        label.textContent = label.textContent.endsWith("_")
          ? label.textContent.slice(0, -1)
          : label.textContent + "_";
        blinkCount--;
        setTimeout(toggleUnderscore, underscoreBlinkDuration / 2);
      } else {
        callback();
      }
    }

    toggleUnderscore();
  }

  function deletePhrase(callback) {
    let currentText = label.textContent;

    function deleteChar() {
      if (currentText.length > 1) {
        currentText = currentText.slice(0, -2) + "_";
        label.textContent = currentText;
        setTimeout(deleteChar, typingSpeed / 2);
      } else {
        label.textContent = "";
        callback();
      }
    }

    deleteChar();
  }

  function startTypingAnimation() {
    typePhrase(phrases[currentPhraseIndex], () => {
      deletePhrase(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        startTypingAnimation();
      });
    });
  }
  startTypingAnimation();
});