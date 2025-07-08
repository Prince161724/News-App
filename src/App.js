import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import News from './Components/News';
import ProgressBar from './Components/ProgressBar';
const App = () => {
  const [progressshowing, setProgressshowing] = useState(true);
  const [category, setCategory] = useState({ category: "general", headline: "All" });
  const [progress, setProgress] = useState(0);
  document.title = `${category.headline}-News`;
  return (
    <BrowserRouter>
      {progressshowing && <ProgressBar progress={progress} />}
      <Navbar setCategory={setCategory} setProgress={setProgress} />
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <News
                category="general"
                Headline="All"
                key="home"
                progress={progress}
                setProgress={setProgress}
                setProgressshowing={setProgressshowing}
              />
            }
          />
          <Route path="/:category" element={
            <News category={category.category} Headline={category.headline} key={category.headline} progress={progress} setProgress={setProgress} setProgressshowing={setProgressshowing} />} />
        </Routes>
      </div>
    </BrowserRouter>
  )

}
export default App;

