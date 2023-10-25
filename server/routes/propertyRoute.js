const router = require("express").Router();
const PropertyModel = require("../models/property");

router.get('/', (req, res) => {
    PropertyModel.find({})
        .then(properties => res.json(properties))
        .catch(err => res.json(err))
});

router.get('/grove', (req, res) => {
    PropertyModel.find({ cluster: "Tranquil Grove" })
        .then(properties => res.json(properties))
        .catch(err => res.json(err))
});

router.get('/cosmo', (req, res) => {
    PropertyModel.find({ cluster: "Cosmo Lofts" })
        .then(properties => res.json(properties))
        .catch(err => res.json(err))
});

router.get('/haven', (req, res) => {
    PropertyModel.find({ cluster: "Sunset Haven" })
        .then(properties => res.json(properties))
        .catch(err => res.json(err))
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    PropertyModel.findOne({ name: name })
        .then(property => res.json(property))
        .catch(err => res.json(err))
});

router.post('/sell', (req, res) => {
    PropertyModel.create(req.body)
        .then(property => res.json(property))
        .catch(err => res.json(err))
})

module.exports = router;