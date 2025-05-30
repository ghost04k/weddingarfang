import React from 'react';
import TimeCountDown from '../countdown';
import shape from '/public/images/slider/shape.png';
import Image from 'next/image';

const Hero = (props) => {
    return (
        <section className="static-hero" id='home'>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-xl-8 col-lg-6 col-12">
                        <div className="wpo-static-hero-inner">
                            <div data-swiper-parallax="300" className="slide-title">
                                <h1>Save The Date</h1>
                            </div>
                            <div data-swiper-parallax="300" className="slide-title-2">
                                <h2>Arfang & Astou </h2>
                            </div>
                            <div data-swiper-parallax="400" className="slide-text">
                                <p>Jeudi 1er mai 2025 </p>
                            </div>
                            <div className="wpo-wedding-date">
                                <div className="clock-grids">
                                    <TimeCountDown />
                                </div>
                            </div>

                            {/* Bouton de téléchargement */}
                            <div className="download-button" style={{ marginTop: '20px' }}>
                                <a 
                                    href="/pdf/invitation1.pdf" 
                                    download 
                                    className="btn btn-primary" 
                                    style={{
                                        padding: '10px 20px',
                                        fontSize: '16px',
                                        backgroundColor: '#C89D9C',
                                        border: 'none',
                                        borderRadius: '8px',
                                        color: 'white',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        marginTop: '10px'
                                    }}
                                >
                                    Télécharger l'invitation
                                </a>
                            </div>

                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static-hero-right">
                <div className="static-hero-img">
                    <div className="static-hero-img-inner">
                        <Image 
                            src="/images/slider/yess.JPG" // ✅ chemin direct depuis /public
                            alt="invit" 
                            width={800}
                            height={600}
                        />
                    </div>
                    <div className="static-hero-shape">
                        <Image src={shape} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;