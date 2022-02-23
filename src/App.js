import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppContainer from "./containers/AppContainer/AppContainer";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppContainer />}></Route>
        <Route path="/poll/1" element={<div>poll 1</div>}></Route>
        <Route path="/poll/2" element={<div>poll 1</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;