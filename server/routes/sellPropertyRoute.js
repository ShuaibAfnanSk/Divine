const router = require("express").Router();
const SellPropertyModel = require("../models/sellProperty");

router.get('/', (req, res) => {
    SellPropertyModel.find({})
        .then(properties => res.json(properties))
        .catch(err => res.json(err))
});

router.get('/:name', (req, res) => {
    const name = req.params.name;
    SellPropertyModel.findOne({ name: name })
        .then(property => res.json(property))
        .catch(err => res.json(err))
});

router.post('/sell', (req, res) => {
    SellPropertyModel.create(req.body)
        .then(property => res.json(property))
        .catch(err => res.json(err))
})

module.exports = router;