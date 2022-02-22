import React from "react";
import {BrowserRouter as Router , Routes,Route}from 'react-router-dom'
import HomeScreen from "./page/homescreen";
import Footer from "./components/footer";
import Sign from './components/sign'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen/>}  />
          <Route path="/sign" element={<Sign/>}  />
        </Routes>
      </Router>
      <Footer/>
    </>
  );
}

export default App;
