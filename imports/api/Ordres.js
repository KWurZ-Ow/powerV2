import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

import { displayColor } from "./utils";

export const Ordres = new Mongo.Collection("ordres");

Meteor.methods({
  ready(color, state) {
    try {
      Ordres.update({ color: color }, { $set: { ready: state } });
    } catch (error) {
      throw new Meteor.error(error);
    }
    console.log(`${displayColor(color)} ${color} ${state ? "ready" : "not ready"} !`);
  },
  updateOrdres(value, color, line, col) {
    console.log(`${displayColor(color)} Receiving ordres from ${color} : "${value}" at (${line}, ${col})`)
    let temp = Ordres.findOne({color})
    temp.ordres[line - 1].moves[col - 1].content = value
    try {
      Ordres.update({color: color}, {$set: {ordres: temp.ordres}})
    } catch (error) {
      throw new Meteor.Error(error)
    }
  },
  clearOrdres() {
    try {
      Ordres.update(
        {color: "red"},
        {
          $set: {
            ready: false,
            ordres: [
              {
                id: "1",
                moves: [
                  { id: "1", content: "" },
                  { id: "2", content: "" },
                  { id: "3", content: "" },
                ],
              },
              {
                id: "2",
                moves: [
                  { id: "1", content: "" },
                  { id: "2", content: "" },
                  { id: "3", content: "" },
                ],
              },
              {
                id: "3",
                moves: [
                  { id: "1", content: "" },
                  { id: "2", content: "" },
                  { id: "3", content: "" },
                ],
              },
              {
                id: "4",
                moves: [
                  { id: "1", content: "" },
                  { id: "2", content: "" },
                  { id: "3", content: "" },
                ],
              },
              {
                id: "5",
                moves: [
                  { id: "1", content: "" },
                  { id: "2", content: "" },
                  { id: "3", content: "" },
                ],
              },
            ]
          },
        }
        );
      } catch (error) {
        throw new Meteor.Error(error);
      }
      console.log("🔄 ordres reset !");
    },
  });
  