import React from "react";

import "./Intro.css";

const Intro = () => {
  return (
    <div className="page intro-page">
      <h2>A LITTLE ABOUT ME</h2>
      <div className="grid-container">
        <div className="grid-intro">
          <div className="grid-item">
            <h3>Personality</h3>
          </div>
          <p className="grid-item">
            Je suis patient, ouvert d'esprit et curieux. Je sais me remettre en
            question.
          </p>
          <div className="grid-item">
            <h3>So Far ...</h3>
          </div>
          <p className="grid-item">
            J'aime créer, construire. Ainsi mes premiers choix m'ont mené à une
            vie d'artiste. Avec l'âge envie de changement, blabla bla
          </p>
          <div className="grid-item">
            <h3>Hopes and Dreams</h3>
          </div>
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
