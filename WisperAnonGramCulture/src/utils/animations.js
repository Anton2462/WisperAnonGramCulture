export const playTapAnimation = (buttonRef) => {
  if (buttonRef.current) {
    buttonRef.current.classList.add("animate-bounce");
    setTimeout(() => buttonRef.current.classList.remove("animate-bounce"), 300);
  }
};

export const playTapSound = () => {
  const audio = new Audio("/sounds/tap.mp3");
  audio.volume = 0.5;
  audio.play();
};
