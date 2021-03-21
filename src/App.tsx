import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from "./Components/Common/Navbar"
import Routing from './Components/Common/Routing'

function App() {
  return (
      <>
        <Navbar />
        <div className="container mt-3">
            <Routing />
        </div>
      </>
  );
}

export default App;
