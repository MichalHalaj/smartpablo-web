import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import React from 'react';

const Footer = () => {
  const intl = useIntl();
  return (
    <footer>
      <div className="stretch">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="brand">
                <Link className="logo" to="/">
                  <img
                    src={intl.formatMessage({ id: 'footer.logo.url' })}
                    alt={intl.formatMessage({ id: 'footer.logo.alt' })}
                  />
                </Link>

                <small className="d-none text-muted">© 2019 - {new Date().getFullYear()}</small>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="links">
                <ul className="list-unstyled">
                  <li>
                    <Link to="/">
                      <FormattedMessage id="footer.menu.home" />
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms-of-services">Terms of Services</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-2">
              <div className="social">
                <ul className="list-unstyled">
                  <li>
                    <a href={intl.formatMessage({ id: 'footer.social.facebook' })}>
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>

                  <li>
                    <a href={intl.formatMessage({ id: 'footer.social.twitter' })}>
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>

                  <li>
                    <a href={intl.formatMessage({ id: 'footer.social.linkedin' })}>
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </li>

                  <li>
                    <a href={intl.formatMessage({ id: 'footer.social.instagram' })}>
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
