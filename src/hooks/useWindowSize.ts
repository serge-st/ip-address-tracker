import { useLayoutEffect, useState } from 'react';

type Dimentions = [number, number];

const useWindowSize = (): Dimentions => {
  const [dimentions, setDimentions] = useState<Dimentions>([0, 0]);
  useLayoutEffect(() => {
    const updateSize = () => {
      setDimentions([window.innerHeight, window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return dimentions;
}

export default useWindowSize;