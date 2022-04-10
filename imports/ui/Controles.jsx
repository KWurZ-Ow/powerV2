import React from "react"
import "../styles/controles.module.css"

import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import SwipeableViews from "react-swipeable-views"

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

export default function Controles() {
  const [value, setValue] = React.useState(0)

  function TabPanel({ children, value, index, ...other }) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`onglet-${index}`}
        className="onglet"
        {...other}
      >
        {value === index && <div>{children}</div>}
      </div>
    )
  }

  return (
    <div className="controles">
      <div className="ordres">
        <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
          <Tab
            icon={<CheckCircleOutlineIcon />}
            iconPosition="start"
            label="Joueur 1"
            id="tab1"
          />
          <Tab
            icon={<CheckCircleOutlineIcon />}
            iconPosition="start"
            label="Joueur 2"
            id="tab2"
          />
          <Tab
            icon={<HighlightOffIcon />}
            iconPosition="start"
            label="Joueur 3"
            id="tab3"
          />
          <Tab
            icon={<HighlightOffIcon />}
            iconPosition="start"
            label="Joueur 4"
            id="tab4"
          />
        </Tabs>
        <SwipeableViews
          axis="x"
          index={value}
          onChangeIndex={(index) => setValue(index)}
        >
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item Four
          </TabPanel>
        </SwipeableViews>
      </div>
      <div className="logs"></div>
    </div>
  )
}
