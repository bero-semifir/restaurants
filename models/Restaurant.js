const mongoose = require('mongoose');

const schema = {
    _id: { type: String, default: "" },
    name: { type: String, required: true },
    cuisine: { type: String, required: true },
    borough: { type: String, required: true },
};

const RestaurantSchema = new mongoose.Schema(schema)

module.exports = mongoose.model('Restaurant', RestaurantSchema);