import exports from "express";
import {
  createMember,
  deleteAccount,
  getAllMember,
  updateMember,
} from "../services/accountsService";

const Controller = exports.Router();

// Controller.get("/account", getAllAccount);
// Controller.post("/account", createAccount);
// Controller.patch("/account/:id", updateAccount);
// Controller.delete("/account/:id", deleteAccount);

Controller.get("/regisMember", getAllMember);
Controller.post("/regisMember", createMember);
Controller.patch("/regisMember/:id", updateMember);

export default Controller;
