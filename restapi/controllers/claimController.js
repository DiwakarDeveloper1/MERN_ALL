const claimModel = require("../models/claimModel");
const { v4: uuidv4 } = require("uuid");
// var users = [
//     { id: 1, firstname: 'Peter', lastname: 'Parker', email: 'Peter@gmail.com', city: 'Mumbai' },
//     { id: 2, firstname: 'Tony', lastname: 'Stark', email: 'Tony@gmail.com', city: 'New Delhi' }
// ]

function GetClaims(req, res) {
  claimModel.find({}, (err, data) => {
    if (!err) {
      res.status(200).send(data);
    }
  });
}

function GetClaim(req, res) {
  claimModel.findOne({ _id: req.params.id }, (err, data) => {
    if (data !== null) {
      res.status(200).send(data);
    } else if (data == null) {
      res.status(404).send({
        status: 404,
        message: `User with specified id: ${req.params.id} does not exists`,
      });
    } else {
      throw err;
    }
  });
}

function AddClaim(req, res) {
  let user = new claimModel({
    _id: uuidv4(),
    name: req.body.name,
    // status: req.body.status,
    policyID: req.body.policyID,
    // city: req.body.city,
    // age: req.body.age,
  });
  user.save((err) => {
    if (!err) {
      res.status(201).send({ message: "Claim added successfully" });
    } else {
      throw err;
    }
  });
}

function DeletClaim(req, res) {
  claimModel.deleteOne({ userid: req.params.id }, (err, data) => {
    console.log(data);
    if (err) {
      throw err;
    } else {
      res.status(200).send({ message: "Claim deleted successfully" });
    }
  });
}

function UpdateClaim(req, res) {
  let user = users.find((x) => x.id == req.params.id);
  if (user === undefined) {
    res.status(404).send({
      status: 404,
      message: `User with specified id: ${req.params.id} does not exists`,
    });
  } else {
    users[users.indexOf(user)] = req.body;
    res.status(200).send({ message: "Claim updated successfully" });
  }
}

module.exports = { GetClaims, GetClaim, AddClaim, DeletClaim, UpdateClaim };
