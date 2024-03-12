import React from 'react';

const Shops = ({ title, categories }) => {
  return (
    <div className="shops">
      <h3>{title}</h3>
      <div className="categories-list">
        {categories.map((category, index) => (
          <button className='category-item btn' key={index}>
            <img src={category.icon} />
            <span className='title'>{category.span}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
export default Shops;
