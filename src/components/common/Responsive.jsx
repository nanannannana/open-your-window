import { useMediaQuery } from 'react-responsive';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

const Laptop = ({ children }) => {
  const isLaptop = useMediaQuery({
    minWidth: 800,
    maxWidth: 1023,
  });
  return isLaptop ? children : null;
};

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 577, maxWidth: 799 });
  return isTablet ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 576 });
  return isMobile ? children : null;
};

export { Desktop, Laptop, Tablet, Mobile };
