import React, { useEffect, useState } from 'react';

const FadeIn = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ 
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.5s ease-in'
    }}>
      {children}
    </div>
  );
};

export default FadeIn;
