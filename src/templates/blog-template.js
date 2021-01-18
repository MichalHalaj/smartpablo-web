import React from 'react';
import { graphql } from 'gatsby';
import { useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';

export default function Template({ data }) {
  const { locale } = useIntl();
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  if (frontmatter.language !== locale) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>{frontmatter.title} | SmartPablo blog</title>
      </Helmet>
      <Layout>
        <div className="blog-section">
          <div className="container">
            <div className="blog-post">
              <header className="blog-header">
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
              </header>
              <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        language
      }
    }
  }
`;
