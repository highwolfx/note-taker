var express = require("express");
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./routes/api")(app);
require("./routes/html")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});