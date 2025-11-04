import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";



const Home = () => {

  const {darkMode, toggleTheme} = useContext(ThemeContext);
  return (
    <div>
      <h1>{darkMode ? "Dark Mode 🌑" : "Light Mode 🌕"}</h1>
      <button onClick={toggleTheme} style={{ cursor: "pointer" }}>Toggle Theme</button>
    </div>
  )
}

export default Home;
