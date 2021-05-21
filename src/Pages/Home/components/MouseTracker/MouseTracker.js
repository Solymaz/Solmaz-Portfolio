import React, { useEffect, useRef } from "react";
import "./mouseTracker.css";

const MouseTracker = () => {
  const eyeRightRef = useRef();
  const eyeLeftRef = useRef();
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      [eyeLeftRef, eyeRightRef].forEach((eyeRef) => {
        const eye = eyeRef.current;
        if (eye) {
          // Get the mouse position on the horizontal axis
          let mouseX = eye.getBoundingClientRect().right;
          // If it's the left eye get the left offset
          if (eye.classList.contains("eye-left")) {
            mouseX = eye.getBoundingClientRect().left;
          }
          //Get the mouse position on the vertical axis
          const mouseY = eye.getBoundingClientRect().top;
          //calculate the radian value of the offset between the mouse and the eye
          const radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
          //convert it into a degree based value
          const rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
          eye.style.transform = `rotate(${rotationDegrees}deg)`;
        }
      });
    });
    return () => document.removeEventListener("mousemove", document);
  }, []);

  return (
    <div className="mouseTracker">
      <div className="eye eye-left" ref={eyeLeftRef}>
        <div className="eye-inner"></div>
      </div>
      <div className="eye eye-right" ref={eyeRightRef}>
        <div className="eye-inner"></div>
      </div>
    </div>
  );
};

export default MouseTracker;
