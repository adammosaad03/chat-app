import React, { useEffect } from 'react';

const BallonsEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.ballons-container');

    const createBalloon = () => {
      if (container) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');

        // Random size and position
        const size = Math.random() * 50 + 50; // Balloon size between 50px and 100px
        const leftPosition = Math.random() * 100; // Random left position
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size}px`;
        balloon.style.left = `${leftPosition}%`;

        // Random animation duration
        const animationDuration = Math.random() * 5 + 5; // Duration between 5s and 10s
        balloon.style.animationDuration = `${animationDuration}s`;

        container.appendChild(balloon);

        // Remove balloon after animation
        balloon.addEventListener('animationend', () => {
          balloon.remove();
        });
      }
    };

    // Create balloons at intervals
    const interval = setInterval(createBalloon, 1000);

    // Cleanup on component unmount
    return () => clearInterval(interval);
  }, []);

  return <div className="ballons-container"></div>;
};

export default BallonsEffect;
