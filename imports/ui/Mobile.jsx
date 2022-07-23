import React from "react"
import { useEffect, useState } from "react"
import { useTracker } from 'meteor/react-meteor-data';
import { Ordres } from "/imports/api/Ordres";

let Loading = "/loading.gif";

export default function Mobile() {
    const [userColor, setUserColor] = useState("red")
    const ordres = useTracker(() => Ordres.findOne({ color: userColor }))
    useEffect(() => {
      console.log(ordres);
    }, [ordres])

    function handleReady() {
        Meteor.call('ready', userColor, !ordres?.ready)
    }

    return <>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <h1 onClick={() => setUserColor(userColor == "red" ? "blue" : "red")}>⚡ Power</h1>
            <button onClick={handleReady}>{ordres?.ready ? "❌ Pas prêt" : "✅ Prêt"}</button>
        </div>
        <table className="ordresTableau">
            <thead style={{color: userColor}}>
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
                            {ordre.moves.map((move) => {
                                return <td key={move.id}>
                                    <input
                                        type="text"
                                        value={move.content}
                                        onChange={(e) => Meteor.call('updateOrdres', e.target.value, userColor, ordre.id, move.id)}
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