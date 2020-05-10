import React from "react";

import "./Intro.css";

const Intro = () => {
  return (
    <div>
      <h2>A little about me.</h2>
      <div className="grid-container">
        <div className="grid-intro">
          <div className="grid-item"></div>
          <p className="grid-item">
            Je suis patient, ouvert d'esprit et curieux. Je sais me remettre en
            question.
          </p>
          <p className="grid-item">
            J'aime créer, construire. Ainsi mes premiers choix m'ont mené à une
            vie d'artiste. Avec l'âge envie de changement, blabla bla
          </p>
          <p className="grid-item">
            I have so much to say about myself I do it twice and thrice and sing
            it to the world, YEAH I am that good; I love ME huuuum hummm. I can
            go on and on to the beat of some ... OK I'M BORED NOW ... blabla bla
          </p>
        </div>
      </div>
      <p className="signature">Jonathan Littardi</p>
    </div>
  );
};

export default Intro;
