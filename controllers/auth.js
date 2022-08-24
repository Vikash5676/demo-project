const User = require("../models/user");

exports.contactform = (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then((response) => {
      // res.render("home", { name: response.name, phoneNo: response.phoneNo });
      res.send(response);
    })
    .catch((err) => res.send(err.message));
};
exports.contactList = (req, res) => {
  let filters = req.query;
  // filters = filters.skills.split(",");
  const removeFields = ["skills"];
  removeFields.forEach((key) => delete filters[key]);
  console.log(filters);
  User.find({}, function (err, ele) {
    if (err) {
      console.log(err);
      return;
    }
    const filteredUsers = ele.filter((user) => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
      }
      return isValid;
    });
    res.send(filteredUsers);
  });
};
