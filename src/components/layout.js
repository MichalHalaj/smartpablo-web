import React from 'react';
import { FormattedMessage, Link, useIntl } from 'gatsby-plugin-intl';
import Footer from './footer';
import './styles/styles.scss';
import { Helmet } from 'react-helmet';
import Header from './header';

const Layout = ({ children, className }) => {
  const intl = useIntl();

  return (
    <>
      <Helmet>
        <meta name="description" content={intl.formatMessage({ id: 'global.metaDescription' })} />
        <meta name="author" content="SmartPablo" />
        <link rel="shortcut icon" href="/assets/favicon.ico" asp-append-version="true" />
        <link rel="apple-touch-icon image_src" href="/assets/fav/apple-touch-icon.png" asp-append-version="true" />
      </Helmet>
      <div className={className}>
        <Header />
        <div id="app-container">
          <main role="main">{children}</main>
          <div className="push" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
