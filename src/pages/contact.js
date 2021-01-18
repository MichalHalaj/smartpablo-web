import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/contact-form';
import Layout from '../components/layout';

const Contact = () => {
  const intl = useIntl();
  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'contact.pageTitle' })}</title>
      </Helmet>
      <Layout className="contact">
        <div className="hero-section">
          <div className="container">
            <div className="hero-title">
              <h1 className="heading">
                <FormattedMessage id="contact.heroSection.heading" />
              </h1>
              <p className="sub-title">
                <FormattedMessage id="contact.heroSection.text" />
              </p>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="email-box">
                  <h2>
                    <FormattedMessage id="contact.formSection.email.heading" />
                  </h2>
                  <p className="email">
                    <FormattedMessage id="contact.formSection.email.value" />
                  </p>
                </div>

                <div className="offices-box mt-5 mb-5">
                  <h2>
                    <FormattedMessage id="contact.formSection.office.heading" />
                  </h2>
                  <div className="office office-eu-sk">
                    <div className="row">
                      <div className="col-2">
                        <div className="flag-wrap">
                          <img
                            className="flag"
                            src={intl.formatMessage({ id: 'contact.formSection.office.image.url' })}
                            alt={intl.formatMessage({ id: 'contact.formSection.office.image.alt' })}
                          />
                        </div>
                      </div>

                      <div className="col-10">
                        <h3>
                          <span className="country">
                            <FormattedMessage id="contact.formSection.office.info.heading" />
                          </span>
                        </h3>
                        <h4>
                          <FormattedMessage id="contact.formSection.office.info.subHeading" />
                        </h4>

                        <div className="address">
                          <FormattedMessage id="contact.formSection.office.info.address.1" />
                          <br />
                          <FormattedMessage id="contact.formSection.office.info.address.2" />
                          <br />
                          <FormattedMessage id="contact.formSection.office.info.address.3" />
                        </div>

                        <div className="availability">
                          <FormattedMessage id="contact.formSection.office.info.availability" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="align-self-center">
                  <div className="form-container">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
