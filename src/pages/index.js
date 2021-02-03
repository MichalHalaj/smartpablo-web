import React from 'react';
import { FormattedMessage, useIntl } from 'gatsby-plugin-intl';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

export default function Home() {
  const intl = useIntl();
  const backgroundImage = intl.formatMessage({ id: 'home.heroSection.image.url' });

  return (
    <>
      <Helmet>
        <title>{intl.formatMessage({ id: 'home.pageTitle' })}</title>
      </Helmet>
      <Layout className="landing">
        {/* <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})`}} > */}
        <div className="hero-section">
          <div className="container">
            <div className="hero-container">
              <div className="row">
                <div className="col-lg-5 hero-left">
                  <div className="align-self-center">
                    <h1 className="hero-title">
                      <span className="_1st">
                        <FormattedMessage id="home.heroSection.heading.first" />
                      </span>
                      <span className="_2nd">
                        <FormattedMessage id="home.heroSection.heading.second" />
                      </span>
                    </h1>
                    <p className="hero-text">
                      <FormattedMessage id="home.heroSection.text" />
                    </p>
                    <div className="cta">
                      <a
                        className="btn btn-primary btn-cta btn-lg"
                        href={intl.formatMessage({ id: 'home.heroSection.buttonURL' })}
                      >
                        <FormattedMessage id="home.heroSection.button" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 hero-right">
                  {/* <img
                    src={intl.formatMessage({ id: 'home.heroSection.image.url' })}
                    alt={intl.formatMessage({ id: 'home.heroSection.image.alt' })}
                  /> */}
                  &nbsp;
                </div>
              </div>
            </div>
          </div>
          <div className="divider divider-bottom" />
        </div>

        <div className="section meet-section">
          <div className="container">
            <div className="row">
              <div className="col-md-7 col-img align-self-center">
                <div className="preview">
                  <img
                    src={intl.formatMessage({ id: 'home.meetSection.image.url' })}
                    alt={intl.formatMessage({ id: 'home.meetSection.image.alt' })}
                  />
                </div>
              </div>
              <div className="col-md-5 col-text align-self-center">
                <div className="section__title">
                  <h2>
                    <FormattedMessage id="home.meetSection.heading" />
                  </h2>
                </div>

                <div className="feature-lead">
                  <FormattedMessage id="home.meetSection.text" />
                </div>

                <div className="cta mt-3 mb-3">
                  <a
                    className="btn btn-sm btn-outline-primary btn-cta"
                    href={intl.formatMessage({ id: 'home.meetSection.buttonURL' })}
                  >
                    <FormattedMessage id="home.meetSection.button" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="features-section">
          <div className="divider divider-top"></div>

          <div className="container">
            <div className="section__title" >
              <h2>
                <FormattedMessage id="home.featureSection.heading" />
              </h2>
            </div>

            <div className="section-content" >
              <div className="row">
                {Array.from(new Array(4)).map((_, i) => (
                  <div
                    className="feature col-12 col-md-6"
                    key={intl.formatMessage({ id: `home.featureSection.features.${i}.title` })}
                  >
                    <div className="inner mb-5" >
                        <img
                          src={intl.formatMessage({ id: `home.featureSection.features.${i}.image.url` })}
                          alt={intl.formatMessage({ id: `home.featureSection.features.${i}.image.alt` })}
                        />

                        <h3 className="mt-4 mb-4" >
                            <FormattedMessage id={`home.featureSection.features.${i}.title`} />
                        </h3>

                      <div className="text-lg" >
                        <FormattedMessage id={`home.featureSection.features.${i}.text`} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="divider divider-bottom"></div>
        </div>

        <div className="templates-section">
          <div className="container">
            <div className="section__title">
              <h2>
                <FormattedMessage id="home.templatesSection.heading" />
              </h2>
              <p className="sub-title">
                <FormattedMessage id="home.templatesSection.text" />
              </p>
            </div>

            <div className="section-content">
              <div className="static-index-templates">
                <div className="static-index-templates__inner">
                  <div className="static-index-templates__list">
                    <div className="row">
                      {Array.from(['clean', 'times', 'spring', 'north']).map((_, i) => (
                        <div
                          className="col-3"
                          key={intl.formatMessage({ id: `home.featureSection.features.${i}.title` })}
                        >
                            <img 
                                className="template" 
                                src={`https://cdn.smartpablo.com/web/img/templates/previews/${_}.png`}
                                alt={_} 
                            />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="cta-wrap">
                <a
                  className="btn btn-primary btn-cta"
                  href={intl.formatMessage({ id: 'home.templatesSection.buttonURL' })}
                >
                  <FormattedMessage id="home.templatesSection.button" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="story-section">
          <div className="divider divider-top"></div>

          <div className="section-content">
            <div className="container">
              <div className="row">
                <div className="col-4 col-photo">
                  <div className="photo-wrap">
                    <img
                      src={intl.formatMessage({ id: 'home.storiesSection.image.url' })}
                      alt={intl.formatMessage({ id: 'home.storiesSection.image.alt' })}
                    />
                  </div>
                </div>

                <div className="col-8 col-text">
                  <div className="copy">
                    <FormattedMessage id="home.storiesSection.copy" />
                  </div>

                  <div className="name">
                    <h4>
                      <FormattedMessage id="home.storiesSection.author.name" />
                    </h4>
                    <h5>
                      <FormattedMessage id="home.storiesSection.author.title" />
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="free-section">
          <div className="divider divider-top"></div>

          <div className="container">
            <div className="row">
              <div className="col-md-5 col-text align-self-center">
                <div className="section__title">
                  <h2>
                    <FormattedMessage id="home.freeSection.heading" />
                  </h2>
                </div>

                <div className="text-lg" >
                  <FormattedMessage id="home.freeSection.text" />
                </div>

                <div className="cta mt-4">
                  <a
                    className="btn btn-lg btn-primary btn-cta"
                    href={intl.formatMessage({ id: 'home.freeSection.buttonURL' })}
                  >
                    <FormattedMessage id="home.freeSection.button" />
                  </a>
                </div>
              </div>

              <div className="col-md-7"></div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
