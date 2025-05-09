import React from "react";

const DarkModeToggle = () => {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-700 rounded"
    >
      🌗
    </button>
  );
};

export default DarkModeToggle;
