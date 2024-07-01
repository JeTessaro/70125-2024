class Persona{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }
    static specie = "Humano";

    saludar = () => {
        console.log(`Hola soy ${this.name}, mucho gusto`);
    }

    getName = () => {
        console.log(`Me llamo ${this.name}`);
    }

    saludar = () => {
        console.log(`Cahu, nos vemos`);
    }
}

const juan = new Persona("Juan", "Bida"); 
const lucia = new Persona("Lucia", "martinez"); 

lucia.getName(); 
juan.getName(); 

console.log(Persona.specie); //Porque es static puedo acceder

console.log(lucia.name);


