import { createContext, useEffect, useState, useContext } from 'react';

export const MyContext = createContext({
  mobileMenuOpen: false,
  toggleMobileMenu: () => {}
});

export const MyProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(prev => !prev);
  };

  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);

      if (window.innerWidth > 667) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <MyContext.Provider value={{ mobileMenuOpen, toggleMobileMenu }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => useContext(MyContext);