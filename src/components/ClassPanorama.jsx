import React, { useEffect, useRef } from 'react';
import './ClassPanorama.css';

const ClassPanorama = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // 스크롤 속도 조절

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // 이미지들이 두 번 반복되도록 배치했으므로, 첫 번째 세트의 너비만큼 이동하면 리셋
      const firstSetWidth = container.scrollWidth / 2;
      if (scrollPosition >= firstSetWidth) {
        scrollPosition = 0;
      }

      container.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const classImages = [
    '/img/class.png',
    '/img/class2.png',
    '/img/class3.png'
  ];

  // 무한 루프를 위해 이미지를 두 번 반복
  const duplicatedImages = [...classImages, ...classImages];

  return (
    <section id="class-panorama" className="class-panorama-section">
      <div className="panorama-container-wrapper">
        <div className="panorama-container" ref={containerRef}>
          {duplicatedImages.map((image, index) => (
            <div key={index} className="panorama-image-wrapper">
              <img 
                src={image} 
                alt={`Korean Class ${index % classImages.length + 1}`}
                className="panorama-image"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassPanorama;

