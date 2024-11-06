// pages/LetterPage.js
import React from "react";

const LetterPage = () => {
  const letterContent = "Primero para empezar, no se si hoy sea tu cumpleaños o no(se que no lo es porque no me aguantaba, se me acaba de ocurrir), sabes como soy y bueno,me encanta ser como soy porque tu me amas asi, este se supone que es uno de tus regalos de cumpleaños, algo que pense en hacer desde hace mucho tiempo y el cual me ha encantado hacer. Me siento completamente enamorado de ti y gracias por haber estado todo este tiempo conmigo, celebro tu vida porque me encantaria compartir contigo lo que nos queda de ella, siempre soñe con tener una novia como tu y gracias por aparecer en mi vida, talvez la carta que estoy escribiendo no es lo mas impactante o con aura que queria, seguramente es porque son las 2 y media de la noche y se que tu estarias molesta conmigo porque tu estas durmiendo, bueno shsjshjshs, eso no importa, lo que queria expresar en esta carta es que primero gracias por ser parte de mi vida, segundo que en verdad no tengo palabras para expresar lo que siento por ti, me encanta todo de ti y en verdad me siento muy afortunado por tenerte, tercero que espero que te hayan gustado las canciones que agregue en la pagina(las estoy agregando a las 2 y media de la noche, entiendeme), son canciones que me recuerdan a ti, cuarto,me gusta tu tonton, quinto me gusta tu pussy, sexto me gusta tener sexo contigo, septimo, espero que siempre seas lo que siempre quiero en mi vida, quiero que siempre seas parte de mi vida y espero cumplir todas las expectativas y deseos que tienes sobre mi , siempre tratar de ser el mejor novio porque adivina, tu, TU, tU, Si, i, sI tu , eres la mejor novia que un tonto que quiere todo en la vida puede tener, con amor, el amor de tu vida, aka, hector, te amo, ahora quiero que me mires me guiñes un ojo y que despues me des un abrazo como ningun otro.";

  return (
    <div className="letter-wrapper">
      <h1 className="letter-title">Para: Stay</h1>
      <h1 className="letter-title">De: AKA</h1>
      <div className="letter-content">
        {letterContent.split("").map((char, index) => (
          <span key={index} className="letter">{char}</span>
        ))}
      </div>
    </div>
  );
};

export default LetterPage;
