import "./ThumbnailComponent.css";

function ThumbnailComponent() {
  return (
    <>
      <div className="row">
        <div className="project-title-bar">
          <div className="icon-circle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div className="projectImage"></div>
      </div>
    </>
  );
}

export default ThumbnailComponent;
