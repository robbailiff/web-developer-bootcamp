const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    return res.send("Sorry! You are not an Admin!")
})

router.get('/topsecret', (req, res) => {
    res.send('This is top secret!')
})
router.get('/deleteeverything', (req, res) => {
    res.send('Everything has been deleted!')
})

module.exports = router;
