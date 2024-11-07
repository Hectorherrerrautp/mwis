"use client"; // Asegúrate de incluir esta línea

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useMusic } from "@/context/MusicContext";

// Componente para el mensaje "Stay, te amo" en varios idiomas
const LoveMessage = () => {
  const translations = [
    "Stay, te amo",         // Español
    "Stay, je t'aime",      // Francés
    "Stay, ti amo",         // Italiano
    "Stay, ich liebe dich", // Alemán
    "Stay, 私はあなたを愛しています", // Japonés
    "Stay, 사랑해요",       // Coreano
    "Stay, 我爱你",         // Chino Simplificado
    "Stay, я тебя люблю",   // Ruso
    "Stay, أحبك",           // Árabe
    "Stay, jag älskar dig", // Sueco
  ];

  const [currentTranslation, setCurrentTranslation] = useState(translations[0]);
  const [showTypingEffect, setShowTypingEffect] = useState(true);

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % translations.length;
      setCurrentTranslation(translations[currentIndex]);
      setShowTypingEffect(true); // Activa la animación de escritura

      setTimeout(() => {
        setShowTypingEffect(false); // Desactiva la animación para mantener el texto
      }, 3000); // Dura 3 segundos
    }, 4000); // Cambia cada 4 segundos

    return () => clearInterval(interval); // Limpieza del intervalo
  }, []);

  return (
    <h1 className={`typing-effect ${showTypingEffect ? "typing" : ""}`} id="loveMessage">
      {currentTranslation}
    </h1>
  );
};

// Interfaz para las propiedades del componente BirthdayCounter
interface BirthdayCounterProps {
  date: string;  // Tipo string para la fecha
  label: string; // Tipo string para la etiqueta
}

// Componente para el contador de cumpleaños
const BirthdayCounter: React.FC<BirthdayCounterProps> = ({ date, label }) => {
  const [timeAlive, setTimeAlive] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(date);

    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - targetDate.getTime()) / 1000);

      const days = Math.floor(diff / (24 * 60 * 60));
      const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = diff % 60;

      setTimeAlive({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval); // Limpieza del intervalo
  }, [date]);

  return (
    <div className="counter-container" style={{ textAlign: 'left', marginTop: '20px' }}>
      <h2 className="llevas">{label}</h2>
      <div className="counter">
        <span>{timeAlive.days} días </span>
        <span>{timeAlive.hours} horas </span>
        <span>{timeAlive.minutes} minutos </span>
        <span>{timeAlive.seconds} segundos </span>
      </div>
    </div>
  );
};

// Componente para el nuevo contador
const AnotherBirthdayCounter = () => {
  const [timeAlive, setTimeAlive] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const anotherBirthday = new Date("2021-10-26T10:20:00"); // Fecha y hora de nacimiento
    const interval = setInterval(() => {
      const now = new Date();
      const diff = Math.floor((now.getTime() - anotherBirthday.getTime()) / 1000);

      const days = Math.floor(diff / (24 * 60 * 60));
      const hours = Math.floor((diff % (24 * 60 * 60)) / (60 * 60));
      const minutes = Math.floor((diff % (60 * 60)) / 60);
      const seconds = diff % 60;

      setTimeAlive({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container" style={{ textAlign: 'left', marginTop: '20px' }}>
      <h2 className="llevas">Alegría a mi mundo</h2>
      <div className="counter">
        <span>{timeAlive.days} días </span>
        <span>{timeAlive.hours} horas </span>
        <span>{timeAlive.minutes} minutos </span>
        <span>{timeAlive.seconds} segundos </span>
      </div>
    </div>
  );
};

export default function Home() {
  const { playMusic, pauseMusic, nextTrack, prevTrack } = useMusic();

  useEffect(() => {
    playMusic();
  }, []);

  return (
    <div className="page-container">
      <div className="full-screen-background"></div>
      
      <div className="content">
        <Image 
          src="/Untitled-1-Recovered.png" 
          alt="Descripción de la imagen" 
          width={600}  
          height={400} 
          className="content-image"
        />
        <div className="vintage-music-controls">
          <button onClick={prevTrack} className="vintage-button">◁==</button>
          <button onClick={playMusic} className="vintage-button">▷</button>
          <button onClick={pauseMusic} className="vintage-button">||</button>
          <button onClick={nextTrack} className="vintage-button">==▷</button>
        </div>
        <Link href="/flores">
          <Image 
            src="/tulipanes.png" 
            alt="Imagen a Flores"
            width={200} 
            height={200} 
            className="flores tulipanes-bounce" 
          />
        </Link>
        <div className="counters-container">
          <BirthdayCounter 
            date="2002-12-18T18:00:00" 
            label="Alegría al mundo" 
          />
          <AnotherBirthdayCounter />
        </div>
        <Link href="/gallery">
            <Image
              src="/logotv.png"
              alt="Ir a otra página"
              width={500}  // Ajusta el tamaño según sea necesario
              height={150} // Ajusta el tamaño según sea necesario
              className="tv flicker-animation glitch-animation"
            />
        </Link>
        <Link href="/box">
            <Image
              src="/cajita.png"
              alt="Ir a otra página"
              width={400}  // Ajusta el tamaño según sea necesario
              height={150} // Ajusta el tamaño según sea necesario
              className="box shake-animation"
            />
        </Link>
        <h1 className="cita">"Esta pagina fue desarrollada para la mejor novia del mundo"</h1>
        <LoveMessage />
      </div>
    </div>
  );
}

