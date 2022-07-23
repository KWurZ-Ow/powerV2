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
              {ordre.moves?.map((move) => {
                return <td key={move.id}>{move.content}</td>;
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
