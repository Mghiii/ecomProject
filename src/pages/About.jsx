import React from 'react';
import mghimimi from '../assets/images/mghimimi.png';
import yassin from '../assets/images/yassin.png';
import jassir from '../assets/images/jassir.png';
import ali from '../assets/images/ali.png';
import './about.css';

export default function About() {
  return (
    <div className="pst">
      <div className="titre">
        <h1 className="titre1">
          Bienvenue sur notre page <span className="pst2">À propos</span>
        </h1>
        <p className="des1">
          Nous sommes une équipe passionnée et dévouée, composée de
          professionnels travaillant ensemble pour offrir des solutions
          innovantes. Découvrez qui nous sommes et ce qui nous anime !
        </p>
      </div>

      <div className="about">
        <section id="secc" className="mghimimi">
          <img src={mghimimi} id="imgg" alt="" />
          <div className="descr">
            <h1>
              Abderrahim Mghimimi <br />
              <span>Scrum Master</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus tempore, iure est aperiam hic eaque laudantium
              autem facere ut optio delectus iusto, ab qui praesentium aliquid
              quidem veritatis odio.
            </p>
          </div>
        </section>
        <section id="secc" className="yassin">
          <div className="descr">
            <h1>
              Yassine Rachid <br />
              <span>Scrum Master</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus tempore, iure est aperiam hic eaque laudantium
              autem facere ut optio delectus iusto, ab qui praesentium aliquid
              quidem veritatis odio.
            </p>
          </div>
          <img src={yassin} id="imgg" alt="" />
        </section>
        <section id="secc" className="jassir">
          <img src={jassir} id="imgg" alt="" />
          <div className="descr">
            <h1>
              Jassir Matallah <br />
              <span>Scrum Master</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus tempore, iure est aperiam hic eaque laudantium
              autem facere ut optio delectus iusto, ab qui praesentium aliquid
              quidem veritatis odio.
            </p>
          </div>
        </section>
        <section id="secc" className="ali">
          <div className="descr">
            <h1>
              Ali Mouannis <br />
              <span>Scrum Master</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              necessitatibus tempore, iure est aperiam hic eaque laudantium
              autem facere ut optio delectus iusto, ab qui praesentium aliquid
              quidem veritatis odio.
            </p>
          </div>
          <img src={ali} id="imgg" alt="" />
        </section>
      </div>
    </div>
  );
}
