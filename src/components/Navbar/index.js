import { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

import { PAGES } from './constants';

function Navbar() {
  const location = useLocation();
  const [navFixed, setNavFixed] = useState(false);

  const isActive = link =>
    link === location.pathname || link + '/' === location.pathname;

  const handleScroll = () => {
    const scroll = window.scrollY;
    setNavFixed(!!scroll);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={navFixed ? 'fixed' : ''}>
        <div className='nav'>
          <p className='nav__name'>Sanchit Arora</p>

          <input type='checkbox' id='toggle-nav' className='nav__checkbox' />
          <label htmlFor='toggle-nav' className='nav__toggle'></label>

          <ul className='nav__list'>
            {PAGES.map(({ title, link }) => (
              <li key={link}>
                <Link
                  to={link}
                  className={
                    'nav__link' + (isActive(link) ? ' nav__link--active' : '')
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
