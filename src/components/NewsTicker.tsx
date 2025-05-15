import React, { useEffect, useState } from 'react';
import { getLatestHeadlines } from '../services/newsService';

const NewsTicker: React.FC = () => {
  const [headlines, setHeadlines] = useState<string[]>([]);

  useEffect(() => {
    const fetchHeadlines = async () => {
      const latestHeadlines = await getLatestHeadlines();
      setHeadlines(latestHeadlines);
    };
    fetchHeadlines();
  }, []);

  return (
    <div className="bg-lightBlue text-navy p-2 overflow-hidden">
      <div className="news-ticker whitespace-nowrap">
        {headlines.join(' • ')}
      </div>
    </div>
  );
};

export default NewsTicker;