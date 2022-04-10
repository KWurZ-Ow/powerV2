import React from "react"
import "../styles/table.module.css"

import Reserves from "./Reserves"
import Plateau from "./Plateau"
import Controles from "./Controles"

export const App = () => (
  <div className="table">
    <Reserves />
    <Plateau />
    <Controles />
  </div>
)
