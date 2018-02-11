import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Sidebar from '../components/Sidebar/Sidebar'

import './index.scss'

const TemplateWrapper = ( { children } ) => (
  <div>
    <Helmet
      title="Flexbox playground"
      meta={[
        { name: 'description', content: 'Flexbox playground' },
        { name: 'keywords', content: 'flexbox, playground, flex' },
      ]}
    />
    <div>
      <Sidebar/>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper