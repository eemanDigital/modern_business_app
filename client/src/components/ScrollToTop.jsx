import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScrollTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Smooth scrolling animation
      });
    };

    // Add event listener to the document body
    document.body.addEventListener('click', handleScrollTop);

    // Clean up event listener on unmount
    return () => document.body.removeEventListener('click', handleScrollTop);
  }, []); // Empty dependency array to run only once on component mount

  return null; // No need to render any visible elements
};

export default ScrollToTop;
