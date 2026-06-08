import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Work from "./pages/Work";
import ProjectDetail from "./pages/ProjectDetail";
import Lab from "./pages/Lab";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    const loader = document.getElementById("app-loader");
    if (!loader) return;

    const hide = () => {
      loader.classList.add("done");
      setTimeout(() => loader.remove(), 550);
    };

    const safety = setTimeout(hide, 5000);
    if (document.readyState === "complete") {
      clearTimeout(safety);
      setTimeout(hide, 200);
    } else {
      window.addEventListener(
        "load",
        () => {
          clearTimeout(safety);
          setTimeout(hide, 200);
        },
        { once: true }
      );
    }
    return () => clearTimeout(safety);
  }, []);

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="work" element={<Work />} />
        <Route path="work/:slug" element={<ProjectDetail />} />
        <Route path="lab" element={<Lab />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
