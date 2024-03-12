import '../../styles/navbar.css';
import '../../styles/@media.css';
import rakurs from '../../images/rakurs.png';
import { useEffect, useRef, useState } from 'react';
import ConstactModal from '../Modal/ContactModal';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt4 } from 'react-icons/hi';
import '../Developer/style.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showRakursNav, setShowRakursNav] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 30) {
      setShowRakursNav(true);
    } else {
      setShowRakursNav(false);
    }
  };

  const toggleMenu = (event) => {
    setMenuOpen(!menuOpen);
    event.preventDefault();
  };

  const openModal = (event) => {
    event.preventDefault();
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header sticky">
      <nav
        className="nav nav-fixed"
        style={{
          backgroundColor: showRakursNav
            ? "rgba(221, 221, 221, 0.5) backdrop-filter: 'blur(12px)'"
            : 'transparent',
          backdropFilter: showRakursNav ? 'blur(12px)' : 'none',
        }}>
        <div className="menu" ref={menuRef}>
          <ul>
            <li>
              <a href="#" onClick={(e) => toggleMenu(e)}>
                <i>
                  <HiMenuAlt4 />
                </i>
                <NavLink to={'/'}>Menu</NavLink>
              </a>
            </li>
            <li>
              
            </li>
            <li>+7 (495) 999-99-99</li>
          </ul>
        </div>
        {showRakursNav && (
          <div className="rakurs-nav">
            <a href="#section1">
              <img src={rakurs} alt="Rakurs" />
            </a>
          </div>
        )}

        {menuOpen && (
          <div className="newDiv">
            <div className='open-menu'>
              <button className='btn-anchor btn-openMenu'>Концепция</button>  
              <button className='btn-anchor btn-openMenu'>Локация</button>  
              <button className='btn-anchor btn-openMenu'>Архитектура</button>  
              <button className='btn-anchor btn-openMenu'>Дизайн среды</button>  
              <button onClick={openModal} className='btn-anchor btn-openMenu btn-dark'>Оставаться на связи</button>  
            </div>            
          </div>
        )}

        <div className="contacts">
          <ul>
            <li>
              <Link to="/developer">Девелопер</Link>
            </li>
            <li>
              <Link onClick={openModal}>Оставаться на связи</Link>
            </li>
          </ul>
        </div>
        <ConstactModal isOpen={modalOpen} onClose={closeModal} />
      </nav>
    </header>
  );
};
export default Navbar;
