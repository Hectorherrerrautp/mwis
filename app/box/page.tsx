// pages/clownPage.js
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ClownPage = () => {
  const [sound, setSound] = useState<HTMLAudioElement | null>(null); // Especificamos el tipo correctamente
  const router = useRouter(); // Para redirigir al inicio

  useEffect(() => {
    // Crear el objeto de sonido y reproducirlo
    const audio = new Audio("/notlikeus.mp3");
    setSound(audio); // Establecemos el objeto de audio en el estado
    audio.play();

    return () => {
      // Limpiar el efecto, deteniendo el sonido al desmontar el componente
      if (audio) {
        audio.pause();
        audio.currentTime = 0; // Reiniciar el tiempo del sonido
      }
    };
  }, []);

  const handleBackToHome = () => {
    if (sound) {
      sound.pause(); // Detener la música
      sound.currentTime = 0; // Reiniciar el sonido
    }
    router.push("/"); // Redirigir al inicio (página principal)
  };

  return (
    <div className="clownPageWrapper">
      <h1 className="title">¡Sorpresa!</h1>
      <div className="contentWrapper">
        <div className="imageContainer">
          <Image
            src="/clown.jpg" // Asegúrate de tener la imagen en la carpeta 'public'
            alt="Payaso"
            layout="intrinsic"
            width={500}
            height={500}
          />
        </div>
        <button onClick={handleBackToHome} className="backButton">
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
};

export default ClownPage;
