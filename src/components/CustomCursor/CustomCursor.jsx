import React, { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

function CustomCursor() {
    const cursorRef = useRef(null);
    const requestRef = useRef();
    const mousePos = useRef({ x: 0, y: 0 });
    const cursorPos = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const updateMousePosition = (e) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        const animate = () => {
            // Smooth interpolation
            cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.15;
            cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.15;

            cursor.style.transform = `translate3d(${cursorPos.current.x}px, ${cursorPos.current.y}px, 0)`;
            requestRef.current = requestAnimationFrame(animate);
        };

        const handleHover = (e) => {
            const isInteractive = e.target.closest("a, button, [role='button'], input, textarea, select");
            cursor.classList.toggle(styles.active, !!isInteractive);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleHover);
        requestRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleHover);
            cancelAnimationFrame(requestRef.current);
        };
    }, []);

    return <div ref={cursorRef} className={styles.cursor} />;
}

export default CustomCursor;
