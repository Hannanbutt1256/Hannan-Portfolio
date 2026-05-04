import React, { useState, useEffect, useRef } from 'react';
import styles from './ReparoIntro.module.css';

export default function ReparoIntro({ children }) {
  const [isRepaired, setIsRepaired] = useState(false);
  const [isRepairing, setIsRepairing] = useState(false);
  const [progress, setProgress] = useState(0);
  const repairTimer = useRef(null);
  const progressTimer = useRef(null);

  useEffect(() => {
    if (isRepaired) return;
    
    // Lock scrolling
    document.body.style.overflow = 'hidden';
    
    // Delay slightly to let the browser compute original bounding boxes
    const timer = setTimeout(() => {
      const selectors = 'h1, h2, h3, p, button, [class*="card"], [class*="icon"], [class*="Badge"], form input, form textarea';
      const elements = document.querySelectorAll(selectors);
      
      elements.forEach(el => {
        // Skip overlay elements
        if (el.closest(`.${styles.overlay}`)) return;
        
        const rect = el.getBoundingClientRect();
        // Fall randomly past the current viewport bottom
        const dropY = window.innerHeight - rect.top + (Math.random() * 500);
        // Scatter horizontally
        const dropX = (Math.random() - 0.5) * window.innerWidth;
        // Tumble
        const dropRot = (Math.random() - 0.5) * 720;
        
        el.classList.add('reparo-element');
        el.style.setProperty('--drop-x', `${dropX}px`);
        el.style.setProperty('--drop-y', `${dropY}px`);
        el.style.setProperty('--drop-rot', `${dropRot}deg`);
      });
      
      const wrapper = document.getElementById('reparo-wrapper');
      if(wrapper) wrapper.classList.add('reparo-broken');
    }, 150);
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto'; // Fallback
    };
  }, [isRepaired]);

  const startRepair = () => {
    if (isRepaired) return;
    setIsRepairing(true);
    const wrapper = document.getElementById('reparo-wrapper');
    if(wrapper) {
      wrapper.classList.remove('reparo-broken');
      wrapper.classList.add('reparo-repairing');
    }
    
    let currentProgress = 0;
    progressTimer.current = setInterval(() => {
      currentProgress += (30 / 3000) * 100;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
    }, 30);

    repairTimer.current = setTimeout(() => {
      completeRepair();
    }, 3000);
  };

  const stopRepair = () => {
    if (isRepaired) return;
    setIsRepairing(false);
    setProgress(0);
    clearInterval(progressTimer.current);
    clearTimeout(repairTimer.current);
    const wrapper = document.getElementById('reparo-wrapper');
    if(wrapper) {
      wrapper.classList.add('reparo-broken');
      wrapper.classList.remove('reparo-repairing');
    }
  };

  const completeRepair = () => {
    setIsRepaired(true);
    clearInterval(progressTimer.current);
    clearTimeout(repairTimer.current);
    document.body.style.overflow = 'auto';
    
    const wrapper = document.getElementById('reparo-wrapper');
    if(wrapper) wrapper.classList.remove('reparo-broken', 'reparo-repairing');
    
    const elements = document.querySelectorAll('.reparo-element');
    elements.forEach(el => {
      el.classList.remove('reparo-element');
      el.style.removeProperty('--drop-x');
      el.style.removeProperty('--drop-y');
      el.style.removeProperty('--drop-rot');
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space' && !e.repeat && !isRepaired) {
        e.preventDefault();
        startRepair();
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === 'Space' && !isRepaired) stopRepair();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isRepaired, isRepairing]);

  if (isRepaired) {
    return <>{children}</>;
  }

  return (
    <>
      <div id="reparo-wrapper" className={styles.wrapper}>
        {children}
      </div>
      <div 
        className={styles.overlay}
        onMouseDown={startRepair}
        onMouseUp={stopRepair}
        onMouseLeave={stopRepair}
        onTouchStart={startRepair}
        onTouchEnd={stopRepair}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className={styles.prompt}>
          <div className={styles.iconWrapper}>
             <span className={`${styles.icon} ${isRepairing ? styles.shaking : ''}`}>✨</span>
          </div>
          <h3>{isRepairing ? "CASTING REPARO..." : "PORTFOLIO COLLAPSED"}</h3>
          <p>Hold <strong>SPACE</strong> or <strong>TOUCH</strong> to rebuild</p>
          <div className={styles.progressBarBg}>
            <div className={styles.progressBarFill} style={{ width: `${progress}%` }} />
          </div>
        </div>
        {isRepairing && <div className={styles.magicVignette} />}
      </div>
    </>
  );
}
