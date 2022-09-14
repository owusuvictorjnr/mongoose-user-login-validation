const User = require('./user.model');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { email, password } = req.body;

  //Checking to see if user already exist
  const emailExists = await User.findOne({ email });
  if (emailExists) {
    return res.status(400).json({ error: 'Email already in used.' });
  }

  ///Hash user password

  // Method one
  // const salt = await bcrypt.genSalt(12);
  // const hashedPassword = await bcrypt.hash(password, salt);

  // method two
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    ...req.body,
    password: hashedPassword,
  });

  res.status(201).json({ user });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  // check if password provided is the same as password in the db
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

  res.status(200).json({ user });
};
