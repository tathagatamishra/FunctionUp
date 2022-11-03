const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


//-------------------1------------------------------
//- Write a **POST api /users** to register a user from the user details in request body.

const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);

  res.send({ msg: savedData });
};


//--------------------2--------------------------
//- Write a ***POST api /login** to login a user that takes user details - email and password from the request body.

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  //- If the credentials don't match with any user's data return a suitable error.

  let user = await userModel.findOne({ emailId: userName, password: password });

  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });

  //- On successful login, generate a JWT token and return it in response body

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      name: user.firstName + user.lastName,
      batch: "Lithium"
    },
    "secret-key"
  );

  res.setHeader("x-auth-token", token);

  res.send({ status: true, token: token });
};


//------------------3----------------------
//- Write a **GET api /users/:userId** to fetch user details. Pass the userId as path param in the url.

const getUserData = async function (req, res) {

  //- Pass the userId as path param in the url.

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  //- If everything ok, then send user data as response. 

  res.send({ status: true, data: userDetails });
};


//-------------------4-----------------------
//- Write a **PUT api /users/:userId** to update user details.

const updateUser = async function (req, res) {

  //- Pass the userId as path param in the url.

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }
  //- update the attributes received in the request body.

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);

  res.send({ status: "updated", data: updatedUser });
};

//-------------------5-----------------------
//- Write a DELETE api /users/:userId

const deleteUser = async function (req, res) {

  //- takes the userId in the path params

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }
  //- update the attributes received in the request body.

  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } });

  res.send({ status: "deleted", data: deletedUser });
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;