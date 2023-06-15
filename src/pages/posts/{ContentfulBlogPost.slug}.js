import * as React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export const query = graphql`
query ($slug: String) {
  contentfulBlogPost(slug: {eq: $slug}, node_locale: {eq: "en-US"}) {
    title
    slug
    node_locale
    description {
      raw
    }
    id
    heroImage {
      gatsbyImageData(placeholder: BLURRED, aspectRatio: 1.5, width: 600)
    }
  }
}
`;

function PostDetail({ data }) {
  const img = getImage(data.contentfulBlogPost.heroImage)
  return (
    <>
      <div>
        <h1>{data.contentfulBlogPost.title}</h1>
        <p>
          {JSON.parse(data.contentfulBlogPost.description.raw).content[0].content[0].value}
        </p>
        <GatsbyImage image={img} alt="" />
      </div>

      <Link to="/">Home</Link>
    </>
  );
}

export default PostDetail;
