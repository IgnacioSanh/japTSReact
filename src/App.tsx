import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./Components/Common/Navbar"
import Routing from './Components/Common/Routing'

function App() {
  return (
      <>
        <NavigationBar />
        <div className="container mt-3">
            <Routing />
        </div>
      </>
  );
}

export default App;
