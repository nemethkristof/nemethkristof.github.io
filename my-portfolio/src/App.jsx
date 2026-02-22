import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";
const lightTheme = {
  text: '#4a3530',
  background: '#d4d0c4',
  primary: '#40e0d0',
  secondary: '#a7c9ae',
  accent: '#85b4b1',
};

const darkTheme = {
  text: '#cfbab5',
  background: '#3b372b',
  primary: '#1fc1b1',
  secondary: '#36593d',
  accent: '#4c7b78',
};

function App() {
  const [dark, setDark] = useState(false);

  // CSS változók beállítása inline style-ban a fény/dark téma szerint
  const themeVars = dark
    ? {
        '--text': darkTheme.text,
        '--background': darkTheme.background,
        '--primary': darkTheme.primary,
        '--secondary': darkTheme.secondary,
        '--accent': darkTheme.accent,
        '--is-dark': 1,
      }
    : {
        '--text': lightTheme.text,
        '--background': lightTheme.background,
        '--primary': lightTheme.primary,
        '--secondary': lightTheme.secondary,
        '--accent': lightTheme.accent,
        '--is-dark': 0,
      };

  return (
    <div style={themeVars} className="app-root">
      <Navbar dark={dark} setDark={setDark} />
      <Hero />
      <Education />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
