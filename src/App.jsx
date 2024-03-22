import "./App.css";
import AboutComponent from "./components/AboutComponent/AboutComponent.jsx";
import LandingComponent from "./components/LandingComponent/LandingComponent.jsx";
// import AllProjectsComponent from "./components/AllProjectsComponent/AllProjectsComponent.jsx";
// import PlayComponent from "./components/PlayComponent/PlayComponent.jsx";

function App() {
  return (
    <>
      <LandingComponent />
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          top: "0",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <AboutComponent />
          {/* <AllProjectsComponent />
      <PlayComponent /> */}
        </div>
      </div>
    </>
  );
}

export default App;
