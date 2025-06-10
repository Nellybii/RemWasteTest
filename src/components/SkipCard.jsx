// SkipCard.js
import React from 'react';

const SkipCard = ({ skip, selectedId, onSelect }) => {
  const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
  const donation = (Math.random() * 15 + 10).toFixed(2);

  return (
    <div
      className="container flex items-center bg-gray-300 shadow-lg rounded-2xl p-5 gap-4 border border-slate-100 hover:shadow-xl transition-shadow sm:px-6 lg:px-8 py-6 justify-center"
    >
      <div className="w-60 h-40 rounded-xl flex items-center justify-center">
        <img
          src="/skip-default.png"
          alt="Skip"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="flex-1 text-slate-700 h-50 items-center">
        <h3 className="text-lg font-semibold text-emerald-700">Size {skip.size} Skip</h3>
        <p className="text-sm">Hire: {skip.hire_period_days} days</p>
        <p className="text-sm">
          Road Suitable: <span className="font-medium">{skip.allowed_on_road ? 'Yes' : 'No'}</span>
        </p>
        <p className="text-sm">
          Heavy Waste: <span className="font-medium">{skip.allows_heavy_waste ? 'Yes' : 'No'}</span>
        </p>
        <p className="mt-1 text-base font-bold text-slate-900">£{totalPrice.toFixed(2)}</p>
      </div>

      <div className="text-right">
        <p className="text-sm text-blue-600 font-medium mb-2">Donation £{donation}</p>
        <button
          onClick={() => onSelect(skip.id)}
          className={`px-5 py-2 rounded-lg text-white font-medium shadow-md transition-all ${
            selectedId === skip.id ? 'bg-slate-600' : 'bg-orange-500 hover:bg-orange-600'
          }`}
        >
          {selectedId === skip.id ? 'Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
