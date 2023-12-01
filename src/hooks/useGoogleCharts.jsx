import { useState, useEffect } from 'react';

function useGoogleCharts() {
  const [google, setGoogle] = useState(null);

  useEffect(() => {
    if (!google) {
      const { head } = document;
      let script = document.getElementById('googleChartsScript');
      if (!script) {
        script = document.createElement('script');
        script.src = 'https://www.gstatic.com/charts/loader.js';
        script.id = 'googleChartsScript';
        script.onload = () => {
          if (window.google && window.google.charts) {
            // Load the required packages for charts
            window.google.charts.load('current', {
              packages: ['corechart', 'controls', 'geochart'],
              mapsApiKey: 'AIzaSyAJ2R9lMEkrjifWuQtIZYbe6I37pcbtOCg',
            });
            window.google.charts.setOnLoadCallback(() => setGoogle(window.google));
          }
        };
        head.appendChild(script);
      } else if (window.google && window.google.charts && window.google.visualization) {
        setGoogle(window.google);
      }
    }
    // Removing the script in unmounting phase
    return () => {
      const script = document.getElementById('googleChartsScript');
      if (script) {
        script.remove();
      }
    };
  }, [google]);
  return { google };
}

export default useGoogleCharts;
