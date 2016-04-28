import React from 'react';
import Item from '../Item/Item.js';


// Data
///////////////////////////

import colors from '../../data/colors.json';
import items from '../../data/items.json';


// Component
///////////////////////////

class Items extends React.Component {
  constructor() {
      super();

      // Duplicate our data set so we can scroll
      // TODO: bind this onScroll instead
      this.keys = Object.keys(items);
  }

  render() {
    let i = 0;

    return (
      <ul className="Items">
        { this.keys.map((key, index) => {
          i = (Object.keys(colors).length % index == 0 && index <= 0) ? 0 : i+1;
          return <Item k={key} item={items[key]} index={index} color={colors[i]} />;
        })}
      </ul>
    );
  }
}


// Export
///////////////////////////

export default Items;
