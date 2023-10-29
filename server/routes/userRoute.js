const router = require('express').Router();
const UserModel = require("../models/user");

// router.post("/signup", (req, res) => {
//     UserModel.findOne({ username: req.body.username })
//         .then(existingUser => {
//             if (existingUser) {
//                 res.status(400).json({ error: 'user already exists' });
//             } else {
//                 UserModel.create(req.body)
//                     .then(newUser => res.json(newUser))
//                     .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
//             }
//         })
//         .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
// });

router.post('/signup', (req, res) => {
    UserModel.create(req.body)
        .then(data => res.json(data))
        .catch(err => res.json(err))
});


router.post("/login", (req, res) => {
    const { username, password } = req.body;
    UserModel.findOne({ username: username })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.status(200).json({ message: 'login successful', user });
                } else {
                    res.status(400).json({ error: 'incorrect password' });
                }
            } else {
                res.status(400).json({ error: "account doesn't exist" });
            }
        })
        .catch(err => res.status(500).json({ error: 'Internal Server Error' }));
});


module.exports = router;