var Person = require("../models/person");

var homeController = function(app)
{
    console.log("homeController is load");
    
    app.get("/", function (req, res)
    {
    	Person.find()
        .sort({ nombre: 1 })
    	.exec(function (error, personas)
    	{
    		if(error)
    		{
    			res.status(500).render("500");
    		}
    		res.render("home", {personas: personas});
    	});
		
    });

    app.get("/crear", function (req, res)
    {
		res.render("crear");
    });

    app.get("/detalle/:id", function (req, res)
    {

    	var id = req.params.id;
        
    	Person
    	.findOne({nombre:id})
    	.exec(function (error, person)
    	{
    		if(error)
    		{
    			res.status(500).render("500");
    		}
    		if(person == null)
    		{
    			res.status(400).render("404");
    		}
    		else
    		{
    			res.render("detalle", {person:person});
    		}
    	});

    });
};

module.exports = homeController;