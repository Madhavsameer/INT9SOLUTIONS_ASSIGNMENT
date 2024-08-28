// components/SellerList.js
import React from 'react';

const SellerList = ({ sellers }) => {
  return (
    <div>
      <h3>Sellers</h3>
      <ul>
        {sellers.map((seller) => (
          <li key={seller._id}>
            <h4>{seller.name}</h4>
            <p>Rating: {seller.rating}</p>
            <p>Review: {seller.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerList;
