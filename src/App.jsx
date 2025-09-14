// // import React from 'react';
// // import MapVisualizer from './components/MapVisualizer';
// // import './utils/leafletIcons'; // Import to fix icon issue

// // function App() {
// //   return (
// //     <div className="min-h-screen bg-gray-100">
// //       {/* <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
// //         <div className="container mx-auto">
// //           <h1 className="text-2xl md:text-3xl font-bold">
// //             🌍 Earthquake Visualizer
// //           </h1>
// //           <p className="text-blue-100 mt-1 text-sm md:text-base">
// //             Real-time earthquake data from USGS
// //           </p>
// //         </div>
// //       </header>
      
// //       <main className="container mx-auto px-4 py-6">
// //         <MapVisualizer />
// //       </main> */}
// //       <MapVisualizer/>
// //     </div>
// //   );
// // }

// // export default App;

// import React from 'react';
// import MapVisualizer from './components/MapVisualizer';
// import ErrorBoundary from './components/ErrorBoundary';

// function App() {
//   return (
//     <ErrorBoundary>
//       <div className="min-h-screen bg-gray-100">
//         <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
//           <div className="container mx-auto">
//             <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
//               🌍 Earthquake Visualizer
//             </h1>
//             <p className="text-blue-100 mt-1 text-sm md:text-base">
//               Real-time earthquake data from USGS
//             </p>
//           </div>
//         </header>
        
//         <main className="container mx-auto px-4 py-6">
//           <MapVisualizer />
//         </main>
        
//         <footer className="bg-gray-800 text-gray-300 py-4 px-6 mt-12">
//           <div className="container mx-auto text-center text-sm">
//             <p>
//               Data provided by{' '}
//               <a 
//                 href="https://earthquake.usgs.gov/" 
//                 target="_blank" 
//                 rel="noopener noreferrer"
//                 className="text-blue-400 hover:underline"
//               >
//                 United States Geological Survey (USGS)
//               </a>
//             </p>
//             <p className="mt-1 text-gray-400">
//               Built with React, Leaflet, and Tailwind CSS
//             </p>
//           </div>
//         </footer>
//       </div>
//     </ErrorBoundary>
//   );
// }

// export default App;


import React from 'react';
import MapVisualizer from './components/MapVisualizer';
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
        
        {/* Header */}
        <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-5 px-6 shadow-lg">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-wide flex items-center gap-2">
                🌍 Earthquake Visualizer
              </h1>
              <p className="text-blue-200 mt-1 text-sm md:text-base">
                Real-time earthquake data from USGS
              </p>
            </div>
            <div className="mt-3 md:mt-0">
          
            </div>
          </div>
        </header>
        
        {/* Main */}
        <main className="container mx-auto px-4 py-8 flex-1">
          <MapVisualizer />
        </main>
        
        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 py-5 px-6">
          <div className="container mx-auto text-center text-sm">
            <p className="text-gray-300">
              Data provided by{' '}
              <a 
                href="https://earthquake.usgs.gov/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition"
              >
                United States Geological Survey (USGS)
              </a>
            </p>
            {/* <p className="mt-1 text-gray-500">
              Built with ❤️ using <span className="text-indigo-400">React</span>,{' '}
              <span className="text-green-400">Leaflet</span>, and{' '}
              <span className="text-pink-400">Tailwind CSS</span>.
            </p> */}
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;
