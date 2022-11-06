const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

//------------------ 1 ------------------

const createUser = async function (req, res) {

  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

//------------------ 2 ------------------

const loginUser = async function (req, res) {

  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });


  let token = jwt.sign(
    {
      userId: user._id.toString(),
      name: user.firstName + " " + user.lastName,
      mobile: user.mobile,
    },
    "highly confidential"
  );

  res.setHeader("x-auth-token", token);

  res.send({ status: true, data: token });
};

//------------------ 3 ------------------

const getUserData = async function (req, res) {

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);

  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};

//------------------ 4 ------------------

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);

  res.send({ status: "User Data Updated", data: updatedUser });
};

//------------------ 5 ------------------

const postMessage = async function (req, res) {

  let message = req.body.message   // 1

  let user = await userModel.findById(req.params.userId)  // 2

  if (!user) return res.send({ status: false, msg: 'No such user exists' })

  let updatedPost = user.posts     // 3

  updatedPost.push(message)        // 4

  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, { posts: updatedPost }, { new: true })    // 5

  return res.send({ status: true, data: updatedUser })
}

//------------------ 5 ------------------

const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);

  if (!user) {
    return res.send("No such user exists");
  }

  let deletedUser = await userModel.findOneAndUpdate({ _id: userId }, { $set: { isDeleted: true } });

  res.send({ status: "deleted", data: deletedUser });
};


module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser