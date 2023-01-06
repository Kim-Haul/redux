import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from './pages/Main';
import SubMain from './pages/SubMain';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/submain" element={<SubMain />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
