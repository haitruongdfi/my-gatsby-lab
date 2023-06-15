import * as React from 'react';
import { graphql } from 'gatsby';
export const query = graphql`
query ($slug: String){
    wpPost(slug: {eq: $slug}) {
      id
      slug
      title
      excerpt
      content
    }
  }
 `;

const WpPost = ({ data }) => {
  return (
    <section>
      <h1>{data.wpPost.title}</h1>
      <blockquote style={{ backgroundColor: "#ccc" }} dangerouslySetInnerHTML={{ __html: data.wpPost.excerpt }} />
      <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
    </section>
  );
}

export default WpPost;