// Utility functions for earthquake data processing

export const getMarkerColor = (magnitude) => {
  const mag = parseFloat(magnitude) || 0;
  if (mag >= 6.0) return '#dc2626'; // Red for major earthquakes
  if (mag >= 5.0) return '#ea580c'; // Orange for moderate earthquakes
  if (mag >= 4.0) return '#ca8a04'; // Yellow for light earthquakes
  if (mag >= 3.0) return '#16a34a'; // Green for minor earthquakes
  return '#2563eb'; // Blue for micro earthquakes
};

export const getMarkerSize = (magnitude) => {
  const mag = parseFloat(magnitude) || 0;
  if (mag >= 6.0) return 12;
  if (mag >= 5.0) return 10;
  if (mag >= 4.0) return 8;
  if (mag >= 3.0) return 6;
  return 4;
};

export const formatEarthquakeData = (properties, geometry) => {
  const magnitude = properties.mag || 'Unknown';
  const location = properties.place || 'Unknown location';
  const time = new Date(properties.time).toLocaleString();
  const depth = geometry.coordinates[2] || 'Unknown';
  
  return { magnitude, location, time, depth };
};

export const getMagnitudeCategory = (magnitude) => {
  const mag = parseFloat(magnitude) || 0;
  if (mag >= 6.0) return 'major';
  if (mag >= 5.0) return 'moderate';
  if (mag >= 4.0) return 'light';
  if (mag >= 3.0) return 'minor';
  return 'micro';
};

export const getMagnitudeCategoryLabel = (magnitude) => {
  const category = getMagnitudeCategory(magnitude);
  const labels = {
    micro: 'Micro',
    minor: 'Minor', 
    light: 'Light',
    moderate: 'Moderate',
    major: 'Major'
  };
  return labels[category];
};