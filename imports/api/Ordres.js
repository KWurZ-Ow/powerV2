import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";

export const Ordres = new Mongo.Collection("ordres");

Meteor.methods({
  ready(color, state) {
    try {
      Ordres.update({ color: color }, { $set: { ready: state } });
    } catch (error) {
      throw new Meteor.error(error);
    }
    console.log(`${color} ${state ? "ready" : "not ready"} !`);
  },
  updateOrdres(value, color, line, col) {
    console.log(`${color == "red" ? "🟥" : color == "blue" ? "🟦" : color == "green" ? "🟩" : "🟨"} Reciving ordres from ${color} : "${value}" at (${line}, ${col})`)
    let temp = Ordres.findOne({color})
    temp.ordres[line - 1].ordres[col - 1].ordre = value
    Ordres.update({color: color}, {$set: {ordres: temp.ordres}})
  },
  clearOrdres() {
    try {
      Ordres.update(
        {color: {$in: ["green", "blue", "yellow", "red"]}},
        {
          $set: {
            ready: false,
            ordres: [
              {
                id: 1,
                ordres: [
                  { id: "1", ordre: "" },
                  { id: "2", ordre: "" },
                  { id: "3", ordre: "" },
                ],
              },
              {
                id: 2,
                ordres: [
                  { id: "1", ordre: "" },
                  { id: "2", ordre: "" },
                  { id: "3", ordre: "" },
                ],
              },
              {
                id: 3,
                ordres: [
                  { id: "1", ordre: "" },
                  { id: "2", ordre: "" },
                  { id: "3", ordre: "" },
                ],
              },
              {
                id: 4,
                ordres: [
                  { id: "1", ordre: "" },
                  { id: "2", ordre: "" },
                  { id: "3", ordre: "" },
                ],
              },
              {
                id: 5,
                ordres: [
                  { id: "1", ordre: "" },
                  { id: "2", ordre: "" },
                  { id: "3", ordre: "" },
                ],
              },
            ],
          },
        }
      );
    } catch (error) {
      throw new Meteor.error(error);
    }
    console.log("🔄 ordres reseted !");
  },
});
