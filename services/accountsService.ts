import { Request, Response } from "express";
import firebase from "../config/firebase";
import AccountResponse from "../models/response/accountResponse";

const accountCollection = firebase.collection("member");

export const getAllMember = async (req: Request, res: Response) => {
  console.log(`getAllMember start time ${new Date().toISOString()}`);

  try {
    const data = await accountCollection.get();

    const response: AccountResponse[] = [];

    data.forEach((doc) => {
      response.push({
        id_std: doc.data().id_std,
        name: doc.data().name,
        last_name: doc.data().last_namename,
        address: doc.data().address,
        phone: doc.data().phone,
        gpa: doc.data().age,
        major: doc.data().major,

        // id: doc.id,
        // email: doc.data().email,
        // age: doc.data().age,
      });
    });

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "get all Member success",
      },
      data: response,
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const createMember = async (req: Request, res: Response) => {
  console.log(`createMerber start time ${new Date().toISOString()}`);

  try {
    const data = req.body;

    await accountCollection.doc().set(data);

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "create Member success",
      },
      data: null,
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const updateMember = async (req: Request, res: Response) => {
  console.log(`updateMember start time ${new Date().toISOString()}`);

  try {
    const data = req.body;
    const id = req.params.id;

    await accountCollection.doc(id).update(data);

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "update Member success",
      },
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};

export const deleteAccount = async (req: Request, res: Response) => {
  console.log(`deleteAccount start time ${new Date().toISOString()}`);

  try {
    const id = req.params.id;

    await accountCollection.doc(id).delete();

    return res.status(200).json({
      status: {
        code: 200,
        message: "success",
        description: "delete account success",
      },
      data: {
        timestamp: new Date().toISOString(),
      },
    });
  } catch (e: any) {
    return res.status(400).json({
      status: {
        code: 400,
        message: e,
        description: "Bad Request",
      },
      data: null,
    });
  }
};
