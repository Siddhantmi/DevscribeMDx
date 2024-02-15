import React, { useEffect, useRef, useState } from 'react';

const UtterancesComments: React.FC = () => {
  const utterancesRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUtterancesScript = () => {
      if (!utterancesRef.current) return;

      const scriptElem = document.createElement('script');
      scriptElem.src = 'https://utteranc.es/client.js';
      scriptElem.async = true;
      scriptElem.setAttribute('repo', 'Siddhantmi/DevscribeMDx');
      scriptElem.setAttribute('issue-term', 'pathname');
      scriptElem.setAttribute('theme', 'github-light');
      utterancesRef.current.appendChild(scriptElem);

      // Hide the loader once the script is loaded
      scriptElem.onload = () => {
        setLoading(false);
      };
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loadUtterancesScript();
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (utterancesRef.current) {
      observer.observe(utterancesRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {loading && (
        <div className="text-center p-4">
          Loading comments...
        </div>
      )}
      <div ref={utterancesRef} />
    </div>
  );
};

export default UtterancesComments;
