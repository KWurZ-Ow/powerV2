import React from "react"
import { useEffect, useState } from "react"
import { useTracker } from 'meteor/react-meteor-data';
import { Ordres } from "/imports/api/Ordres";
import { LoginMobile } from "./LoginMobile";
import { Meteor } from 'meteor/meteor';

let Loading = "/loading.gif";

export default function Mobile() {
    const [userColor, setUserColor] = useState("")
    const game = useTracker(() => Meteor.user());
    const ordres = useTracker(() => Ordres.findOne({ color: userColor }))

    function handleReady() {
        Meteor.call('ready', userColor, !ordres?.ready)
    }
    function handleLogout() {
        setUserColor("")
        Meteor.logout();
    }

    return <>{game ? <>
        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
            <h1>⚡ Power</h1>
            <button onClick={handleReady}>{ordres?.ready ? "❌ Pas prêt" : "✅ Prêt"}</button>
            <button onClick={handleLogout}>🔙 Retour</button>
        </div>
        {ordres ? <table className="ordresTableau">
            <thead style={{ color: userColor }}>
                <tr>
                    <th>Pièce</th>
                    <th>Départ</th>
                    <th>Arrivée</th>
                </tr>
            </thead>
            <tbody>
                {ordres.ordres.map((ordre) => {
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
                })}
            </tbody>
        </table> : <img src={Loading} style={{ height: "100px" }} />}
        
    </> : <LoginMobile setColor={setUserColor} color={userColor} />}</>
}