import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BudgetPage from './components/BudgetPage';
import AjoutDepense from './components/AjoutDepense';
import AjoutRevenu from './components/AjoutRevenu';
// import NoPage from './NoPage';
const App = () => {
  return (
    <Router>

        <Routes>
          {/* <Route path="/" element={< NoPage/>} /> */}
          <Route path="/" element={< BudgetPage/>} />
          <Route path="/ajoutdepense" element={<AjoutDepense />} />
          <Route path="/ajoutrevenu" element={<AjoutRevenu />} />
        </Routes>
    </Router>
  );
};

export default App;
