import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

const Pricing = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'pricing.pageTitle' })}</title>
      </Helmet>
      <Layout className="pricing">
        <div className="hero-wrap">
          <div className="hero-section">
            <div className="container">
              <div className="hero-title">
                <h1>
                  <FormattedMessage id="pricing.heroSection.heading" />
                </h1>
                <p className="sub-title">
                  <FormattedMessage id="pricing.heroSection.text" />
                </p>
              </div>
            </div>
          </div>

          <div className="table-section">
            <div className="container">
              <div className="inner">
                <h2>
                  <FormattedMessage id="pricing.tableSection.heading" />
                </h2>

                <ul className="list-unstyled mt-4 mb-4">
                  <li>
                    <FormattedMessage id="pricing.tableSection.list.first" />
                  </li>
                  <li>
                    <FormattedMessage id="pricing.tableSection.list.second" />
                  </li>
                  <li>
                    <FormattedMessage id="pricing.tableSection.list.third" />
                  </li>
                </ul>

                <div className="actions mt-5">
                  <a
                    href={intl.formatMessage({ id: 'pricing.tableSection.buttonURL' })}
                    className="btn btn-primary btn-cta btn-lg"
                  >
                    <FormattedMessage id="pricing.tableSection.button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="included-section">
          <div className="container">
            <div className="section__title">
              <h2>
                <FormattedMessage id="pricing.includedSection.heading" />
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

export default Pricing;
