import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'
export const query = graphql`
    query ($sku: String) {
        wpProduct(sku: {eq: $sku}) {
            id
            name
            sku
            featuredImage {
                node {
                  gatsbyImage(width: 300)
                }
              }
        }
    }
 `;

const WpProduct = (props) => {
    const images = withArtDirection(getImage(props.data.wpProduct.featuredImage.node), [
        // if there's a second pic for large screen, the code below will be used
        // {
        //     media: "(max-width: 1024px)",
        //     image: getImage(props.data.wpProduct.featuredImage.node),
        // },
    ]);
    return (<>
        <div>{props.data.wpProduct.name}</div>
        <GatsbyImage image={images} />
    </>);
}

export default WpProduct;