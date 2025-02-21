import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import DormSelector from './rpi_dorms_draft';
import DormPictures from './DormPictures';

function App() {
  return (
    <div className="App">
      <DormSelector />
    </div>
  );
  /*
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<DormSelector roomImages={roomImages}/>}/>
          <Route path= "/dorm/:dorm/:roomType" element={<DormPictures roomImages={roomImages}/>}/>
        </Routes>
      </div>
    </Router>
  );
  */
}

export default App;
