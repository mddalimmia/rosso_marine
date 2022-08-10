import Table from "../../../Models/Datamodel";
import dbConnect from "../../../Utilities/mongo";

export default async function addData(req, res) {
  const { method } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const dataRes = await Table.find();
      res.status(200).json(dataRes);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "POST") {
    try {
      const table = await Table.create(req.body);
      res.status(201).json(table);
    } catch (error) {
      res.status(500);
    }
  }
}
