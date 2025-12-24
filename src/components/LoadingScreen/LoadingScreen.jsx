import React, { useState, useEffect } from "react";
import styles from "./LoadingScreen.module.css";

function LoadingScreen({ onLoadComplete }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
            if (onLoadComplete) onLoadComplete();
        }, 2000);

        return () => clearTimeout(timer);
    }, [onLoadComplete]);

    if (!isLoading) return null;

    return (
        <div className={styles.loadingScreen}>
            <div className={styles.loader}>
                <div className={styles.ring}></div>
                <div className={styles.ring}></div>
                <div className={styles.ring}></div>
                <span className={styles.initials}>HB</span>
            </div>
        </div>
    );
}

export default LoadingScreen;
