const jwt = require("jsonwebtoken");

module.exports = async function checkAuth(req, res, next) {

    try {
       
        if (req.headers.token !== undefined) {
            const data = await jwt.decode(req.headers.token);
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