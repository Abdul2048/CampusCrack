import React, { useState, useEffect } from 'react';

const EnhancedPracticeButton = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [particles, setParticles] = useState([]);

  const navigate = (path) => {
    console.log(`Navigating to: ${path}`);
    // Your navigation logic here
  };

  const handleClick = () => {
    setIsClicked(true);
    // Create explosion particles
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 0.5,
    }));
    setParticles(newParticles);
    
    setTimeout(() => {
      setIsClicked(false);
      setParticles([]);
      navigate("/practice-questions");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center max-h-[3000px] bg-black  px-4 py-25">
      <div className="relative max-w-sm w-full">
        {/* Orbiting rings - responsive */}
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s'}}>
          <div className="absolute -inset-4 sm:-inset-8 rounded-full border-2 border-green-400/30 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}>
          <div className="absolute -inset-6 sm:-inset-12 rounded-full border border-green-300/20 animate-pulse"></div>
        </div>
        <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
          <div className="absolute -inset-8 sm:-inset-16 rounded-full border border-green-500/10 animate-pulse"></div>
        </div>

        {/* Main button - responsive */}
        <a href="/practice-questions"><button
          onClick={handleClick}
          disabled={isClicked}
          className={`relative group bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-black px-6 py-4 sm:px-12 sm:py-6 rounded-full text-base sm:text-xl font-bold shadow-2xl shadow-green-500/50 transition-all duration-500 ease-out transform hover:scale-110 sm:hover:scale-125 hover:shadow-green-400/80 hover:shadow-2xl overflow-hidden border-2 border-green-300 animate-pulse hover:animate-none w-full ${isClicked ? 'scale-110 animate-bounce' : ''}`}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
          
          {/* Rotating rainbow border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 via-green-500 to-green-300 opacity-0 group-hover:opacity-50 animate-spin transition-opacity duration-500" style={{animationDuration: '2s'}}></div>
          
          {/* Multiple pulsing backgrounds */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-300 to-green-500 rounded-full opacity-0 group-hover:opacity-25 transition-opacity duration-500 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-700 animate-pulse" style={{animationDelay: '0.2s'}}></div>
          
          {/* Glow effects */}
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500 scale-150 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-700 scale-200 animate-ping" style={{animationDelay: '0.3s'}}></div>
          
          {/* Floating particles around button - responsive */}
          <div className="absolute inset-0 rounded-full">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-200 rounded-full animate-bounce opacity-0 group-hover:opacity-80"
                style={{
                  top: `${15 + (i * 12)}%`,
                  left: `${8 + (i * 14)}%`,
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: `${1 + (i * 0.1)}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Explosion particles on click - responsive */}
          {isClicked && particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 sm:w-3 sm:h-3 bg-green-300 rounded-full animate-ping opacity-70"
              style={{
                top: `${particle.y}%`,
                left: `${particle.x}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: '0.6s'
              }}
            ></div>
          ))}
          
          {/* Button content with more animations - responsive */}
          <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 group-hover:text-gray-900 transition-colors duration-300">
            <span className="drop-shadow-sm animate-pulse group-hover:animate-none group-hover:drop-shadow-lg text-sm sm:text-base">
              Start Practicing
            </span>
            <span className="transform group-hover:translate-x-1 sm:group-hover:translate-x-2 transition-transform duration-300 animate-bounce text-lg sm:text-2xl">
              🚀
            </span>
          </span>
          
          {/* Multiple ripple effects */}
          <div className="absolute inset-0 rounded-full bg-green-300 opacity-0 group-hover:opacity-20 transform scale-0 group-hover:scale-110 transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 rounded-full bg-green-400 opacity-0 group-hover:opacity-15 transform scale-0 group-hover:scale-125 transition-all duration-700 ease-out"></div>
          <div className="absolute inset-0 rounded-full bg-green-500 opacity-0 group-hover:opacity-10 transform scale-0 group-hover:scale-140 transition-all duration-900 ease-out"></div>
          
          {/* Breathing borders */}
          <div className="absolute inset-0 rounded-full border-2 border-green-200 opacity-0 group-hover:opacity-60 animate-ping transition-opacity duration-500"></div>
          <div className="absolute inset-0 rounded-full border border-green-300 opacity-0 group-hover:opacity-40 animate-ping transition-opacity duration-700" style={{animationDelay: '0.2s'}}></div>
          
          {/* Rotating dash border */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-green-400 opacity-0 group-hover:opacity-30 animate-spin transition-opacity duration-500" style={{animationDuration: '4s'}}></div>
          
          {/* Morphing background */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-1000 animate-pulse transform group-hover:rotate-180"></div>
        </button></a>

        {/* Floating icons around button - responsive */}
        <div className="absolute -top-4 -left-4 sm:-top-8 sm:-left-8 text-lg sm:text-2xl animate-bounce opacity-60" style={{animationDelay: '0.1s'}}>⭐</div>
        <div className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 text-base sm:text-xl animate-bounce opacity-60" style={{animationDelay: '0.3s'}}>✨</div>
        <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 text-base sm:text-xl animate-bounce opacity-60" style={{animationDelay: '0.5s'}}>🎯</div>
        <div className="absolute -bottom-4 -right-4 sm:-bottom-8 sm:-right-8 text-lg sm:text-2xl animate-bounce opacity-60" style={{animationDelay: '0.7s'}}>💫</div>
        
        {/* Animated text labels - responsive */}
        <div className="absolute -top-12 sm:-top-16 left-1/2 transform -translate-x-1/2 text-green-400 text-xs sm:text-sm font-semibold animate-pulse opacity-70 text-center">
          Ready to Excel?
        </div>
        <div className="absolute -bottom-12 sm:-bottom-16 left-1/2 transform -translate-x-1/2 text-green-300 text-xs animate-bounce opacity-60 text-center">
          Click to Begin Your Journey
        </div>
      </div>
    </div>
  );
};

export default EnhancedPracticeButton;