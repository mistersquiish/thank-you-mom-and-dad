import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Picture = ({ picture }) => (

  
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(maxWidth: 3000, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(picture.filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={picture.alt} fluid={imageFluid} />;
    }}
  />
);

export default Picture;