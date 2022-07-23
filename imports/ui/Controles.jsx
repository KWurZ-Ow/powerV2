import React, { useEffect } from "react";

import "../styles/controles.module.css";
import OrdresTableau from "./OrdresTableau";
import { Ordres } from "/imports/api/Ordres";

import { useTracker } from "meteor/react-meteor-data";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SwipeableViews from "react-swipeable-views";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";


let Loading = "/loading.gif";

export default function Controles() {
  const [value, setValue] = React.useState(0);
  const ordres = useTracker(() => Ordres.findOne({ color: "red" }));

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
    );
  }

  return (
    <div className="controles">
      <div className="ordres">
        <Tabs value={value} onChange={(event, newValue) => setValue(newValue)}>
          <Tab
            icon={
              ordres?.ready ? (
                <CheckCircleOutlineIcon />
              ) : (
                <img src={Loading} style={{ height: "24px" }} />
              )
            }
            iconPosition="start"
            label="Vert"
            id="tab1"
          />
          <Tab
            icon={
              ordres?.ready ? (
                <CheckCircleOutlineIcon />
              ) : (
                <img src={Loading} style={{ height: "24px" }} />
              )
            }
            iconPosition="start"
            label="Bleu"
            id="tab2"
          />
          <Tab
            icon={
              ordres?.ready ? (
                <CheckCircleOutlineIcon />
              ) : (
                <img src={Loading} style={{ height: "24px" }} />
              )
            }
            iconPosition="start"
            label="Jaune"
            id="tab3"
          />
          <Tab
            icon={
              ordres?.ready ? (
                <CheckCircleOutlineIcon />
              ) : (
                <img src={Loading} style={{ height: "24px" }} />
              )
            }
            iconPosition="start"
            label="Rouge"
            id="tab4"
          />
        </Tabs>
        <SwipeableViews
          axis="x"
          index={value}
          onChangeIndex={(index) => setValue(index)}
        >
          <TabPanel value={value} index={0}>
            <OrdresTableau
              ordres={ordres?.ordres}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <OrdresTableau
              ordres={ordres?.ordres}
            />
          </TabPanel>
          <TabPanel value={value} index={2}>
            <OrdresTableau
              ordres={ordres?.ordres}
            />
          </TabPanel>
          <TabPanel value={value} index={3}>
            <OrdresTableau
              ordres={ordres?.ordres}
            />
          </TabPanel>
        </SwipeableViews>
      </div>
      <div className="logs"></div>
    </div>
  );
}
