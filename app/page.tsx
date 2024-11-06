// pages/index.js
"use client"; // Indica que este es un componente de cliente

import Image from "next/image";
import Link from 'next/link';
import { MusicProvider, useMusic } from "@/context/MusicContext";

const Home = () => {
  const { playMusic } = useMusic(); // Obtén playMusic del contexto

  return (
    <div className="main-container">
      <Link href="/main" onClick={playMusic}> {/* Elimina el <a> aquí */}
        <Image 
          src="/Enterr.jpg" 
          alt="Botón Enter"
          width={494} 
          height={119} 
          className="image-button"  
        />
      </Link>
      <Image 
        src="/Mano2mod.png" 
        alt="Imagen en movimiento"
        width={551}   
        height={415}
        className="moving-image"
      />
      <Image 
        src="/AKALOGO.png"  
        alt="Logo giratorio en 3D"
        width={100}    
        height={100}
        className="rotating-logo"
      />
    </div>
  );
};

// Asegúrate de envolver el componente en el MusicProvider
const App = () => (
  <MusicProvider>
    <Home />
  </MusicProvider>
);

export default App;



