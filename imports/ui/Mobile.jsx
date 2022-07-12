import React from "react"
import { useEffect, useState } from "react"
import { useTracker } from 'meteor/react-meteor-data';
import { Ordres } from "/imports/api/Ordres";

let Loading = "/loading.gif";

export default function Mobile() {
    const ordres = useTracker(() => Ordres.findOne({ color: "red" }))

    function handleReady() {
        Meteor.call('ready', "red", !ordres?.ready)
    }

    return <>
        <h1>⚡ Power</h1>
        <button onClick={handleReady}>{ordres?.ready ? "❌ Pas prêt" : "✅ Prêt"}</button>
        <table className="ordresTableau">
            <thead>
                <tr>
                    <th>Pièce</th>
                    <th>Départ</th>
                    <th>Arrivée</th>
                </tr>
            </thead>
            <tbody>
                {ordres ? ordres?.ordres.map((ordre) => {
                    return (
                        <tr key={ordre.id}>
                            {ordre.ordres.map((sousOrdre) => {
                                return <td key={sousOrdre.id}>
                                    <input
                                        type="text"
                                        value={sousOrdre.ordre}
                                        onChange={(e) => Meteor.call('updateOrdres', e.target.value, "red", ordre.id, sousOrdre.id)}
                                        style={{ width: "90%" }} />
                                </td>;
                            })}
                        </tr>
                    );
                }) : <img src={Loading} style={{ height: "100px" }} />}
            </tbody>
        </table>
    </>
}