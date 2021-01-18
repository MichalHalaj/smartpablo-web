import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { Link, useIntl } from 'gatsby-plugin-intl';
import Layout from '../components/layout';

export default function Blog({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  const { locale } = useIntl();

  return (
    <>
      <Helmet>
        <title>SmartPablo blog</title>
      </Helmet>
      <Layout>
        <div className="blog-hero-section">
          <div className="container">
            <header className="blog-hero-section">
              <h1>Blog</h1>
            </header>
          </div>
          <div className="divider divider-bottom" />
        </div>
        <div className="blog-section">
          <div className="container">
            {posts
              .filter((post) => post.node.frontmatter.language === locale)
              .map(({ node: post }) => {
                return (
                  <div className="blog-post-item" key={post.id}>
                    <header className="blog-header">
                      <h2>
                        <Link to={post.frontmatter.slug}>{post.frontmatter.title}</Link>
                      </h2>
                      <p>{post.frontmatter.date}</p>
                    </header>
                    <p>{post.excerpt}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </Layout>
    </>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            slug
            language
          }
        }
      }
    }
  }
`;
