const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema({
    price: {
        type: Number,
        required: true,
    },
    bedrooms: {
        type: Number,
        required: true,
    },
    bathrooms: {
        type: Number,
        required: true,
    },
    sqft_living: {
        type: Number,
        required: true,
    },
    sqft_lot: {
        type: Number,
        required: true,
    },
    floors: {
        type: Number,
        required: true,
    },
    waterfront: {
        type: Number,
        required: true,
    },
    view: {
        type: Number,
        required: true,
    },
    condition: {
        type: Number,
        required: true,
    },
    sqft_above: {
        type: Number,
        required: true,
    },
    sqft_basement: {
        type: Number,
        required: true,
    },
    yr_built: {
        type: Number,
        required: true,
    },
    yr_renovated: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    statezip: {
        type: String,
        required: true,
    },
    neighbors: {
        type: Array,
        required: false
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    cluster: {
        type: String,
        required: false
    }
}, { timestamps: true });

module.exports = mongoose.model("properties", propertySchema)