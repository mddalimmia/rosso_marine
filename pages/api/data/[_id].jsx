import Table from "../../../Models/Datamodel";
import dbConnect from "../../../Utilities/mongo";
export default async function postDetail(req, res) {
  const {
    method,
    query: { _id },
  } = req;
  dbConnect();
  if (method === "GET") {
    try {
      const table = await Table.findById(_id);
      res.status(200).json(table);
    } catch (error) {
      console.log(error);
    }
  }
  if (method === "DELETE") {
    try {
      const tables = await Table.findByIdAndDelete(_id);

      res.status(200).json(tables);
    } catch (error) {
      console.log(error);
    }
  }
}
