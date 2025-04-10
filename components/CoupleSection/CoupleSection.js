import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import coupleImg1 from '/public/images/couple/1.jpg';
import shape1 from '/public/images/couple/shadow.png';
import invitation from '/public/images/slider/invitation.jpg';

const CoupleSection = (props) => {
  return (
    <section className={`wpo-couple-section section-padding ${props.cClass}`} id="couple">
      <div className="container">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            {/* Colonne gauche : Texte d'invitation et citations */}
            <div className="col col-xl-4 col-lg-4 col-12">
              <div className="text-grid">
                <h2>Invitation au Mariage Religieux</h2>
                <p>
                  Le Messager d'Allah (saws) a dit : "Il n'est pas une institution établie en Islam, qui soit plus aimée d'Allah que le mariage."<br />
                  Et que : "Quiconque se marie, acquiert la moitié de sa religion, qu'il craigne donc Allah pour la seconde moitié."
                </p>
                <p>
                  Par la grâce d’Allah (SWT), nous avons l’honneur et la joie de vous inviter à assister à la bénédiction de notre union sacrée.
                </p>
                <h3>💍 Mr & Mme Sarr 💍</h3>
              </div>
            </div>
            {/* Colonne centrale : Image du couple avec ombre décorative */}
            <div className="col col-xl-4 col-lg-4 col-12">
              <div className="middle-couple-pic-wrap" style={{ position: 'relative', width: '100%' }}>
                <div
                  className="middle-couple-pic-inner"
                  style={{ position: 'relative', width: '100%', height: '400px' }} // Définissez la hauteur selon vos besoins
                >
                  <Image src={invitation} alt="Couple" fill objectFit="cover" />
                </div>
                <div
                  className="bottom-shadow"
                  style={{ position: 'relative', width: '100%', height: '100px' }} // Hauteur de l'ombre
                >
                  <Image src={shape1} alt="Ombre décorative" fill objectFit="cover" />
                </div>
              </div>
            </div>
            {/* Colonne droite : Détails de la cérémonie */}
            <div className="col col-xl-4 col-lg-4 col-12">
              <div className="text-grid">
                <h3>Détails de la Cérémonie</h3>
                <p>
                  <strong>📅 Date :</strong> Jeudi 1er mai 2025
                </p>
                <p>
                  <strong>📍 Lieu :</strong> Mosquée Keur Ndiaye Lo
                </p>
                <p>
                  <strong>🏡 Adresse :</strong> Sortie 10 du péage, Keur Ndiaye Lo, Nouvelle Horizon, à côté de la station Diapandal.
                </p>
                <p>
                  <strong>📌 Localisation :</strong>{' '}
                  <Link legacyBehavior href="https://maps.app.goo.gl/vG4VrTN6Rd6EQQZAA?g_st=ic">
                    <a target="_blank" rel="noopener noreferrer">
                      Voir sur Google Maps
                    </a>
                  </Link>
                </p>
                <p>
                  <strong>🕰️ Heure :</strong> 17h
                </p>
                <p>
                  Que ce jour soit rempli de bénédictions, d’amour et de sérénité. Votre présence et vos prières seront pour nous un immense honneur.
                </p>
                <p>
                  Qu’Allah accorde à cette union prospérité, amour et miséricorde.
                </p>
                <div className="social">
                  <ul>
                    <li>
                      <Link legacyBehavior href="/">
                        <a>
                          <i className="ti-facebook"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/">
                        <a>
                          <i className="ti-twitter-alt"></i>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link legacyBehavior href="/">
                        <a>
                          <i className="ti-instagram"></i>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;