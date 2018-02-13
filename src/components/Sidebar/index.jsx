import React, { Component } from 'react'
import { InputField, SelectField } from "../FieldGroup";
import FlexItemInfo from '../FlexItemInfo';

import { itemData, parentData } from "./data";
import './index.scss'

class Sidebar extends Component {
  render() {
    const {
      width, height,
      onChange, flexItemsCount,
      updateItems, selectedItem,
      onItemChange, itemsWidth,
      itemsHeight, onItemsBasicsUpdate
    } = this.props;
    return (
      <div className="sidebar">
        <section>
          <h1>Container info</h1>
          <InputField id="width" label="width" value={width} onChange={onChange}/>
          <InputField id="height" label="height" value={height} onChange={onChange}/>
        </section>
        <section>
          <h1>Parent properties</h1>
          {parentData.map( property => <SelectField {...property} onChange={onChange} key={property.id}/> )}
        </section>
        <section>
          <h1>Items info</h1>
          <InputField id="itemsWidth" label="Width" value={itemsWidth} onChange={onItemsBasicsUpdate}/>
          <InputField id="itemsHeight" label="Height" value={itemsHeight} onChange={onItemsBasicsUpdate}/>
          <FlexItemInfo count={flexItemsCount} updateItems={updateItems}/>
        </section>
        {selectedItem &&
        <section>
          <h1>Item {selectedItem.id} properties</h1>
          {itemData.map( item => <InputField
            key={item.id}
            id={item.id}
            label={item.label}
            value={(selectedItem.style || {})[ item.id ] || ''}
            onChange={( e ) => onItemChange( selectedItem.id - 1, e.target.name, e.target.value )}
          /> )}
          <SelectField
            id="alignSelf"
            label='align-self'
            options={[ '', 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch' ]}
            onChange={( e ) => onItemChange( selectedItem.id - 1, e.target.name, e.target.value )}
          />
        </section>
        }
      </div>
    )
  }
}

export default Sidebar;