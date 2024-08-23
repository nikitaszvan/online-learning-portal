import { createContext, useEffect, useState, useContext } from 'react';

export const MyContext = createContext({
  mobileMenuOpen: false,
  toggleMobileMenu: () => {}
});

export const MyProvider = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen ] = useState(false);
  const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const toggleMobileMenu = (bool = null) => {
    if (bool !== null) {
      setMobileMenuOpen(bool) 
      const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
    elements.forEach(element => {
      element.click();
    });
    } else {
      setMobileMenuOpen(prev => !prev);
      const elements = document.querySelectorAll('a.ps-menu-button.ps-open');
    elements.forEach(element => {
      element.click();
    });
    }
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