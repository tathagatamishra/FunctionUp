const authenticate = function (req, req, next) {

    let token = req.headers["x-Auth-token"];

    if (!token) token = req.headers["x-auth-token"];

    if (!token)
        return res.send({ status: false, msg: "token must be present" });

    console.log(token);

    let decodedToken = jwt.verify(token, "highly confidential");

    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });

    next()
}


const authorize = function (req, res, next) {

    let token = req.headers["x-auth-token"]

    if (!token) return res.send({ status: false, msg: "token must be present in the request header" })

    let decodedToken = jwt.verify(token, 'highly confidential')

    if (!decodedToken) return res.send({ status: false, msg: "token is not valid" })

    let userToBeModified = req.params.userId

    let userLoggedIn = decodedToken.userId

    if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
    
    next()
}

module.exports.authenticate = authenticate
module.exports.authorize = authorize