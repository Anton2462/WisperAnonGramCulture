import React, { useState, useEffect } from "react";

const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      className="px-4 py-2 bg-gray-800 text-white rounded-xl"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "🌞 Светлая тема" : "🌙 Тёмная тема"}
    </button>
  );
};

export default ThemeSwitcher;
