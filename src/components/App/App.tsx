import "./App.scss";
import DarkLightThemeButton from "../DarkLightThemeButton/DarkLightThemeButton";
import About from "../About/About";
import Sidebar from "../Sidebar/Sidebar";

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
