import React from 'react';

export default function ContactScreen() {

    return (
        <div>
            <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="cards cards-body">
                                <h2>Informacje o firmie:</h2>
                                <p>Home Studio - Szycie & Haft Anna Szwajkowska</p>
                                <p><strong>Adres:</strong> ul. Ks. Kard. Wyszyńskiego 5D, 29-100 Włoszczowa</p>
                                <p><strong>NIP:</strong> 6561840195</p>
                                <p><strong>REGON:</strong> 292868953</p>
                            </div>
                        </li>
                        <li>
                            <div className="cards cards-body">
                                <h2>Kontakt</h2>
                                <p><strong>Adres email:</strong>  anna123_26@wp.pl</p>
                                <p><strong>Numer telefonu:</strong>  505 020 807</p>
                                <p><strong>Facebook:</strong>  <a href="https://www.facebook.com/Home-Studio-SzycieHaft-Anna-Szwajkowska-110277654709574">Przejdź do Facebooka</a></p>
                                
                            </div>
                        </li>
                    </ul>
                    <div>
                        <h2 style={{ textAlign: "center" } }>Znajdziesz nas tutaj</h2>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.127128914351!2d19.984644715894554!3d50.847330066568745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717656bf1234403%3A0x87e9ff41756681e7!2sHome%20Studio%20-%20Szycie%20%26%20Haft!5e0!3m2!1spl!2spl!4v1660051322952!5m2!1spl!2spl" title='googlemaps' max-width= "50rem" width= "100%" height="450"  frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}