import React from "react";

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Тапалка WisperAnonGramCulture",
        text: "Присоединяйся к игре и докажи, что ты лучший таппер!",
        url: window.location.href
      });
    } else {
      alert("Ваш браузер не поддерживает шаринг.");
    }
  };

  return (
    <button
      className="px-4 py-2 bg-green-600 text-white rounded-xl"
      onClick={handleShare}
    >
      📣 Поделиться
    </button>
  );
};

export default ShareButton;
