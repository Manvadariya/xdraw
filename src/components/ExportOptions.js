import React from 'react';

const ExportOptions = () => {
  const exportAsPNG = () => {
    // Implement export as PNG functionality
  };

  const exportAsSVG = () => {
    // Implement export as SVG functionality
  };

  const exportAsLink = () => {
    // Implement export as shareable link functionality
  };

  return (
    <div className="export-options">
      <button onClick={exportAsPNG}>Export as PNG</button>
      <button onClick={exportAsSVG}>Export as SVG</button>
      <button onClick={exportAsLink}>Export as Link</button>
    </div>
  );
};

export default ExportOptions;
