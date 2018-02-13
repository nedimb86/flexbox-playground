import React from 'react';
import PropsTypes from 'prop-types';

import './index.scss'

const FlexItemInfo = ( { count, updateItems } ) => {
  return (
    <div className="items-count">
      <button onClick={() => updateItems( -1 )}>-</button>
      {count}
      <button onClick={() => updateItems( 1 )}>+</button>
    </div>
  )
};

FlexItemInfo.propTypes = {
  count: PropsTypes.number,
  updateItems: PropsTypes.func
};

export default FlexItemInfo