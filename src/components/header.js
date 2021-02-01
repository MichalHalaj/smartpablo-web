import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const SCROLL_OFFSET = 400;

const Header = () => {
  const intl = useIntl();
  const [isOpen, setOpen] = useState(false);
  const [isFixed, setFixed] = useState(false);
  let lastScroll = 0;

  useEffect(() => {
    const isBrowser = typeof window !== `undefined`;
    let isMounted = true;

    if (isBrowser) {
      window.addEventListener('scroll', (_) => {
        if (!isMounted) {
          return;
        }

        const currentScroll = window.scrollY;
        const isScrollUp = currentScroll < lastScroll;

        // console.log('status', currentScroll, lastScroll, isScrollUp);

        if (currentScroll >= SCROLL_OFFSET || (currentScroll > SCROLL_OFFSET && isScrollUp)) {
          if (isFixed === false) {
            setFixed(true);
          }
          // $navbar
          //     .addClass('fixed-top')
          //     .addClass('nav-scrolled');
        } else {
          if (isFixed !== false) {
            setFixed(false);
          }
          // $navbar
          //     .removeClass('fixed-top')
          //     .removeClass('nav-scrolled');
        }

        lastScroll = currentScroll;
      });
    }

    return () => {
      isMounted = false;
    };
  });

  return (
    <header id="app-header">
      <nav
        className={`navbar navbar-expand-sm navbar-toggleable-sm navbar-light navbar-main ${
          isFixed && 'fixed-top nav-scrolled'
        }`}
        id="app-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              src={intl.formatMessage({ id: 'header.logo.url' })}
              alt={intl.formatMessage({ id: 'header.logo.alt' })}
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            onClick={() => {
              setOpen((o) => !o);
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className={`navbar-collapse collapse py-3 py-sm-0 ${isOpen && 'show'}`}>
            <ul className="navbar-nav ml-auto mr-3">
              <li className="nav-item">
                <Link className="nav-link" to="/pricing">
                  <FormattedMessage id="header.menu.pricing" />
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  <FormattedMessage id="header.menu.contact" />
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href={intl.formatMessage({ id: 'global.loginURL' })}>
                    <span className="d-none d-lg-inline-block" >
                        <span className="mr-2" >
                            <i className="fas fa-lock" ></i>
                        </span>
                    </span>

                  <FormattedMessage id="header.menu.login" />
                </a>
              </li>
            </ul>
            <a
              className="btn btn-outline-primary px-4"
              href={intl.formatMessage({
                id: 'global.signupURL',
              })}
            >
              <FormattedMessage id="header.menu.signup" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
