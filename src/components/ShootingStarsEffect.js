import React, { useEffect } from 'react';


const ShootingStarsEffect = () => {
  useEffect(() => {
    const container = document.querySelector('.shooting-stars-container');
    
    const createShootingStar = () => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      
      const size = Math.random() * 5 + 5; // Increased size for bigger stars
      const animationDuration = Math.random() * 2 + 2; // Random speed, between 2 and 4 seconds
      const animationDelay = Math.random() * 3; // Random delay
      const trailDuration = animationDuration * 1.5; // Trail effect lasts longer than the star animation

      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDuration = `${animationDuration}s`;
      star.style.animationDelay = `${animationDelay}s`;
      star.style.filter = 'blur(2px)'; // Added blur effect for the trail
      
      // Glowing trail using box-shadow or filter (soft glow effect)
      star.style.boxShadow = `0 0 ${size}px rgba(255, 255, 255, 0.8), 0 0 ${size * 2}px rgba(255, 255, 255, 0.5)`;

      container.appendChild(star);
      
      // Clean up stars after animation
      star.addEventListener('animationend', () => {
        star.remove();
      });
    };

    const interval = setInterval(createShootingStar, 500);
    
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  
  return (
    <div className="shooting-stars-container">
      {/* Content here */}
    </div>
  );
};

export default ShootingStarsEffect;

