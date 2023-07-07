import {useState, useEffect} from 'react';

// based on "use-header-scroll" from https://github.com/nir905/use-header-scroll#readme
const useHeaderScroll = ({min, max, target = window, maxOffset}) => {
  const [height, setHeight] = useState(max);

  useEffect(() => {
    const onScroll = () => {
      const percent = 1 - Math.min(1, target.scrollY / maxOffset);
      setHeight(percent * (max - min) + min);
    };

    // { passive: true } would be a good idea,
    // if I wouldn't want to intentially make scrolling a little slower then usual
    target.addEventListener('scroll', onScroll);
    return () => target.removeEventListener('scroll', onScroll);
  }, [min, max, target, maxOffset]);

  return height;
};

export default useHeaderScroll;
