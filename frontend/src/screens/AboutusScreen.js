import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "../components/Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export default function AboutusScreen() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Home Studio</h1>
      <h4 style={{ textAlign: "center" } }>Od momentu powstania naszej firmy dajemy z siebie wszystko, aby sprostać wymaganiom obecnego rynku, stawiając przede wszystkim na jakość, <br/>szybki czas realizacji oraz konkurencyjne ceny. <br/>Zdobienie produktów haftem komputerowym oraz usługi krawieckie stało się naszą pasją i z każdym dniem dokładamy wszelkich starań, <br/>aby sprostać wymaganiom klienta. <br/>Realizujemy zamówienia zarówno dla klientów indywidualnych, firm oraz wielu innych odbiorców.</h4>
      <h4 style={{ textAlign: "center" } }>Posiadamy profesjonalne maszyny hafciarskie, krawieckie, uczestniczymy na bieżąco w szkoleniach z zakresu haftu komputerowego i co ważne sami<br/> wykonujemy projekty hafciarskie, dzięki czemu klient może na bieżąco uczestniczyć w procesie projektowania swojego zlecenia. <br/>Metoda zdobienia haftem komputerowym jest bardzo trwała, a dobrze wykonany haft służy nam długie lata. <br/>W obecnych czasach występuje potężna baza kolorystyczna nici poliestrowych, <br/>wiskozowych oraz innych mieszanek, dzięki czemu możemy uzyskać wspaniały efekt haftu.</h4>
      <h4 style={{ textAlign: "center" } }>Do każdego zlecenia podchodzimy z pełną starannością i indywidualnie dobieramy ofertę do Państwa potrzeb.</h4>
      <h1 style={{ textAlign: "center" }}>Nasza pracownia</h1>
      <div className="Carousel">
        <Carousel breakPoints={breakPoints}>
          <Item>
          <img src={require("../assets/20220809_134951.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20220809_135025.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20220809_135104.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20220809_135639.jpg")} className="large" alt="alt"/>
          </Item>
          <Item>
          <img src={require("../assets/20220809_134918.jpg")} className="large" alt="alt"/>
          </Item>
        </Carousel>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<AboutusScreen />, rootElement);