const router = require('express').Router()
const messageModel = require("../models/contact")

router.post('/send', (req, res) => {
    messageModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});

module.exports = router;