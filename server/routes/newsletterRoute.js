const router = require('express').Router()
const newsModel = require("../models/newsletter")

router.post('/request', (req, res) => {
    newsModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

module.exports = router;