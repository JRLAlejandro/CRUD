var express      = require("express"),
    http         = require("http"),
    bodyParser   = require("body-parser"),
    cookieParser = require("cookie-parser"),
    jade         = require("jade");

var app = express();
var server = http.createServer(app);

//template
app.set("view engine", "jade");
app.set("views", __dirname+"/app/views");

app.use(express.static(__dirname+"/public"));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(cookieParser());

var homeController = require(__dirname+"/app/controllers/home");
var createController = require(__dirname+"/app/controllers/create");
var deleteController = require(__dirname+"/app/controllers/delete");
var updateController = require(__dirname+"/app/controllers/update")

homeController(app);
createController(app);
deleteController(app);
updateController(app);

server.listen(3000);
console.log("server running in port 3000");