export const initTelegram = () => {
  if (window.Telegram && window.Telegram.WebApp) {
    const tg = window.Telegram.WebApp;
    tg.expand();
    tg.ready();
    return tg;
  }
  return null;
};

export const sendTelegramMessage = (text) => {
  const tg = initTelegram();
  if (tg) {
    tg.sendData(text);
  } else {
    alert("Telegram API недоступен");
  }
};
