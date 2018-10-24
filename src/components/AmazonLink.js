import React from 'react'
import PropTypes from 'prop-types'

const AmazonLink = ({ productTitle, detailUrl, imageUrl, content1, content2 }) => (
  <div class="columns" style={{ margin: "20px" }} >
    <div class="column is-8">
      <div class="box">
        <article class="media">
          <div class="media-left">
            <a href={detailUrl}>
              <figure class="image is-64x64">
                <img src={imageUrl} alt={productTitle} />
              </figure>
            </a>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <a href={detailUrl} class="is-size-5"><strong>{productTitle}</strong></a><br />
                {content1}<br />
                {content2}<br />
                <a href={detailUrl}>Amazonで詳細を見る</a>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div >
)

AmazonLink.propTypes = {
  productTitle: PropTypes.string,
  detailUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
}

export default AmazonLink
