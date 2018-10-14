import React from 'react'
import Helmet from 'react-helmet'

const HatenaButton = () => (
  <>
    <Helmet>
      <script type="text/javascript" src="//b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async" />
    </Helmet>
    <a
      href="http://b.hatena.ne.jp/entry/"
      className="hatena-bookmark-button"
      data-hatena-bookmark-layout="vertical-normal"
      data-hatena-bookmark-lang="ja"
      title="このエントリーをはてなブックマークに追加"
      >
      <img
        src="//b.st-hatena.com/images/entry-button/button-only@2x.png"
        alt="このエントリーをはてなブックマークに追加"
        width="20"
        height="20"
        style={{border: 'none'}}
      />
    </a>
  </>
)

export default HatenaButton
