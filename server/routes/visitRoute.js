const router = require('express').Router()
const visitModel = require("../models/visit")

router.post('/send', (req, res) => {
    visitModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

module.exports = router;