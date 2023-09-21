const express = require('express');
const router = express.Router();
const checkAuth = require("../middleware/checkAuth");
const db = require("../data/data")

router.post('/recommendations', checkAuth, async (req, res) => {
    try {

        if (req.body.username === undefined) {
            const data = shuffle(db.recommendations);
            res.json(data);
        } else {

        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

router.post('/subscriptions', checkAuth, async (req, res) => {
    try {

        if (req.body.username === undefined) {
            const data = shuffle(db.subs);
            res.json(data);
        } else {

        }
    } catch (err) {
        res.status(400).send({ error: err.message });
    }
});

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}
module.exports = router;