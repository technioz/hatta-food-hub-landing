import React from 'react';

// Main WebGL Background Component with gradient and noise texture
const WebGLBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div 
        className="absolute inset-0 animate-gradient"
        style={{
          background: `radial-gradient(circle at 50% 50%, 
            rgba(255, 255, 255, 0.03) 0%,
            rgba(0, 0, 0, 0.1) 100%
          )`,
        }}
      />
      
      {/* Gradient orbs */}
      <div 
        className="absolute -top-[25%] -left-[15%] w-[80%] h-[80%] animate-orb-1 opacity-20"
        style={{
          background: `radial-gradient(circle at center,
            rgba(255, 255, 255, 0.85) 0%,
            rgba(255, 255, 255, 0) 70%
          )`,
          filter: 'blur(55px)',
        }}
      />
      
      <div 
        className="absolute -bottom-[35%] -right-[15%] w-[70%] h-[70%] animate-orb-2 opacity-20"
        style={{
          background: `radial-gradient(circle at center,
            rgba(240, 240, 240, 0.8) 0%,
            rgba(240, 240, 240, 0) 70%
          )`,
          filter: 'blur(55px)',
        }}
      />

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.1] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.25' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeBlend mode='overlay' in2='SourceGraphic'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '512px 512px',
        }}
      />
    </div>
  );
};

export default WebGLBackground;