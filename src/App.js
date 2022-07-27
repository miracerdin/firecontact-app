import "./App.css";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
