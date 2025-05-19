import RoutsPage from "./routs/routs"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer autoClose={3000} />
      <RoutsPage />

    </>

  )
}

export default App
