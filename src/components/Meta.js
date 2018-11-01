import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'

const Meta = ({ post, siteUrl }) => {
  return (
    <Helmet
      title={`${post.frontmatter.title} | Blog`}
      meta={
        [
          { name: 'twitter:card', content: "summary_large_image" },
          { name: 'description', content: post.frontmatter.description },
          { property: 'og:title', content: post.frontmatter.title },
          { property: 'og:description', content: post.frontmatter.description },
          { property: 'og:image', content: `${siteUrl}/${post.frontmatter.image}` },
        ]}
    />
  );
};

Meta.propTypes = {
  siteUrl: PropTypes.string,
  post: PropTypes.object,
}

export default Meta