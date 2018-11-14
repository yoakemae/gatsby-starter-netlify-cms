import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Home | カメテック"
      meta={
        [
          { name: 'google-site-verification', content: "Rx80f9otmxoMRtPYovUaLNLCxJOljf67VUUKrPUPdog" },
        ]} />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
