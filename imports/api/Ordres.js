import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { blankOrdres } from "../api/utils";


import { displayColor } from "./utils";
//coucou

export const Ordres = new Mongo.Collection("ordres");

Meteor.methods({
  ready(color, state) {
    try {
      Ordres.update({ color: color }, { $set: { ready: state } });
    } catch (error) {
      throw new Meteor.Error(error);
    }
    console.log(
      `${displayColor(color)} ${color} ${state ? "ready" : "not ready"} !`
    );
  },
  updateOrdres(value, color, line, col) {
    console.log(
      `${displayColor(
        color
      )} Receiving ordres from ${color} : "${value}" at (${line}, ${col})`
    );
    let temp = Ordres.findOne({ color });
    temp.ordres[line - 1].moves[col - 1].content = value;
    try {
      Ordres.update({ color: color }, { $set: { ordres: temp.ordres } });
    } catch (error) {
      throw new Meteor.Error(error);
    }
  },
  clearOrdres() {
    ordresToInsert = blankOrdres;
    try {
      Ordres.remove({})
      ordresToInsert.map((ordre) => {
        Ordres.insert(ordre);
      });
    } catch (error) {
      throw new Meteor.Error(error);
    }
    console.log("🔄 ordres reset !");
  },
});
