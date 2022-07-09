import React from "react"
import "../styles/table.module.css"

import { isMobile } from 'react-device-detect';

import Reserves from "./Reserves"
import Plateau from "./Plateau"
import Controles from "./Controles"
import Mobile from "./Mobile"

export default function App() {
  if (isMobile){
    return <Mobile />
  }
  return <div className="table">
    <Reserves />
    <Plateau />
    <Controles />
  </div>
}
