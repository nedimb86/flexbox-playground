import React from 'react'
import Helmet from 'react-helmet'
import MainWrapper from '../components/MainWrapper'

import './index.scss'

const TemplateWrapper = () => (
  <div>
    <Helmet
      title="Flexbox playground"
      meta={[
        { name: 'description', content: 'Flexbox playground' },
        { name: 'keywords', content: 'flexbox, playground, flex' },
      ]}
    />
    <MainWrapper/>
  </div>
);


export default TemplateWrapper
