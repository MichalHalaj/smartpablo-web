import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const Feature = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'feature.pageTitle' })}</title>
      </Helmet>
      <Layout className="feature">
        <div className="hero-wrap">
          <div className="hero-section">
            <div className="container">
              <div className="hero-title">
                <h1>
                  <FormattedMessage id="feature.heroSection.heading" />
                </h1>
                <p className="sub-title">
                  <FormattedMessage id="feature.heroSection.text" />
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="included-section">
          <div className="container">
            <div className="section__title">
              <h2>
                <FormattedMessage id="feature.includedSection.heading" />
              </h2>
            </div>

            <div className="vertical-align: top;">
              <ul className="mt-4 mb-5">
                <li>
                  <FormattedMessage id="pricing.includedSection.list.1" />
                </li>
                <li>
                  <FormattedMessage id="pricing.includedSection.list.2" />
                </li>
                <li>
                  <FormattedMessage id="pricing.includedSection.list.3" />
                </li>

                <li>
                  <FormattedMessage id="pricing.includedSection.list.4" />
                </li>
                <li>
                  <FormattedMessage id="pricing.includedSection.list.5" />
                </li>
                <li>
                  <FormattedMessage id="pricing.includedSection.list.6" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Feature;
