//---
// Farm model

var mongoose = require('mongoose')
var uri = 'mongodb://localhost:27017/farm-markets';

var farmSchema = mongoose.Schema({
  OF_ID: String,
  createTime: String,
  updateTime: String,
  finishTime: String,
  Location_ST: String,
  Location_City: String,
  Location_State: String,
  Location_StateFIPS: Number,
  Location_Zip: Number,
  x: Number,
  y: Number,
  marketname: String,
  Market_Website: String,
  Market_Facebook: String,
  Market_Twitter: String,
  season1_date: String,
  season1_time: String,
  season1_notes: String,
  season1_products: String,
  season2_date: String,
  season2_time: String,
  season2_notes: String,
  season2_products: String,
  season3_date: String,
  season3_time: String,
  season3_notes: String,
  season3_products: String,
  season4_date: String,
  season4_time: String,
  season4_notes: String,
  season4_products: String,
  Product_1: Number,
  Product_2: Number,
  Product_3: Number,
  Product_4: Number,
  Product_5: Number,
  Product_6: Number,
  Product_7: Number,
  Product_8: Number,
  Product_9: Number,
  Product_10: Number,
  Product_11: Number,
  Product_12: Number,
  Product_13: Number,
  Product_14: Number,
  Product_15: Number,
  Product_16: Number,
  Product_17: Number,
  Product_18: Number,
  Product_19: Number,
  Product_20: Number,
  Product_21: Number,
  Product_22: Number,
  Product_23: Number,
  Product_24: Number,
  Product_25: Number,
  Product_26: Number,
  Product_27: Number,
  Product_28: Number,
  ActivityList: String,
  Activity_1: Number,
  Activity_2: Number,
  Activity_3: Number,
  Activity_4: Number,
  Activity_5: Number,
  Activity_6: Number,
  Activity_7: Number,
  Activity_8: Number,
  Activity_9: Number,
  Activity_10: Number,
  Activity_11: Number,
  FacilitiesList: String,
  Facilities_1: Number,
  Facilities_2: Number,
  Facilities_3: Number,
  Facilities_4: Number,
  Facilities_5: Number,
  Payment_2: Number,
  Payment_3: Number,
  Payment_4: Number,
  Payment_1: Number,
});

// export farm model
const Farm = mongoose.model('Farm', farmSchema);
export default Farm;
