import React from 'react';

import './ShoppingCartTable.scss';

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>The Red and the Black</td>
            <td>2</td>
            <td>$12</td>
            <td>
              <button className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash" />
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <i className="fa fa-plus-circle" />
              </button>
              <button className="btn btn-outline-warning btn-sm float-right">
                <i className="fa fa-minus-circle" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="total">Total: $24</div>
    </div>
  );
};

export default ShoppingCartTable;
