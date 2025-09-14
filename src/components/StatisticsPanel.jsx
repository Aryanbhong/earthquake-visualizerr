// import React from 'react';

// const StatisticsPanel = ({ stats }) => {
//   return (
//     <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//       <div className="bg-white p-4 rounded-lg shadow-md text-center">
//         <div className="text-2xl font-bold text-blue-600">
//           {stats.micro}
//         </div>
//         <div className="text-sm text-gray-600">Micro (&lt;3.0)</div>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md text-center">
//         <div className="text-2xl font-bold text-green-600">
//           {stats.minor}
//         </div>
//         <div className="text-sm text-gray-600">Minor (3.0-3.9)</div>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md text-center">
//         <div className="text-2xl font-bold text-yellow-600">
//           {stats.light}
//         </div>
//         <div className="text-sm text-gray-600">Light (4.0-4.9)</div>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md text-center">
//         <div className="text-2xl font-bold text-orange-600">
//           {stats.moderate}
//         </div>
//         <div className="text-sm text-gray-600">Moderate (5.0-5.9)</div>
//       </div>
//       <div className="bg-white p-4 rounded-lg shadow-md text-center">
//         <div className="text-2xl font-bold text-red-600">
//           {stats.major}
//         </div>
//         <div className="text-sm text-gray-600">Major (6.0+)</div>
//       </div>
//     </div>
//   );
// };

// export default StatisticsPanel


import React from 'react';

const statsConfig = [
  { key: 'micro', label: 'Micro (<3.0)', color: 'from-blue-500 to-blue-700', text: 'text-blue-400' },
  { key: 'minor', label: 'Minor (3.0-3.9)', color: 'from-green-500 to-green-700', text: 'text-green-400' },
  { key: 'light', label: 'Light (4.0-4.9)', color: 'from-yellow-400 to-yellow-600', text: 'text-yellow-300' },
  { key: 'moderate', label: 'Moderate (5.0-5.9)', color: 'from-orange-500 to-orange-700', text: 'text-orange-400' },
  { key: 'major', label: 'Major (6.0+)', color: 'from-red-600 to-red-800', text: 'text-red-400' },
];

const StatisticsPanel = ({ stats }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
      {statsConfig.map(({ key, label, color, text }) => (
        <div
          key={key}
          className={`bg-gray-800 p-4 rounded-xl shadow-lg text-center border border-gray-700 hover:scale-105 transform transition duration-200`}
        >
          <div
            className={`text-3xl font-extrabold bg-gradient-to-r ${color} bg-clip-text text-transparent`}
          >
            {stats[key]}
          </div>
          <div className={`text-sm mt-2 ${text} font-medium`}>{label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsPanel;
