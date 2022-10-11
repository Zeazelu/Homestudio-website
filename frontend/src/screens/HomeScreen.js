import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import CookieConsent from "react-cookie-consent";
import Logo from "../assets/20220809_134928.jpg";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];


export default function HomeScreen() {
  return (
    <>
      <article className="article">
      <img className="homeImage" src={Logo} alt="background" />
      <h1 className="h5">HOME STUDIO</h1>
    </article>
      <a href="https://www.facebook.com/Home-Studio-SzycieHaft-Anna-Szwajkowska-110277654709574">
      <img src={require("../assets/64x64.png")} className="small" alt="Sprawdź nas na Facebooku"/>
      </a>
      <a href="https://goo.gl/maps/XdewfQrAFrjbHptf6">
      <img src={require("../assets/googlemaps.png")} className="small" alt="Tutaj znajduje się nasza firma"/>
      </a>
      <a href="tel:+48505020807">
        <img src={require("../assets/phone-icon.png")} className="small" alt="Zadzwoń do nas"></img>
      </a>
      <a href="/privacypolicy">
        <img src={require("../assets/icons8-privacy-policy-64.png")} className="small" alt="Zadzwoń do nas"></img>
      </a>
      <h1 style={{ textAlign: "center" } }>Serdecznie witamy na stronie Home Studio - Szycie & Haft.</h1>
      <h1 style={{ textAlign: "center" } }>Zapraszamy do zapoznania się z naszą ofertą!</h1>
      <h2 style={{ textAlign: "center" } }>Haft na odzieży z naszej oferty oraz na odzieży powierzonej</h2>
      <h4 style={{ textAlign: "center" } }>Posiadamy profesjonalne maszyny z wolnym ramieniem, dzięki którym możemy wykonywać hafty na wyrobach gotowych takich jak: kurtki, polary,<br/> t-shirt, koszulki polo oraz praktycznie na każdym innym rodzaju odzieży.</h4> 
      <h2 style={{ textAlign: "center" } }>Haft na czapkach</h2>
      <h4 style={{ textAlign: "center" } }>Nasze hafciarki umożliwiają wykonanie haftu na czapkach z daszkiem oraz na czapkach zimowych. Te produkty można również znaleźć w naszej ofercie</h4>
      <h2 style={{ textAlign: "center" } }>Naszywki</h2>
      <h4 style={{ textAlign: "center" } }>Wykonujemy naszywki zarówno dla firm jak i klientów prywatnych. Naszywki mogą występować w opcji z rzepem, klejem lub do przyszycia na ubraniu</h4>
      <h1 style={{ textAlign: "center" }}>Sprawdź ostatnio wykonane prace <a href="/news">TUTAJ!</a></h1>
      <h1 style={{ textAlign: "center" }}>Przykładowe realizacje hafciarskie:</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>
          <img src={require("../assets/20210722_104846.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20210917_141009.jpg")} class="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210917_142055.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210930_220621.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20211003_102328.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20211008_124444.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20211008_125032.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20211030_150513.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210722_104846.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20211107_173856.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20211107_174005.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20211109_170017.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20211121_142508.jpg")} className="large" alt="alt" />
          </Item>
        </Carousel>
      </div>
      <h1 style={{ textAlign: "center" }}>Przykładowe realizacje krawieckie:</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>
          <img src={require("../assets/20210312_132241.jpg")} className="large" alt="alt" />
          </Item>
          <Item>
          <img src={require("../assets/20210418_161956.jpg")} class="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210418_162015.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210418_162545.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_143502.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_144104.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_144343.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_144522.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_144611.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20210505_144712.jpg")} className="large" alt="alt"/>
          </Item>
        </Carousel>
      </div>
      <CookieConsent debug={true} buttonText="Akceptuję" location="bottom" style={{textAlign: "left", fontSize:"14px"}} buttonStyle={{fontSize: "14px"}}>
        Ta strona używa plików cookies. Więcej informacji znajdziesz w <a href="/privacypolicy">Polityka prywatności</a>
        </CookieConsent>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<HomeScreen />, rootElement);