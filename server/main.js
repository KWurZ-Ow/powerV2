import { Meteor } from "meteor/meteor";
import { Ordres } from "/imports/api/Ordres";

Meteor.startup(() => {
  Meteor.startup(() => {
    if (Ordres.find().count() === 0) {
      Ordres.insertMany([
        {
          color: "green",
          ready: false,
          ordres: [],
        },
        {
          color: "blue",
          ready: false,
          ordres: [],
        },
        {
          color: "yellow",
          ready: false,
          ordres: [],
        },
        {
          color: "red",
          ready: false,
          ordres: [],
        },
      ]);
    }
  });

  console.log("██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░");
  console.log("██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗");
  console.log("██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╔╝");
  console.log("██╔═══╝░██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗");
  console.log("██║░░░░░╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██║░░██║");
  console.log("╚═╝░░░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝");
});
