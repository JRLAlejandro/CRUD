var Person = require("../models/person");

var deleteController = function(app)
{
	console.log("deleteController is load");

	app.get("/eliminar/:id", function (req, res)
	{
		var id = req.params.id;

		Person
		.findByIdAndRemove(id, function (error, person)
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

module.exports = deleteController;