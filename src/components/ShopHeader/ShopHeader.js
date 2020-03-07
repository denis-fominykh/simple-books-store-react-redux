import React from 'react';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <a className="logo text-dark" href="/#">Simple Books Store</a>
      <a href="/#">
        <i className="cart-icon fa fa-shoping-cart" />
        {numItems} items (${total})
      </a>
    </header>
  )
}

export default ShopHeader;
