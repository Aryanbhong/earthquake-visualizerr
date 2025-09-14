// import React from 'react';
// import { getMarkerColor } from '../utils/earthquakeUtils';

// const RecentEarthquakesList = ({ earthquakes }) => {
//   const significantEarthquakes = earthquakes
//     .filter(eq => eq.properties.mag >= 4.0)
//     .sort((a, b) => b.properties.mag - a.properties.mag)
//     .slice(0, 10);

//   if (significantEarthquakes.length === 0) {
//     return (
//       <div className="bg-white rounded-lg shadow-md">
//         <div className="p-4 border-b">
//           <h3 className="text-lg font-semibold text-gray-800">Recent Significant Earthquakes</h3>
//         </div>
//         <div className="p-8 text-center text-gray-500">
//           <p>No significant earthquakes (magnitude 4.0+) in the last 24 hours.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md">
//       <div className="p-4 border-b">
//         <h3 className="text-lg font-semibold text-gray-800">Recent Significant Earthquakes</h3>
//         <p className="text-sm text-gray-600 mt-1">
//           Showing {significantEarthquakes.length} earthquakes with magnitude 4.0+
//         </p>
//       </div>
//       <div className="divide-y max-h-96 overflow-y-auto">
//         {significantEarthquakes.map((earthquake, index) => {
//           const { properties } = earthquake;
//           const magnitude = properties.mag || 0;
//           const location = properties.place || 'Unknown location';
//           const time = new Date(properties.time).toLocaleString();
          
//           return (
//             <div key={index} className="p-4 hover:bg-gray-50 transition-colors">
//               <div className="flex items-center justify-between">
//                 <div className="flex-1">
//                   <div className="flex items-center gap-2">
//                     <div 
//                       className="w-4 h-4 rounded-full border-2 border-white shadow-sm flex-shrink-0"
//                       style={{ backgroundColor: getMarkerColor(magnitude) }}
//                     ></div>
//                     <span className="font-semibold text-lg">M {magnitude.toFixed(1)}</span>
//                   </div>
//                   <p className="text-gray-700 mt-1 text-sm md:text-base">{location}</p>
//                   <p className="text-gray-500 text-xs md:text-sm">{time}</p>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default RecentEarthquakesList


import React from 'react';
import { getMarkerColor } from '../utils/earthquakeUtils';

const RecentEarthquakesList = ({ earthquakes }) => {
  const significantEarthquakes = earthquakes
    .filter(eq => eq.properties.mag >= 4.0)
    .sort((a, b) => b.properties.mag - a.properties.mag)
    .slice(0, 10);

  if (significantEarthquakes.length === 0) {
    return (
      <div className="bg-gray-800 rounded-lg shadow-md">
        <div className="p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-gray-100">
            Recent Significant Earthquakes
          </h3>
        </div>
        <div className="p-8 text-center text-gray-400">
          <p>No significant earthquakes (magnitude 4.0+) in the last 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 rounded-lg shadow-md">
      <div className="p-4 border-b border-gray-700">
        <h3 className="text-lg font-semibold text-gray-100">
          Recent Significant Earthquakes
        </h3>
        <p className="text-sm text-gray-400 mt-1">
          Showing {significantEarthquakes.length} earthquakes with magnitude 4.0+
        </p>
      </div>
      <div className="divide-y divide-gray-700 max-h-96 overflow-y-auto">
        {significantEarthquakes.map((earthquake, index) => {
          const { properties } = earthquake;
          const magnitude = properties.mag || 0;
          const location = properties.place || 'Unknown location';
          const time = new Date(properties.time).toLocaleString();

          return (
            <div
              key={index}
              className="p-4 hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-gray-900 shadow-sm flex-shrink-0"
                      style={{ backgroundColor: getMarkerColor(magnitude) }}
                    ></div>
                    <span className="font-semibold text-lg text-gray-100">
                      M {magnitude.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-gray-300 mt-1 text-sm md:text-base">
                    {location}
                  </p>
                  <p className="text-gray-400 text-xs md:text-sm">{time}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentEarthquakesList;
