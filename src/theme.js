import { useState } from "react";

export default function HandleTheme() {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    // const rootEl = document.querySelector(".App");
    const rootEl = document.body;
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "light") {
      rootEl.classList.remove("light");
      rootEl.classList.add("dark");
    }
    if (theme === "dark") {
      rootEl.classList.remove("dark");
      rootEl.classList.add("light");
    }
  };
  return <button onClick={handleTheme}>toggle theme</button>;
}
