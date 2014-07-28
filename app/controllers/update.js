var Person = require("../models/person");

var updateController = function(app)
{
	console.log("updateController is load");

	app.get("/update/:id", function (req, res)
	{
		var id = req.params.id;

		Person
		.findOne({nombre : id})
		.exec(function (error, person)
		{
			if (error)
			{
				res.status(500).render("500");
			}
			if(person == null)
			{
				res.status(400).render("404");
			}
			else
			{
				res.render("actualizar", {person: person});
			}
		});
	});

	app.post("/actualizar/:id", function (req, res)
	{
		var id = req.params.id;
		var body = req.body;

		Person
		.findByIdAndUpdate(id, body, function (error, person)
		{
			if(error)
			{
				res.status(500).render("500");
			}
			else
			{
				res.redirect("/");
			}
		});
	});

};

module.exports = updateController;