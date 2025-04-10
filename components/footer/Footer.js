import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer" style={{ backgroundColor: '#f7f7f7', padding: '40px 0', textAlign: 'center' }}>
            <div className="container">
                <h3>Contact</h3>
                <p style={{ fontSize: '16px', margin: '10px 0' }}>
                    Si vous souhaitez un site web personnalisé comme celui-ci, n'hésitez pas à me contacter :
                </p>
                <p style={{ margin: '8px 0' }}>
                    <strong>📧 Email :</strong>{' '}
                    <a href="mailto:cheikhabamba99@gmail.com" style={{ color: '#C89D9C', textDecoration: 'none' }}>
                        cheikhabamba99@gmail.com
                    </a>
                </p>
                <p style={{ margin: '8px 0' }}>
                    <strong>📍 Localisation :</strong> France
                </p>
                <p style={{ margin: '8px 0' }}>
                    <strong>📸 Instagram :</strong>{' '}
                    <a
                        href="https://www.instagram.com/bamba_ghost10?igsh=MXZwdGF5bjd5ZmwwbQ%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#C89D9C', textDecoration: 'none' }}
                    >
                        @bamba_ghost10
                    </a>
                </p>
                <p style={{ marginTop: '20px', fontSize: '14px', color: '#888' }}>
                    &copy; {new Date().getFullYear()} Bamba Ghost. Tous droits réservés.
                </p>
            </div>
        </footer>
    );
};

export default Footer;