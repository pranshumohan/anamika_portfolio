import React, { useEffect, useRef } from 'react';

export const Lightbox = ({ isOpen, type, src, caption, onClose }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen && type === 'video' && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = '';
    }
  }, [isOpen, type, src]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target.id === 'lb' || e.target.id === 'lb-close') {
      onClose();
    }
  };

  return (
    <div id="lb" className="on" onClick={handleBackdropClick}>
      <div id="lb-inner">
        <button id="lb-close" onClick={onClose}>✕</button>
        {type === 'image' && (
          <img
            id="lb-img"
            src={src}
            alt={caption || ""}
            style={{ display: 'block' }}
          />
        )}
        {type === 'video' && (
          <video
            ref={videoRef}
            id="lb-vid"
            src={src}
            controls
            playsInline
            style={{ display: 'block' }}
          />
        )}
        <span id="lb-cap">{caption || ""}</span>
      </div>
    </div>
  );
};
