import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-center">GitHub User Search</h1>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
