import { useState, useEffect } from 'react';

export function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleChange() {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleChange);
    return () => window.removeEventListener('resize', handleChange);
  }, []);

  return width;
}