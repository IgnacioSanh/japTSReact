import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from "./Components/Common/Navbar"
import Routing from './Components/Common/Routing'

function App() {
  return (
      <>
        <NavigationBar />
        <ToastContainer 
          autoClose={3000} closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover/>
        <div className="container mt-3">
            <Routing/>
        </div>
      </>
  );
}

export default App;
