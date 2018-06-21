console.log("Pagina Lista")
    //oggetto Json= le proprietà(name,age,..) necessitano di apici
    // Javascript= le proprietà(name,age,..) NON necessitano di apici
var SERVICE_URL = "http://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyADsJpLGHyv3kKZVCJQQ3BLjLscAl_Jjs0";
var YOUTUBE_url = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyADsJpLGHyv3kKZVCJQQ3BLjLscAl_Jjs0";
jQuery(document).ready(function($) {
        //la pagina è completamente carica e jQuery è pronto!
        //jQuery==$
        console.log("READY!")
            //console.log("Arguments", arguments)


        //$("#loadingBar").hide(); //nascondo la barra di caricamento
        //$("#usersTable").hide(); //nascondo la tabella


        $("#searchBtn").click(function() {
                console.log("Click");
                getUsers();
            })
            .css("color", "red")

        function getUsers() {
            $("#loadingBar").fadeIn(); //mostro la barra di caricamento
            $("#usersTable").fadeOut(); //mostro la tabella
            console.log("chiamo getUsers")

            $.getJSON(SERVICE_URL + "/users", function(response) {
                var users = response;
                console.log("Users", response)
                fillTable(users);
            })
        }

        function fillTable(arrayData) {
            var $tableBody = $("#usersTable tbody")
            $tableBody.html("")
            $.each(arrayData, function(index, user) {
                    console.log(index, user)
                        //creo una nuova riga vuota
                    var newRow = jQuery("<tr/>")
                        //inserisco dentro la riga vuota un tag td con il valore che voglio <td>VALORE</td>
                    newRow.append("<td>" + user.id + "</td>"); //id
                    newRow.append("<td>" + user.name + "</td>"); //name
                    newRow.append("<td>" + user.email + "</td>"); //email
                    newRow.append("<td>" + user.username + "</td>"); //username
                    $tableBody.append(newRow)
                })
                //ritardo manualmente solo per il test

            setTimeout(function() {
                $("#loadingBar").hide();
                $("#usersTable").show();
            }, 2 * 1000)
        }







    }) //Fine Ready
console.log("Fine lista...!")