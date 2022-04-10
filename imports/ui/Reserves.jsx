import React from "react"
import "../styles/reserve.module.css"

export default function Reserves() {
  return (
    <div className="reserveContainer">
      <div id="vert" className="reserve">Réserve verte</div>
      <div id="bleu" className="reserve">Réserve bleue</div>
      <div id="jaune" className="reserve">Réserve jaune</div>
      <div id="rouge" className="reserve">Réserve rouge</div>
    </div>
  )
}
