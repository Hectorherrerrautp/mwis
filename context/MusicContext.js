"use client";

import React, { createContext, useContext, useState } from "react";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const audioRef = React.useRef(null);

  const playlist = [
    "/Morad - Lo Que Tiene.mp3",
    "/01 - My World (Intro).mp3",
    "/03 - BLUE MOON (feat. Teddi Jones).mp3",
    "/Rauw Alejandro - Sexo Virtual.mp3",
    "/Rauw Alejandro - Desenfocao'.mp3",
    "/Rauw Alejandro - Aquel Nap ZzZz.mp3",
    "/Rvssian - Santa.mp3",
    "/Rosalía - PROMESA.mp3",
    "/Lady Gaga - Close To You.mp3",
    "/Lil Uzi Vert - Chill Bae.mp3",
    "/The Weeknd - Timeless.mp3",
    "/KnowKnow - I Love You 3000 III-KnowKnow & Higher Brothers.mp3",
    "/13 - VOLVER.mp3",
    "/14 - 220.mp3",
    "/17 - ROCKETPOWERS.mp3",
    "/Pharrell Williams - Airplane Tickets-Pharrell Williams, Swae Lee & Rauw Alejandro.mp3",
    "/Lil Uzi Vert - That Way-Lil Uzi Vert feat. WANMOR.mp3",
    "/04 - Moon & Stars (feat. Maggie Lindemann).mp3",
    "/Barbel - Casaya-Barbel.mp3",
    "/07 - Me Gustas Natural.mp3",
    "/05 - Jazz Fest.mp3",
    "/04 - Lean Wit Me.mp3",
    "/01 - Burn.mp3",
    "/18 - Girl Of My Dreams.mp3",
    "/03 - PIENSO EN TU MIRÁ (Cap.3_ Celos).mp3",
    "/Paris Texas - girls like drugs-Paris Texas.mp3",
    "/05 - Caras Vemos.mp3",
    "/05 - Caras Vemos.mp3",
    "/$Not - MY SHORTY THUGGIN.mp3",
    "/Bktherula - ILOVEUBACK_3-Bktherula.mp3",
    "/04 - MY EYES.mp3",
    "/18 - TELEKINESIS (feat. SZA & Future).mp3",
    "/14 - Nobody Gets Me.mp3",
    "/22 - Good Days.mp3",
    "/02 - True romance.mp3",
    "/Lil Uzi Vert - Red Moon-Lil Uzi Vert.mp3.mp3",
    "/12 - Climb.mp3",
    "/20 - Patience (feat. Don Toliver).mp3",
    "/12 - Come & Go.mp3",
    "/07 - WAIT FOR U (feat. Drake & Tems).mp3",
    "/03 - TQMQA.mp3",
    "/08 - Law Of Attraction.mp3",
    "/02 - T O X I C I T Y.mp3",
    "/05 - Praise The Lord (Da Shine) (feat. Skepta).mp3",
    "/Tokischa - Singamo-Tokischa, Yomel El Meloso & Paulus Music feat. Leo RD.mp3",
    "/SZA - Snooze (Acoustic) (feat. Justin Bieber)-SZA & Justin Bieber.mp3",
    "/Rauw Alejandro - CUKI-Rauw Alejandro.mp3",
    "/Post Malone - Chemical-Post Malone.mp3",
    "/NLE Choppa - SLUT ME OUT (feat. Sexyy Red)-NLE Choppa feat. Sexyy Red.mp3",
    "/Milo j - M.A.I-Milo j.mp3",
    "/Dave - Starlight-Dave.mp3",
    "/Bob Marley & The Wailers - Is This Love-Bob Marley & The Wailers.mp3",
  ];

  const loadTrack = (index) => {
    setCurrentTrackIndex(index);
    if (audioRef.current) {
      audioRef.current.src = playlist[index];
      audioRef.current.load();
    }
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        if (error.name !== "AbortError") { // Ignorar errores por interrupción de carga
          console.error("Error al reproducir la música:", error);
        }
      });
    }
  };

  const pauseMusic = () => {
    if (audioRef.current && isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentTrackIndex + 1) % playlist.length;
    loadTrack(nextIndex);
    setTimeout(() => {
      if (isPlaying) {
        playMusic();
      }
    }, 50); // Retraso para asegurar que el archivo esté cargado antes de reproducir
  };

  const prevTrack = () => {
    const prevIndex = (currentTrackIndex - 1 + playlist.length) % playlist.length;
    loadTrack(prevIndex);
    setTimeout(() => {
      if (isPlaying) {
        playMusic();
      }
    }, 50);
  };

  const handleCanPlayThrough = () => {
    if (isPlaying) {
      playMusic();
    }
  };

  const handleTrackEnd = () => {
    nextTrack(); // Cambia a la siguiente canción al terminar la actual
  };

  return (
    <MusicContext.Provider value={{ playMusic, pauseMusic, nextTrack, prevTrack }}>
      {children}
      <audio 
        ref={audioRef} 
        onCanPlayThrough={handleCanPlayThrough}
        onEnded={handleTrackEnd} // Evento para reproducir la siguiente canción al terminar la actual
        src={playlist[currentTrackIndex]} 
      />
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
