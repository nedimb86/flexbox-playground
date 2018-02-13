import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

const Preview = ( { parentProperties, flexItems, onItemClick, width, height } ) => {
  return (
    <div className="preview">
      <div style={parentProperties} className="flex-container">
        {flexItems.map( item => <div
          key={`item-${item.id}`}
          className="flex-item"
          style={{ ...item.style, width, height }}
          onClick={() => onItemClick( item.id - 1 )}
        /> )}
      </div>
    </div>
  )
};

Preview.propTypes = {
  parentProperties: PropTypes.shape( {
    display: PropTypes.string,
    flexDirection: PropTypes.string,
    flexWrap: PropTypes.string,
    justifyContent: PropTypes.string,
    alignItems: PropTypes.string,
    alignContent: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string
  } ),
  flexItems: PropTypes.arrayOf( PropTypes.shape( {
    id: PropTypes.number
  } ) ),
  onItemClick: PropTypes.func,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Preview