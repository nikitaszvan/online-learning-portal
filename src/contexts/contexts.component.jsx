import { createContext, useEffect, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [mobileMenuOpen, toggleMobileMenu ] = useState(false);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 667) {
        toggleMobileMenu(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

console.log(mobileMenuOpen, windowWidth);
  return (
    <MyContext.Provider value={{ mobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyProvider };