import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import History from "./pages/History";
import Footer from "./components/Footer";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors scroll-smooth">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="px-4 max-w-5xl mx-auto space-y-16 py-8">
        <Home />
        <About />
        <Projects />
        <History />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;