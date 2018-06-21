console.log("Pagina Lista")
    //oggetto Json= le proprietà(name,age,..) necessitano di apici
    // Javascript= le proprietà(name,age,..) NON necessitano di apici

var Person = {
    "name": "Pippo",
    "age": 24,
    "children": [{
            "name": "ginetto",
            "age": 4,
        },
        {
            "name": "pipino",
            "age": 4
        }
    ],
    "partner": {
        "name": "Bilbo",
        "age": 25,
    }
}
console.log(Person.name, Person.children[0].name)