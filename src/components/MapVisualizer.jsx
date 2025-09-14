// import React, { useState, useEffect, useMemo } from 'react';
// import LeafletMap from './LeafletMap';
// import StatisticsPanel from './StatisticsPanel';
// import RecentEarthquakesList from './RecentEarthquakesList';
// import LoadingSpinner from './LoadingSpinner';
// import ErrorDisplay from './ErrorDisplay';

// const USGS_API_URL = import.meta.env.VITE_USGS_API_URL || 
//   'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

// const MapVisualizer = () => {
//   const [earthquakes, setEarthquakes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch earthquake data from USGS API
//   useEffect(() => {
//     const fetchEarthquakeData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
        
//         const response = await fetch(USGS_API_URL);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
        
//         const data = await response.json();
//         const earthquakeFeatures = data.features || [];
        
//         setEarthquakes(earthquakeFeatures);
//       } catch (err) {
//         console.error('Error fetching earthquake data:', err);
//         setError('Failed to load earthquake data. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEarthquakeData();
    
//     // Refresh data every 10 minutes
//     const refreshInterval = parseInt(import.meta.env.VITE_DATA_REFRESH_INTERVAL) || 600000;
//     const interval = setInterval(fetchEarthquakeData, refreshInterval);
    
//     return () => clearInterval(interval);
//   }, []);

//   // Calculate statistics
//   const stats = useMemo(() => {
//     const micro = earthquakes.filter(eq => eq.properties.mag < 3.0).length;
//     const minor = earthquakes.filter(eq => eq.properties.mag >= 3.0 && eq.properties.mag < 4.0).length;
//     const light = earthquakes.filter(eq => eq.properties.mag >= 4.0 && eq.properties.mag < 5.0).length;
//     const moderate = earthquakes.filter(eq => eq.properties.mag >= 5.0 && eq.properties.mag < 6.0).length;
//     const major = earthquakes.filter(eq => eq.properties.mag >= 6.0).length;
    
//     return { micro, minor, light, moderate, major };
//   }, [earthquakes]);

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   if (error) {
//     return <ErrorDisplay error={error} onRetry={() => window.location.reload()} />;
//   }

//   return (
//     <div className="w-full space-y-4">
//       {/* Info Panel */}
//       <div className="bg-white p-4 rounded-lg shadow-md">
//         <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//           <div>
//             <h2 className="text-lg font-semibold text-gray-800">
//               Earthquakes in the Last 24 Hours
//             </h2>
//             <p className="text-gray-600">
//               Showing {earthquakes.length} earthquakes
//             </p>
//           </div>
          
//           {/* Horizontal Legend */}
//           <div className="flex flex-wrap gap-4 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm"></div>
//               <span className="text-gray-700">&lt;3.0</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-sm"></div>
//               <span className="text-gray-700">3.0-3.9</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-white shadow-sm"></div>
//               <span className="text-gray-700">4.0-4.9</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-white shadow-sm"></div>
//               <span className="text-gray-700">5.0-5.9</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-white shadow-sm"></div>
//               <span className="text-gray-700">6.0+</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Map Container */}
//       <div className="bg-white rounded-lg shadow-md overflow-hidden">
//         <LeafletMap earthquakes={earthquakes} />
//       </div>
      
//       {/* Statistics Panel */}
//       <StatisticsPanel stats={stats} />

//       {/* Recent Earthquakes List */}
//       <RecentEarthquakesList earthquakes={earthquakes} />
//     </div>
//   );
// };

// export default MapVisualizer;

import React, { useState, useEffect, useMemo } from 'react';
import LeafletMap from './LeafletMap';
import StatisticsPanel from './StatisticsPanel';
import RecentEarthquakesList from './RecentEarthquakesList';
import LoadingSpinner from './LoadingSpinner';
import ErrorDisplay from './ErrorDisplay';

const USGS_API_URL =
  import.meta.env.VITE_USGS_API_URL ||
  'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';

const MapVisualizer = () => {
  const [earthquakes, setEarthquakes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch earthquake data from USGS API
  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(USGS_API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const earthquakeFeatures = data.features || [];

        setEarthquakes(earthquakeFeatures);
      } catch (err) {
        console.error('Error fetching earthquake data:', err);
        setError('Failed to load earthquake data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchEarthquakeData();

    // Refresh data every 10 minutes
    const refreshInterval =
      parseInt(import.meta.env.VITE_DATA_REFRESH_INTERVAL) || 600000;
    const interval = setInterval(fetchEarthquakeData, refreshInterval);

    return () => clearInterval(interval);
  }, []);

  // Calculate statistics
  const stats = useMemo(() => {
    const micro = earthquakes.filter((eq) => eq.properties.mag < 3.0).length;
    const minor = earthquakes.filter(
      (eq) => eq.properties.mag >= 3.0 && eq.properties.mag < 4.0
    ).length;
    const light = earthquakes.filter(
      (eq) => eq.properties.mag >= 4.0 && eq.properties.mag < 5.0
    ).length;
    const moderate = earthquakes.filter(
      (eq) => eq.properties.mag >= 5.0 && eq.properties.mag < 6.0
    ).length;
    const major = earthquakes.filter((eq) => eq.properties.mag >= 6.0).length;

    return { micro, minor, light, moderate, major };
  }, [earthquakes]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorDisplay error={error} onRetry={() => window.location.reload()} />;
  }

  return (
    <div className="w-full space-y-4 bg-gray-900 min-h-screen text-gray-100 p-4">
      {/* Info Panel */}
      <div className="bg-gray-800 p-4 rounded-lg shadow-md">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-gray-100">
              Earthquakes in the Last 24 Hours
            </h2>
            <p className="text-gray-400">
              Showing {earthquakes.length} earthquakes
            </p>
          </div>

          {/* Horizontal Legend */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-500 border-2 border-gray-900 shadow-sm"></div>
              <span className="text-gray-300">&lt;3.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-gray-900 shadow-sm"></div>
              <span className="text-gray-300">3.0-3.9</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-yellow-500 border-2 border-gray-900 shadow-sm"></div>
              <span className="text-gray-300">4.0-4.9</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-500 border-2 border-gray-900 shadow-sm"></div>
              <span className="text-gray-300">5.0-5.9</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-red-600 border-2 border-gray-900 shadow-sm"></div>
              <span className="text-gray-300">6.0+</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <LeafletMap earthquakes={earthquakes} />
      </div>

      {/* Statistics Panel */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4">
        <StatisticsPanel stats={stats} />
      </div>

      {/* Recent Earthquakes List */}
      <div className="bg-gray-800 rounded-lg shadow-md p-4">
        <RecentEarthquakesList earthquakes={earthquakes} />
      </div>
    </div>
  );
};

export default MapVisualizer;
