import React from 'react';
import { Link } from 'react-router-dom';

import './ShopHeader.scss';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/#">
        <div className="logo text-dark">Simple Books Store</div>
      </Link>
      <Link to="/card">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </div>
      </Link>
    </header>
  );
};

export default ShopHeader;
