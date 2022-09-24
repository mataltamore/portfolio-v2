import "./App.scss";
import About from "../About";
import Sidebar from "../Sidebar";

function App() {
  return (
    <>
      <div className="layout">
        <About />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
