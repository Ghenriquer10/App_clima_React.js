import Home from "./pages/Home";
import GlobalStyle from "./styles/global";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <GlobalStyle/>
      <Home/>
      <ToastContainer autoClose={4000}/>
    </>
  );
}

export default App;
