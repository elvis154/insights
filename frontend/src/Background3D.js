import React, { useEffect, useRef } from "react";
import './Background3D.scss';

const Background3D = () => {
  const vrRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const vr = vrRef.current;

      // Rotation based on mouse movement
      if (vr) {
        const rotateX = (clientY / window.innerHeight) * 40 - 20; // X-axis rotation
        const rotateY = (clientX / window.innerWidth) * 40 - 20; // Y-axis rotation

        vr.style.transform = `translate(-50%, -50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }
    };

    // Add event listener for mouse movement
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="container">
      {/* Create 400 triggers */}
      {[...Array(400)].map((_, i) => (
        <div key={i} className="trigger"></div>
      ))}

      <div className="monitor">
        <div className="camera o-x">
          <div className="camera o-y">
            <div className="camera o-z">
              <div ref={vrRef} className="vr">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="vr_layer">
                    <div className="vr_layer_item"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background3D;
