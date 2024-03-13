import "./AllProjectsComponent.css";
import ThumbnailComponent from "../ThumbnailComponent/ThumbnailComponent";

function AllProjectsComponent() {
  return (
    <>
      <div className="projects">
        <h1 className="title">Projects</h1>
        <ThumbnailComponent />
      </div>
    </>
  );
}

export default AllProjectsComponent;
