export const startFuryMode = (tapCount, setFuryMode) => {
  if (tapCount >= 50 && tapCount % 50 === 0) {
    setFuryMode(true);
    setTimeout(() => setFuryMode(false), 5000);
  }
};

export const startBattle = (setBattleMode) => {
  setBattleMode(true);
  setTimeout(() => setBattleMode(false), 10000);
};

export const calculateBonus = (tapCount) => {
  return tapCount % 100 === 0 ? 10 : 0;
};
