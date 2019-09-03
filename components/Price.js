import React from 'react';

const Price = props => {
  const {
    price,
    percent_change_1h,
    percent_change_7d,
    percent_change_24h
  } = props.price;

  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex bg-green-400 text-white rounded p-4 flex flex-col justify-between leading-normal">
      <div className="mb-8">
        <div className="border-b border-green-500 font-bold text-xl mb-2">
          Bitcoin price
        </div>
        <p className="text-base">
          <span className="font-bold">Actual Price:</span> ${price.toFixed(2)}
        </p>
      </div>
      <div className="flex">
        <div className="w-1/3">
          <span className="font-bold">Last hour:</span>{' '}
          {percent_change_1h.toFixed(2)}%
        </div>
        <div className="w-1/3">
          <span className="font-bold">Last 24 hours:</span>{' '}
          {percent_change_24h.toFixed(2)}%
        </div>
        <div className="w-1/3">
          <span className="font-bold">Last seven days:</span>{' '}
          {percent_change_7d.toFixed(2)}%
        </div>
      </div>
    </div>
  );
};

export default Price;
