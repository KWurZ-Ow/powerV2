import { Meteor } from "meteor/meteor";
import { blankOrdres } from "../imports/api/utils";
import { Ordres } from "/imports/api/Ordres";

const DEFAULT_GAME = 'TEST'

Meteor.startup(() => {
  if (Ordres.find().count() === 0) {// seed database
    ordresToInsert = blankOrdres;
    ordresToInsert.map((ordre) => {
      Ordres.insert(ordre);
    });
    console.log("🌱 Database seeded !\n");
  }
  if (!Accounts.findUserByUsername(DEFAULT_GAME)) {// seed users
    Accounts.createUser({
      username: DEFAULT_GAME,
      password: DEFAULT_GAME,
    });
  }
  console.log("██████╗░░█████╗░░██╗░░░░░░░██╗███████╗██████╗░");
  console.log("██╔══██╗██╔══██╗░██║░░██╗░░██║██╔════╝██╔══██╗");
  console.log("██████╔╝██║░░██║░╚██╗████╗██╔╝█████╗░░██████╔╝");
  console.log("██╔═══╝░██║░░██║░░████╔═████║░██╔══╝░░██╔══██╗");
  console.log("██║░░░░░╚█████╔╝░░╚██╔╝░╚██╔╝░███████╗██║░░██║");
  console.log("╚═╝░░░░░░╚════╝░░░░╚═╝░░░╚═╝░░╚══════╝╚═╝░░╚═╝");
});