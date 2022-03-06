const mongoose = require("mongoose");
mongoose
  .connect(process.env.STRING_CONNECTION, {
    UseNewUrlParser: true,
    useunifiedtopology: true,
  })
  .then((response) => console.log("content to 8000 prot, connect to DB "))
  .catch((error) => console.log(error));
module.exports = mongoose.connection;
