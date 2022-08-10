import mongoose, { model, models, Schema } from "mongoose";
const tableSchema = new mongoose.Schema({
  mode: { type: String, required: true },
  blno: { type: String, required: true },
  containerno: { type: String, required: true },
  booked: { type: String, required: true },
  vesselname: { type: String, required: true },
  route: { type: String, required: true, uppercrease: true },
  serviceterm: { type: String, required: true, uppercrease: true },
  cntrtype: { type: String, uppercrease: true },
  cellno: { type: String },
  weight: { type: String },
  sealno: { type: String },
  sendercompany: { type: String },
  recievercompany: { type: String },
  originlocation: { type: String, required: true, uppercrease: true },
  loadinglocation: { type: String, required: true, uppercrease: true },
  dischargelocation: { type: String, required: true, uppercrease: true },
  destinationlocation: { type: String, required: true, uppercrease: true },
  loadingarrivaldate: { type: String },
  loadingarrivaltime: { type: String },
  dischargearrivaldate: {
    type: String,
  },
  dischargearrivaltime: {
    type: String,
  },
  destinationarrivaldate: {
    type: String,
  },
  destinationarrivaltime: {
    type: String,
  },

  origindeparturedate: {
    type: String,
  },
  origindeparturetime: {
    type: String,
  },

  loadingdeparturedate: {
    type: String,
  },
  loadingdeparturetime: {
    type: String,
  },
  dischargedeparturedate: {
    type: String,
  },
  dischargedeparturetime: {
    type: String,
  },

  returncontainerdate: { type: String },
  returncontainertime: { type: String },
  loadarrivaliso: { type: String, required: true },
  dischargearrivaliso: { type: String, required: true },
  destinationarrivaliso: { type: String, required: true },
  origindepurtureiso: { type: String, required: true },
  loaddepurtureiso: { type: String, required: true },
  dischargedepurtureiso: { type: String },
  returncontainerdateiso: { type: String, required: true },
  usams: { type: String },
  canadaaci: { type: String },
  euens: { type: String },
  chinacams: { type: String },
  japanafr: { type: String },
});
const Table = models.Table || model("Table", tableSchema);
export default Table;
