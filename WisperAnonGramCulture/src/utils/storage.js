export const saveScore = (name, score) => {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard.slice(0, 10)));
};

export const getLeaderboard = () => {
  return JSON.parse(localStorage.getItem("leaderboard")) || [];
};

export const checkAchievements = (tapCount) => {
  const achievements = [];
  if (tapCount >= 10) achievements.push("Новичок: 10 тапов!");
  if (tapCount >= 50) achievements.push("Продвинутый: 50 тапов!");
  if (tapCount >= 100) achievements.push("Мастер: 100 тапов!");
  if (tapCount >= 500) achievements.push("Легенда: 500 тапов!");
  return achievements;
};
