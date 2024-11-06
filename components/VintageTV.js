// VintageTV.js 
"use client"; // Esto indica que es un componente de cliente

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function VintageTV({ mediaFiles }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
    }, 3000); // Cambia de archivo cada 3 segundos

    return () => clearInterval(interval);
  }, [mediaFiles.length]);

  const currentFile = mediaFiles[currentIndex];
  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(currentFile); // Imágenes
  const isVideo = /\.(mp4|mov)$/i.test(currentFile); // Videos

  return (
    <div className="vintage-tv-container">
      <div className="vintage-tv-frame">
        <div className="vintage-tv-screen">
          {isImage ? (
            <Image
              src={currentFile}
              alt="Imagen en pantalla vintage"
              width={500}
              height={300}
              className="vintage-tv-image"
            />
          ) : isVideo ? (
            <video
              src={currentFile}
              autoPlay
              muted
              className="vintage-tv-image"
              width="500"
              height="300"
              onEnded={() => setCurrentIndex((currentIndex + 1) % mediaFiles.length)}
            />
          ) : null}
          <div className="vintage-tv-overlay"></div>
        </div>
      </div>
    </div>
  );
}
