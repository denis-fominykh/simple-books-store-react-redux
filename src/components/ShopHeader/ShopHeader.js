import React from 'react';

import './ShopHeader.scss';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="/#">
        Simple Books Store
      </a>
      <a className="shopping-cart" href="/#">
        <i className="cart-icon fa fa-shopping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  );
};

export default ShopHeader;
