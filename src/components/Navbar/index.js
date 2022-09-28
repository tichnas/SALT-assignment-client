import { useEffect, useState } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

import authAPI from '../../api/auth';

import { PAGES } from './constants';

function Navbar() {
  const location = useLocation();
  const [navFixed, setNavFixed] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

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

  useEffect(() => {
    setLoggedIn(authAPI.isLoggedIn());
  }, [location.pathname]);

  const logout = () => {
    authAPI.logout();
    window.location.reload();
  };

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

            <li>
              <Link
                to={loggedIn ? '#' : '/auth'}
                onClick={loggedIn ? logout : undefined}
                className={
                  'nav__link' + (isActive('/auth') ? ' nav__link--active' : '')
                }
              >
                {loggedIn ? 'Logout' : 'Login/Register'}
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
