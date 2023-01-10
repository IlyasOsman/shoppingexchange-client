import React from 'react';

const Helmet = ({ title, props }) => {
  document.title = `shoppingExchange -${title}`;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
