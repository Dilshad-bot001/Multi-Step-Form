import React, { useEffect, useState } from 'react';

const CircularProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const circularProgress = document.querySelector(".circular-progress");

    const progressEndValue = 100;
    const speed = 100;

    const progressInterval = setInterval(() => {
      setProgress(prevProgress => {
        const newProgress = prevProgress + 10;
        const updatedProgress = Math.min(newProgress, progressEndValue);
        circularProgress.style.background = `conic-gradient(#f6ab29 ${updatedProgress * 3.6}deg, #ededed 0deg)`;

        if (updatedProgress >= progressEndValue) {
          clearInterval(progressInterval);
          window.location.replace('http://localhost:3000/home')
        }

        return updatedProgress;
      });
    }, speed);

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <>
    <div className="circular-progress" />
    </>
  );
};

export default CircularProgressBar;