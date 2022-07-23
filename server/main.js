import { Meteor } from "meteor/meteor";
import { blankOrdres } from "../imports/api/utils";
import { Ordres } from "/imports/api/Ordres";

Meteor.startup(() => {
  if (Ordres.find().count() === 0) {
    ordresToInsert = blankOrdres;
    ordresToInsert.map((ordre) => {
      Ordres.insert(ordre);
    });
    console.log("🌱 Database seeded !");
  }
  console.log("██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░");
  console.log("██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗");
  console.log("██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╔╝");
  console.log("██╔═══╝░██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗");
  console.log("██║░░░░░╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██║░░██║");
  console.log("╚═╝░░░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝");
});