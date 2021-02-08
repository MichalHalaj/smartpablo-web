import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../../components/layout';
import PrivacyEN from '../../components/legal/privacy-en';
import PrivacySK from '../../components/legal/privacy-sk';

const PrivacyPolicy = () => {
  const intl = useIntl();
  return (
    <Layout className="privacy-policy">
      {intl.locale === 'en' && <PrivacyEN />}
      {intl.locale === 'sk' && <PrivacySK />}
    </Layout>
  );
};

export default PrivacyPolicy;
