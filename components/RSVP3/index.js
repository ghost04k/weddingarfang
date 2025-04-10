import React, { useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import shape1 from '/public/images/contact/4.png';
import shape2 from '/public/images/contact/3.png';
import Image from 'next/image';

const RSVP3 = (props) => {
    const [forms, setForms] = useState({
        name: '',
        email: '',
        address: '',
        meal: '',
        attend: '',
        guest: ''
    });

    const [validator] = useState(new SimpleReactValidator({
        className: 'errorMessage'
    }));

    const changeHandler = e => {
        setForms({ ...forms, [e.target.name]: e.target.value });
        if (validator.allValid()) {
            validator.hideMessages();
        } else {
            validator.showMessages();
        }
    };

    const submitHandler = e => {
        e.preventDefault();
        if (validator.allValid()) {
            validator.hideMessages();
            alert("Merci pour votre confirmation !");
            setForms({
                name: '',
                email: '',
                address: '',
                meal: '',
                attend: '',
                guest: ''
            });
        } else {
            validator.showMessages();
        }
    };

    return (
        <section className={`wpo-contact-section-s3 section-padding ${props.rClass}`} id="RSVP">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-lg-12 col-md-12 col-12">
                        <div className="wpo-contact-section-wrapper">
                            <div className="wpo-contact-section-inner">
                                <div className="wpo-contact-form-area">
                                    <div className="wpo-section-title">
                                        <h2>Confirmez votre présence</h2>
                                    </div>
                                    <form method="post" className="contact-validation-active" onSubmit={submitHandler}>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <input
                                                    value={forms.name}
                                                    type="text"
                                                    name="name"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    placeholder="Votre nom" />
                                                {validator.message('name', forms.name, 'required|alpha_space')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <input
                                                    value={forms.email}
                                                    type="email"
                                                    name="email"
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    placeholder="Votre email" />
                                                {validator.message('email', forms.email, 'required|email')}
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <div className="radio-buttons">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input type="radio" id="attend" name="radio-group" defaultChecked />
                                                                <label htmlFor="attend">Oui, je serai présent(e)</label>
                                                            </p>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6 col-12">
                                                            <p>
                                                                <input type="radio" id="not" name="radio-group" />
                                                                <label htmlFor="not">Désolé, je ne pourrai pas venir</label>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-12 col-md-12 col-12">
                                                <select
                                                    onBlur={changeHandler}
                                                    onChange={changeHandler}
                                                    value={forms.guest}
                                                    type="text"
                                                    className="form-control"
                                                    name="guest">
                                                    <option value="">Je viendrais avec :</option>
                                                    <option value="1">1 personne</option>
                                                    <option value="2">2 personnes</option>
                                                    <option value="3">3 personnes</option>
                                                    <option value="4">4 personnes</option>

                                                   
                                                </select>
                                                {validator.message('guest', forms.guest, 'required')}
                                            </div>
                                        </div>
                                        <div className="submit-area">
                                            <button type="submit" className="theme-btn">Envoyer</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RSVP3;