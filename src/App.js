import React, { useState } from 'react';
import { RoughCanvas } from 'roughjs/bin/canvas';
import Toolbar from './components/Toolbar';
import Canvas from './components/Canvas';
import ExportOptions from './components/ExportOptions';
import Collaboration from './components/Collaboration';
import AI from './components/AI';
import OfflineMode from './components/OfflineMode';
import CustomStyling from './components/CustomStyling';
import ExtendedExport from './components/ExtendedExport';
import Documentation from './components/Documentation';

const App = () => {
  const [style, setStyle] = useState('hand-drawn');

  return (
    <div className="App">
      <Toolbar />
      <Canvas style={style} />
      <ExportOptions />
      <Collaboration />
      <AI />
      <OfflineMode />
      <CustomStyling setStyle={setStyle} />
      <ExtendedExport />
      <Documentation />
    </div>
  );
};

export default App;
