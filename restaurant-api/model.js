const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
});

UsersSchema.statics.signup = async function (userInfo) {
  const { name, email, message } = userInfo;

  if (!name || !email) {
    throw Error('Name and email is undefined!');
  }

  const user = await this.create(userInfo);
};

const UserModel = mongoose.model('users', UsersSchema);
module.exports = UserModel;
