const jwt = require("jsonwebtoken");

module.exports = async function checkAuth(req, res, next) {

    try {
        const authHeader = req.headers['authorization'];

        if (authHeader !== undefined) {
            const token = authHeader.split(' ')[1];
            const data = await jwt.decode(token);
            console.log(data);
            if (data.username !== undefined && data.username === "Jack") {
                next();
            } else {
                res.status(400).send({ error: "Invalid token" });
            }

        } else {
            res.status(400).send({ error: "User not authenicated" });
        }
    } catch (e) {
        res.status(400).send({ error: "User not authenicated" });
        console.log(e)
    }
}