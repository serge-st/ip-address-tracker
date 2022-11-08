import { useLayoutEffect, useState } from 'react';

const useWindowSize = () => {
  const [height, setHeight] = useState(0);
  useLayoutEffect(() => {
    const updateSize = () => {
        setHeight(window.innerHeight);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return height;
}

export default useWindowSize;