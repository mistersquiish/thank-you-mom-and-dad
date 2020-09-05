import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../data';
import '../style/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
  const { title, lang, description } = headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Henry\'s Personal Website'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Henry\'s Personal Website'} />

        <meta property="og:title" content="Henry Vuong's Personal Website" />
        <meta property="og:description" content="Welcome to my life! Feel free to look around." />
        {/* <meta property='og:image' content={utaustin}></meta> */}
      </Helmet>
      <App />
    </>
  );
};

