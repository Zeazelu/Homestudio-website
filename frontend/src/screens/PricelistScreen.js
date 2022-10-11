import React from 'react';

export default function PricelistScreen() {
    
    return (
           <div>
            <h1 style={{textAlign: "center"}}>Informacje dotyczące wyceny haftu</h1>
            <h4 style={{textAlign: "center"}}>Cena haftu zależna jest od kilku czynników jak wielkość, stopień złożoności, ilość ściegów, liczba sztuk. Ze względu na dużą ilość elementów wpływających na cenę, każdy haft wyceniany jest indywidualnie. <br/>Aby poznać dokładną cenę haftu, prosimy o przesłanie zapytania. Wystarczy przesłać logo oraz informację na czym ma zostać wykonany haft, jakiej wielkości i w jakiej ilości. <br/>Oczywiście zawsze można do nas również zadzwonić i ustalić wszystkie szczegóły.</h4>
            <strong>Poniższa tabela pozwala poznać przybliżoną cenę haftów.</strong>
             <table className="table">
               <tbody>
                <tr>
                  <th></th>
                  <th style={{ textAlign: "center" }}colspan="3">ILOŚĆ SZTUK</th>
                </tr>
                <tr>
                  <th style={{ textAlign: "center" }}>ILOŚĆ WKŁÓĆ</th>
                  <th style={{ textAlign: "center" }}>1-10</th>
                  <th style={{ textAlign: "center" }}>11-30</th>
                  <th style={{ textAlign: "center" }}>31-50</th>
                </tr>
                 <tr>
                  <td>1-3000</td>
                  <td>23ZŁ</td>
                  <td>20ZŁ</td>
                  <td>18ZŁ</td>
                </tr>
                 <tr>
                  <td>3000-6000</td>
                  <td>25ZŁ</td>
                  <td>23ZŁ</td>
                  <td>20ZŁ</td>
                </tr>
                 <tr>
                    <td>6000-10000</td>
                    <td>30ZŁ</td>
                    <td>25ZŁ</td>
                    <td>23ZŁ</td>
                </tr>
                  <tr>
                    <td>10000-20000</td>
                    <td>33ZŁ</td>
                    <td>30ZŁ</td>
                   <td>25ZŁ</td>
                </tr>
                  <tr>
                   <td> powyżej 20000</td>
                    <td>1,8ZŁ / 1000</td>
                    <td>1,65ZŁ / 1000</td>
                   <td>1,5ZŁ / 1000</td>
                </tr>              
               </tbody>
             </table>
          </div>
    )
}