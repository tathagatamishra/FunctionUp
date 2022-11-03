
const jwt = require('jsonwebtoken')

const middleware = function (req, res, next) {

    //- Check that request must contain **x-auth-token** header.

    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //- If absent, return a suitable error.

    if (!token) return res.send({ status: false, msg: "token must be present" });

    //- If present, check that the token is valid.

    let decodedToken = jwt.verify(token, "secret-key");

    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    next()
}

module.exports.middleware = middleware
