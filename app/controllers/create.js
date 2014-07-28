var Persona = require("../models/person");

var createController = function(app)
{
    console.log("createController is");

    app.post("/create/user", function (req, res)
    {
		var person = new Persona({
			nombre 		 : req.body.nombre,
			apellido	 : req.body.apellido,	
			edad 		 : req.body.edad,
			ciudad		 : req.body.ciudad,
			especialidad : req.body.especialidad
		});

		person.save(function (error, person)
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

module.exports = createController;