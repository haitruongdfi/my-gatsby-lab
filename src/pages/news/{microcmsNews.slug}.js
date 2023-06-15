import * as React from 'react';
import { graphql } from 'gatsby';

// MUST "export" keyword before graphql tag
export const news = graphql`
    query ($slug: String) {
        microcmsNews(slug: {eq: $slug}) {
            newsId
            title
            slug
            content
        }
    }
`;

const News = ({ data }) => {
    return (
        <>
            <h1>{data.microcmsNews.title}</h1>

            <div
                key={data.microcmsNews.newsId}
                dangerouslySetInnerHTML={{
                    __html: data.microcmsNews.content,
                }}
            />
        </>
    );
}

export default News;