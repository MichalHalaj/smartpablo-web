import React from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const isBrowser = typeof window !== `undefined`;

export default function HTML(props) {
  useEffect(() => {
    if (isBrowser) {
      window.addEventListener('scroll', (_) => {
        console.log('x1');
      });
      document.addEventListener('scroll', (_) => {
        console.log('x2');
      });
      console.log('x3');
    }
  });

  console.log('x4');

  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <script src="https://kit.fontawesome.com/9513562f5f.js" crossOrigin="anonymous"></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
