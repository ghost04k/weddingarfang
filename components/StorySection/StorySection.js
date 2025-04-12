import React from 'react';
import SectionTitle from '../SectionTitle';
import sImg1 from '/public/images/story/1.jpg';
import sImg2 from '/public/images/story/2.jpg';
import sImg3 from '/public/images/slider/decor.jpg';
import rencontre from '/public/images/slider/rencontre.jpg'; // Garder celui-ci
import decor from '/public/images/slider/decor.jpg'; // Garder celui-ci
import mariageday from '/public/images/slider/mariageday.jpg'; // Garder celui-ci
// Supprimer la ligne suivante car elle est en double
// import rencontre from '/public/images/slider/rencontre.jpg';

import shape1 from '/public/images/story/shape.jpg';
import shape2 from '/public/images/story/shape2.jpg';
import Image from 'next/image';

const StorySection = (props) => {
    return (
        <section className="wpo-story-section section-padding" id="story">
            <div className="container">
                <SectionTitle subTitle={'Notre histoire'} MainTitle={'Comment tout a commencé'} />
                <div className="wpo-story-wrap">
                    {/* Première étape : Notre rencontre */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={rencontre} alt="Rencontre à l'école" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="Forme décorative" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>14 fév</span>
                                <h2>Notre rencontre</h2>
                                <p>
                                    Arfang et Astou se sont rencontrés en terminale. Le 14 février, Arfang a déclaré sa flamme en offrant une rose, marquant ainsi le début de leur belle histoire.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Deuxième étape : La demande en mariage */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={decor

                                } alt="Demande en mariage" />
                            </div>
                            <div 
                                className="wpo-img-shape" 
                                style={{ position: 'relative', width: 150, height: 150 }}
                            >
                                
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>💍</span>
                                <h2>Il a fait sa demande, elle a dit oui</h2>
                                <p>
                                    Leur amour a continué de grandir et, lors d'un moment inoubliable, Arfang a posé la question.Astou a répondu par l'affirmative, scellant ainsi leur engagement.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Troisième étape : Le mariage à venir */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={mariageday} alt="Notre mariage à venir" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="Forme décorative" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>1 mai 2025 👩‍❤️‍👨</span>
                                <h2>Notre mariage à venir</h2>
                                <p>
                                    Après avoir célébré notre rencontre et notre engagement, nous nous préparons désormais à vivre le plus beau jour de notre vie. Le mariage approche à grands pas et nous avons hâte de partager ce moment inoubliable avec vous.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;