import React, { Component } from 'react'

class Sidebar extends Component {
  state = {
    container: {},
    items: []
  };
  render() {
    return (
      <div>
        Container options:
        <ul>
          <li>display -> display inline</li>
          <li>align-items</li>
          <li>justify-content</li>
          <li>flow</li>
          <li>flex</li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;