import { useEffect, useState } from 'react';

const useSetWindowItemSize = (smallScreenSize, largeScreenSize) => {
  const [itemSize, setItemSize] = useState(350); // Default item size

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemSize(smallScreenSize); // Increase item size for small screens
      } else {
        setItemSize(largeScreenSize); // Default item size for larger screens
      }
    };

    // Set initial item size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return { itemSize };
};

export default useSetWindowItemSize;
