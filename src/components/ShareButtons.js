import React from 'react'
import PropTypes from 'prop-types'
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import HatenaButton from './HatenaButton'

const ShareButtons = ({ articleUrl, articleTitle }) => (
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <FacebookShareButton url={articleUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
      <div class="level-item">
        <TwitterShareButton title={articleTitle} url={articleUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </div>
      <div class="level-item">
        <HatenaButton />
      </div>
    </div>
  </nav>
)

ShareButtons.propTypes = {
  articleUrl: PropTypes.string,
  articleTitle: PropTypes.string,
}

export default ShareButtons
