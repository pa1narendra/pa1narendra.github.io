import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import "../App.css";

interface MousePosition {
  x: number;
  y: number;
}

function Cursor() {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState<"default" | "text">(
    "default"
  );

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    document.querySelectorAll("h1, h2").forEach((el) => {
      el.addEventListener("mouseenter", textEnter);
      el.addEventListener("mouseleave", textLeave);
    });

    // Make cursor normal on the navbar
    const navBar = document.querySelector(".navbar");
    const handleMouseEnter = () => setCursorVariant("default");
    const handleMouseLeave = () => setCursorVariant("default");

    if (navBar) {
      navBar.addEventListener("mouseenter", handleMouseEnter);
      navBar.addEventListener("mouseleave", handleMouseLeave);
    }
    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.querySelectorAll("h1, h2").forEach((el) => {
        el.removeEventListener("mouseenter", textEnter);
        el.removeEventListener("mouseleave", textLeave);
      });

      if (navBar) {
        navBar.removeEventListener("mouseenter", textLeave);
        navBar.removeEventListener("mouseleave", textLeave);
      }
    };
  }, []);

  const variants: Variants = {
    default: {
      x: mousePosition.x - 30,
      y: mousePosition.y - 30,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#eee",
      mixBlendMode: "soft-light",
    },
  };

  return (
    <div className="App">
      <h1 className="title">Pavan Narendra</h1>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
}

export default Cursor;
