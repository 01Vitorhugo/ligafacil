import RoutsPage from "./routs/routs"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  MyProvider } from "./contexApi";

function App() {

  return (
  
      <MyProvider>

        <ToastContainer autoClose={3000} />
        <RoutsPage />

      </MyProvider>
  

  )
}

export default App
