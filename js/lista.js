console.log("Pagina Lista")
    //oggetto Json= le proprietà(name,age,..) necessitano di apici
    // Javascript= le proprietà(name,age,..) NON necessitano di apici
var SERVICE_URL = "http://jsonplaceholder.typicode.com";
var API_KEY = "AIzaSyADsJpLGHyv3kKZVCJQQ3BLjLscAl_Jjs0";
var YOUTUBE_URL = "https://www.googleapis.com/youtube/v3/search";
jQuery(document).ready(function($) {
        //La pagina è completamente carica e jQuery è pronto!
        //jQuery == $
        console.log("READY!")
            //console.log("arguments", arguments)

        // $("#loadingBar").hide(); //nascondo la barra di caricamento
        //$("#usersTable").hide(); //nascondo la tabella


        $("#searchBtn")
            .click(function(event) {
                console.log("Click");
                // getUsers();
                var search = $("#searchInput").val();
                var maxResults = $("#searchLimit").val();

                getVideos(search);
            })


        function getUsers() {

            $("#loadingBar").fadeIn(); //mostro il caricamento
            $("#emptyContent").fadeOut(); //tolto il contenuto iniziale vuoto

            console.log("chiamo getUsers");
            $.getJSON(SERVICE_URL + "/users", function(response) {
                var users = response;
                console.log("USERS", users);
                fillTable(users);
            })
        }

        function getVideos(search, maxResults) {

            $("#loadingBar").fadeIn(); //mostro il caricamento
            $("#emptyContent").fadeOut(); //tolto il contenuto iniziale vuoto


            console.log("chiamo getVideos");
            $.getJSON(YOUTUBE_URL, {
                    "part": "snippet",
                    "key": API_KEY,
                    "maxResults": maxResults || 5,
                    "q": search
                },

                function(response) {
                    var videos = response.items;
                    console.log("VIDEOS", videos);
                    fillTable(videos);
                })
        }

        function fillTable(arrayData) {

            var $tableBody = $("#usersTable tbody")

            $tableBody.html(""); //ripulisco il contenuto del tbody
            //$tableBody.empty("");

            $.each(arrayData, function(index, video) {
                    console.log(index, video);

                    //creo una nuova riga vuota
                    var newRow = jQuery("<tr></tr>");
                    //Inserisco dentro la riga vuota un tag td con il valore che voglio <td>VALORE</td>
                    newRow.append("<td>" + video.id.videoId + "</td>"); //id
                    newRow.append("<td>" + video.snippet.title + "</td>") //name
                    newRow.append("<td><img src='" + video.snippet.thumbnails.default.url + "'/></td>") //email


                    //append la riga alla tabella
                    $tableBody.append(newRow)

                })
                //ha riempito la tabella con tutte le righe;


            //ritardo MANUALMENTE SOLO per TEST, 
            setTimeout(
                function() {
                    $("#loadingBar").fadeOut(); // faccio scomparire il loading
                    $("#usersTable").fadeIn(); // mostro la tabella
                },
                0 * 1000 //tempo in millisendi;
            )

        }
        // Eventi del campo di input di ricerca
        $("#searchInput").keypress(function() {
                console.log("tasto premuto", event.key, event.keyCode)
                    //se ho premuto enter keyCode=13
                if (event.keyCode === 13) {
                    var search = $(this).val();
                    getVideos(search);
                }
            }).focus(function() {
                $(this).addClass("inputFocus")
                console.log("Focus")
            })
            .blur(function() {
                $(this).removeClass("inputFocus")
            })








    }) //Fine ready