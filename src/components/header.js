import React, { useState } from 'react';
import { Link, useIntl, FormattedMessage } from 'gatsby-plugin-intl';

const Header = () => {
  const intl = useIntl();
  const [isOpen, setOpen] = useState(false);
  return (
    <header id="app-header">
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light navbar-main" id="app-navbar">
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
                <a className="nav-link" href={intl.formatMessage({ id: 'global.loginURL' })}>
                  <FormattedMessage id="header.menu.login" />
                </a>
              </li>
            </ul>
            <a
              className="btn btn-outline-primary"
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
