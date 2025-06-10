import React, { useEffect, useState } from 'react';
import SkipCard from '../components/skipcard';

const SkipSelectorPage = () => {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft')
      .then((res) => res.json())
      .then((data) => {
        setSkips(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching skips:', err);
        setLoading(false);
      });
  }, []);

  const handleSelect = (id) => {
    setSelectedId(id);
  };

  if (loading)
    return <div className="text-center py-6 text-gray-600">Loading skips...</div>;

  if (!skips.length)
    return <div className="text-center py-6 text-gray-500">No skips available.</div>;

  return (
    <div className="mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Choose Your Skip Size</h2>

      <div className="space-y-6">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            selectedId={selectedId}
            onSelect={handleSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default SkipSelectorPage;
