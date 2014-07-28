var models = require("./models"),
    Schema = models.Schema;

var personaSchema  = Schema({
    nombre       : { type : String, required: true },
    apellido     : { type : String, required: true },
    edad         : { type : Number, required: true },
    ciudad       : { type : String, required: true },
    especialidad : { type : String, required: true },
});

var Persona = models.model("persona", personaSchema);

module.exports = Persona;
