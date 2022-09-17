import "./App.scss";
import DarkLightThemeButton from "../DarkLightThemeButton";
import About from "../About";
import Sidebar from "../Sidebar";

function App() {
  return (
    <>
      <DarkLightThemeButton />
      <div className="layout">
        <About />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
