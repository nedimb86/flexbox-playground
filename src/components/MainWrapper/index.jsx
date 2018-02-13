import React, { Component } from 'react'
import Sidebar from '../Sidebar'
import Preview from '../Preview'

import './index.scss'

class MainWrapper extends Component {

  state = {
    parentProperties: {
      display: '',
      flexDirection: '',
      flexWrap: '',
      justifyContent: '',
      alignItems: '',
      alignContent: '',
      width: '100%',
      height: '100%'
    },
    itemsCount: 0,
    flexItems: [],
    selectedItem: null,
    itemsWidth: '',
    itemsHeight: ''
  };

  onChange( e ) {
    this.setState( {
      ...this.state,
      parentProperties: {
        ...this.state.parentProperties,
        [ e.target.name ]: e.target.value
      }
    } )
  }

  onUpdateItems( action ) {
    if ( action === -1 && this.state.itemsCount > 0 ) {
      this.setState( {
        ...this.state,
        itemsCount: this.state.itemsCount - 1,
        flexItems: [ ...this.state.flexItems.slice( 0, -1 ) ],
        selectedItem: this.state.selectedItem === this.state.itemsCount ? null : this.state.selectedItem
      } )
    } else if ( action === 1 ) {
      this.setState( {
        ...this.state,
        itemsCount: this.state.itemsCount + 1,
        flexItems: [ ...this.state.flexItems, {
          id: this.state.itemsCount + 1
        } ]
      } )
    }
  }

  onItemClick( item ) {
    this.setState( { selectedItem: item } )
  }

  onItemChange( index, name, value ) {
    this.setState( {
      flexItems: [
        ...this.state.flexItems.slice( 0, index ),
        {
          ...this.state.flexItems[ index ],
          style: {
            ...this.state.flexItems[ index ].style,
            [ name ]: value
          }
        },
        ...this.state.flexItems.slice( index + 1, this.state.flexItems.length )
      ]
    } )
  }

  onItemsBasicsUpdate( e ) {
    this.setState( { [ e.target.name ]: e.target.value } )
  }

  render() {
    const { width, height } = this.state.parentProperties;
    const { itemsCount, flexItems, parentProperties, selectedItem, itemsWidth, itemsHeight } = this.state;
    return (
      <div className="main-wrapper">
        <Sidebar
          updateItems={this.onUpdateItems.bind( this )}
          onChange={this.onChange.bind( this )}
          width={width}
          height={height}
          flexItemsCount={itemsCount}
          selectedItem={flexItems[ selectedItem ]}
          onItemChange={this.onItemChange.bind( this )}
          onItemsBasicsUpdate={this.onItemsBasicsUpdate.bind( this )}
        />
        <Preview
          parentProperties={parentProperties}
          flexItems={flexItems}
          onItemClick={this.onItemClick.bind( this )}
          width={itemsWidth}
          height={itemsHeight}
        />
      </div>
    )
  }
}

export default MainWrapper
