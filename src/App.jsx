import "./App.css";
import AboutComponent from "./components/AboutComponent/AboutComponent.jsx";
import LandingComponent from "./components/LandingComponent/LandingComponent.jsx";
import AllProjectsComponent from "./components/AllProjectsComponent/AllProjectsComponent.jsx";
import PlayComponent from "./components/PlayComponent/PlayComponent.jsx";

function App() {
  return (
    <>
      <LandingComponent />
      <AboutComponent />
      <AllProjectsComponent />
      <PlayComponent />
    </>
  );
}

export default App;
