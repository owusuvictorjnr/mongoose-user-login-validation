const { connect } = require('mongoose');

async function dbConnect() {
  try {
    await connect('mongodb://127.0.0.1:27017', {
      dbName: 'Shop',
    });
    console.log('Database connect successfully');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

module.exports = {
  dbConnect,
};
