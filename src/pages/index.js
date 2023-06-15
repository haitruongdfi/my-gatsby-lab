import * as React from 'react';
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';
import * as styles from '../stylesheets/components/index.module.scss';
import '../stylesheets/styles.scss';
// import Swiper core and required modules
import { Navigation, EffectFade, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

/* "images" in graphql is alias (https://graphql.org/learn/queries/#aliases) */
export const query = graphql`
  query {
    allContentfulBlogPost(filter: {node_locale: {eq: "en-US"}}) {
      nodes {
        title
        slug
      }
    }
    allFile {
      images: nodes {
        childImageSharp {
          gatsbyImageData(width: 400)
        }
      }
    }
  }
`;

export default function IndexPage({ data }) {

  return (
    <Layout>

      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={['auto', 'webp', 'avif']}
          alt="Gatsby"
          style={{ marginBottom: 'var(--space-3)' }}
        />
        <h1 className="something">
          Welcome to
          {' '}
          <b>Gatsby world!</b>
        </h1>
        <h2>{process.env.GATSBY_SHOW_ON_BROWSER}</h2>
        {/* multiple class in React */}
        <p className={`${styles.bright} ${styles.something}`}>Use back ticks for styling multi classes</p>
        <StaticImage
          alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
          src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        />
        <Link to="/contact">Contact us</Link>
        <br />
        <StaticImage src="../images/bird.jpg" imgStyle={{ width: '100%', height: '100%' }} width={300} height={300} alt="red bird" />
        <p>Or</p>
        <GatsbyImage image={data.allFile.images[2].childImageSharp.gatsbyImageData} alt="" />
        <p>Or</p>
        <GatsbyImage image={getImage(data.allFile.images[2])} alt="" />
      </div>
      <div>
        {data.allContentfulBlogPost.nodes.length > 0 && <ul>
          {data.allContentfulBlogPost.nodes.map((node) => <li>{node.title} <Link to={"posts/" + node.slug}>Read more ...</Link></li>)}
        </ul>}
      </div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        spaceBetween={10}
        slidesPerView={1}
        navigation={false}
        scrollbar={{ draggable: false }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}

        autoplay={{
          delay: 2500,
        }}
      >
        <SwiperSlide>
          <StaticImage
            alt="image 1"
            src="https://images.unsplash.com/photo-1671601065280-215ca5072af9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80"
            width={800} aspectRatio={1.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            alt="image 2"
            src="https://images.unsplash.com/photo-1671600940888-74bdddbffcce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={800} aspectRatio={1.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            alt="image 3"
            src="https://images.unsplash.com/photo-1685885291521-6399f5ffd195?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={800} aspectRatio={1.5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            alt="image 4"
            src="https://images.unsplash.com/photo-1685802832692-9e900c07d31e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            width={800} aspectRatio={1.5}
          />
        </SwiperSlide>
      </Swiper>
    </Layout >
  );
}
/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export function Head() {
  return <Seo title="Home" />;
}
