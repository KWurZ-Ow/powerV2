import React from "react";
import "../styles/ordresTableau.module.css";

export default function OrdresTableau({ ordres }) {
    if (!ordres){
        ordres = []
    }
  return (
    <>
    <table className="ordresTableau">
      <thead>
        <tr>
          <th>Pièce</th>
          <th>Départ</th>
          <th>Arrivée</th>
          <th>Validation</th>
        </tr>
      </thead>
      <tbody>
        {ordres.map((ordre) => {
          return (
            <tr key={ordre.id}>
              {ordre.ordres.map((sousOrdre) => {
                return <td key={sousOrdre.id}>{sousOrdre.ordre}</td>;
              })}
              <td>
                <button>✔</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    <button onClick={() => Meteor.call("clearOrdres")}>Vider les ordres</button>
    </>
  );
}
