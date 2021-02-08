import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../../components/layout';
import TermsEn from '../../components/legal/terms-en';
import TermsSk from '../../components/legal/terms-sk';

const TermsOfService = () => {
  const intl = useIntl();
  return (
    <Layout className="terms-of-services">
      {intl.locale === 'en' && <TermsEn />}
      {intl.locale === 'sk' && <TermsSk />}
    </Layout>
  );
};

export default TermsOfService;
