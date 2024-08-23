const mongoose = require('mongoose');

// Connection to MongoDB
mongoose.connect('mongodb+srv://kmrchandan006:chandan%40123@cluster0.dqtnskf.mongodb.net/EmployeeDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB Connection Succeeded.'))
  .catch((err) => console.log('Error in DB connection: ' + err));

// Requiring the employee model
require('./employee.model');



