let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const profileSchema = new Schema({
  //userId: { type: Number },
  _id: { type: mongoose.Types.ObjectId, ref: "user" },
  first_name: { type: String },
  last_name: { type: String },
  mumble_email: { type: String },
  age: { type: Number },
  body_type: { type: String },
  diet: { type: String },
  drinks: { type: String },
  drugs: { type: String },
  education: { type: String },
  essay: { type: String },
  ethnicity: { type: String },
  height: { type: Number },
  income: { type: Number },
  job: { type: String },
  location: { type: String },
  offspring: { type: String },
  orientation: { type: String },
  pets: { type: String },
  religion: { type: String },
  sex: { type: String },
  sign: { type: String },
  smokes: { type: String },
  speaks: { type: String },
  status: { type: String },
  profile_image: { type: String },
  likes: [{ type: mongoose.Types.ObjectId, ref: "Profile" }],
});

//=SUBSTITUTE(CONCATENATE("{user_id: ", B2, ", first_name: '", C2, "', last_name: '", D2, "', mumble_email: '", E2, "', age: ", F2, ", body_type: '", G2,"', diet: '", H2, "', drinks: '", I2,"', drugs: '", J2,"', education: '", K2,"', essay: '", L2,"', ethnicity: '", M2,"', height: ", N2,", income: ", O2,", job: '", P2,"', location: '", Q2,"', offspring: '", R2,"', orientation: '", S2,"', pets: '", T2,"', religion: '", U2,"', sex: '", V2,"', sign: '", W2, "', smokes: '", X2, "', speaks: '", Y2, "', status: '", Z2, "', profile_image: '", AA2, "',},"),CHAR(10),", ")

const Profile = mongoose.model("Profile", profileSchema);
module.exports = { Profile };
