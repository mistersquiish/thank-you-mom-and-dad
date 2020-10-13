import React from 'react';
import App from '../components/App';
import '../style/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from '../components/seo';
import previewImage from '../../static/preview-image.jpg';

export default () => {
  return (
    <>
      <SEO />
      <App />
    </>
  );
};

