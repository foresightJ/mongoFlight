const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',{
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
