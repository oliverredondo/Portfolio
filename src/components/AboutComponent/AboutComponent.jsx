import React, { useState } from "react";
import "./AboutComponent.css";

function AboutComponent() {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    if (!expanded) {
      setHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (!expanded) {
      setHovered(false);
    }
  };

  return (
    <>
      <div
        className={`about ${expanded ? "expanded" : ""} ${
          hovered ? "hovered" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="title" onClick={() => setExpanded(!expanded)}>
          About
        </div>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris congue
          quis mauris ac bibendum. Pellentesque quis purus ut augue malesuada
          ornare ac bibendum tortor. Praesent pretium, dolor sed convallis
          suscipit, dui ex blandit arcu, in lacinia lacus mauris eget elit. Duis
          eleifend feugiat enim, auctor rhoncus justo convallis sit amet. Etiam
          dignissim rutrum tellus eget vulputate. Aenean eleifend eu turpis a
          egestas. Etiam a consectetur augue. Vestibulum vitae lacus dolor.
          Donec efficitur magna ac cursus feugiat. Curabitur gravida quam a
          massa pharetra facilisis.
        </p>
      </div>
    </>
  );
}

export default AboutComponent;
