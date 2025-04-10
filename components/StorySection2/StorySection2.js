import React from 'react';
import SectionTitle from '../SectionTitle';
import sImg1 from '/public/images/story/4.png';
import sImg2 from '/public/images/story/5.png';
import sImg3 from '/public/images/story/6.png';
import rencontre from '/public/images/slider/rencontre.jpg'; // Garder celui-ci
import decor from '/public/images/slider/decor.jpg'; // Garder celui-ci
import mariageday from '/public/images/slider/mariageday.jpg'; // Garder celui-ci

import shape1 from '/public/images/story/shape.jpg';
import shape2 from '/public/images/story/shape2.jpg';
import Image from 'next/image';

const StorySection2 = (props) => {
    return (
        <section className={`wpo-story-section-s2 section-padding ${props.pClass}`} id="story">
            <div className="container">
                <SectionTitle subTitle={'Our Story'} MainTitle={'How it Happened'} />
                <div className="wpo-story-wrap">
                    {/* Première étape */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={rencontre} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>une si longue histoire 😌...</span>
                                <h2>How we meet</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    {/* Deuxième étape */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={sImg2} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape2} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>🥹 bah ouiiiii</span>
                                <h2>He proposed, I said yes</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                    {/* Troisième étape */}
                    <div className="wpo-story-item">
                        <div className="wpo-story-img-wrap">
                            <div className="wpo-story-img">
                                <Image src={sImg3} alt="" />
                            </div>
                            <div className="wpo-img-shape">
                                <Image src={shape1} alt="" />
                            </div>
                        </div>
                        <div className="wpo-story-content">
                            <div className="wpo-story-content-inner">
                                <span>15 Apr, 2021</span>
                                <h2>Our Engagement Day</h2>
                                <p>Consectetur adipiscing elit. Fringilla at risus orci, tempus facilisi sed. Enim
                                    tortor, faucibus netus orci donec volutpat adipiscing.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bouton de téléchargement du document PDF */}
                <div className="download-pdf" style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a 
                      href="/mawhub next js/public/documents/Invitation1.pdf" 
                      download 
                      className="btn-download" 
                      style={{
                        display: 'inline-block',
                        padding: '10px 20px',
                        backgroundColor: '#374151',
                        color: '#fff',
                        textDecoration: 'none',
                        borderRadius: '5px'
                      }}
                    >
                      Télécharger le document PDF
                    </a>
                </div>
            </div>
        </section>
    );
};

export default StorySection2;