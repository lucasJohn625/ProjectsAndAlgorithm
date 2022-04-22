import React from 'react';
import { Routes,BrowserRouter,Route } from "react-router-dom";
import DisplayAll from './components/DisplayAll';
// import ReadReviews from './components/ReadReview';
import AddGame from './components/AddGame';
// import NewReview from './components/NewReview';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<DisplayAll/>} path="/" index />
          {/* <Route element={<ReadReviews/>} path="/:id/reviews"  /> */}
          <Route element={<AddGame/>} path="/addgame"  />
          {/* <Route element={<NewReview/>} path="/:id/addreview"  /> */}
          <Route element={<Profile/>} path="/profile"  />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
