console.log("Pagina Lista")
    //oggetto Json= le proprietà(name,age,..) necessitano di apici
    // Javascript= le proprietà(name,age,..) NON necessitano di apici
var SERVICE_URL = "http://jsonplaceholder.typicode.com";
jQuery(document).ready(function($) {
        //la pagina è completamente carica e jQuery è pronto!
        //jQuery==$
        console.log("READY!")
            //console.log("Arguments", arguments)

        $("#searchBtn").click(function() {
                console.log("Click");
                getUsers();
            })
            .text("Ciao bello!")
            .css("color", "red")
            .click();

        function getUsers() {
            console.log("chiamo getUsers")

            $.getJSON(SERVICE_URL + "/users", function(response) {
                var users = response;
                console.log("Users", response)
                fillTable(users);
            })
        }

        function fillTable(users) {
            $.each(users, function(index, user) {
                console.log(index, user)
            })
        }







    }) //Fine Ready
console.log("Fine lista...!")