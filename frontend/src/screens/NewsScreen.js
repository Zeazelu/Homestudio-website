import React from 'react';
import Item from '../components/Item';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

export default function NewsScreen() {

    
    return (
        <div>
           <h1 style={{textAlign: "center"}}>Aktualności</h1>
           <div className="row top">
                <div className="col-2">
                    <ul>
                        <li>
                            <div className="cards cards-body">
                              <h2>Data: 30.07.2022</h2>
                                <p>Fartuchy gotowe dla NZOZ Nowe Życie Włoszczowa  Dziękujemy za zlecenie Robimy wszystko, aby nasz klient był zadowolony Home Studio-Szycie&Haft Anna Szwajkowska</p>
                                <div className="Carousel">
                                <Carousel breakPoints={breakPoints}>
                                  <Item>
                                    <img src={require("../assets/291160664_179031507834188_5110318056126142902_n.jpg")} class="large" alt="alt"/>
                                  </Item>
                                  <Item>
                                    <img src={require("../assets/291156490_179031541167518_1356528579722696930_n.jpg")} class="large" alt="alt"/>
                                  </Item>
                                  <Item>
                                    <img src={require("../assets/291037690_179031551167517_5566287938149452861_n.jpg")} class="large" alt="alt"/>
                                  </Item>
                                  <Item>
                                    <img src={require("../assets/290981778_179031431167529_3677743688819940877_n.jpg")} class="large" alt="alt"/>
                                  </Item>
                                </Carousel>
                                </div>
                            </div>
                        </li>
                    </ul>
                      <ul>
                        <li>
                          <div className="cards cards-body">
                                <h2>Data: 31.07.2022</h2>
                                <p>#HaftKomputerowy #Naszywki #ProjektHafciarski #HomeStudioSzycieHaft #Włoszczowa Czapeczki gotowe dla UKS HETMANKI WŁOSZCZOWA</p>
                                <div className="Carousel">
                                  <Carousel breakPoints={breakPoints}>
                                    <Item>
                                      <img src={require("../assets/285337003_172965585107447_5257412103821584676_n.jpg")} className="large" alt="alt" />
                                    </Item>
                                    <Item>
                                      <img src={require("../assets/285197108_172965618440777_7141773669585876807_n.jpg")} class="large" alt="alt"/>
                                    </Item>
                                    <Item>
                                      <img src={require("../assets/284998191_172965571774115_4581429125676199572_n.jpg")} class="large" alt="alt"/>
                                    </Item>
                                  </Carousel>
                                  </div>
                              </div>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}