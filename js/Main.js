//console.log("Start");

jQuery(document).ready(function() {
    //console.log("ready")

    jQuery("#btnCreateBox").on("click", createBox)









    var lista = jQuery("#list");
    //console.log(lista);

    var homeMenu = jQuery("#myMenu .active a").css("color")
    console.log(homeMenu);

    function createBox() {
        var $newBox = jQuery("<div class='box'>Ciao sono un box</div>")

        var theClass = getColor()
        console.log("il nuovo colore è", theClass);

        $newBox
            .addClass(theClass)
            .text("Ciaoooooooooooooooooooooooooooooooooooooooooooo")
            .appendTo(".titolo")

        $newBox.clone().text("Box 3")
        $newBox.appendTo(".container")
    }

    function getColor() {
        var num = Math.round(Math.random());

        if (num === 0)
            return "blu";
        else
            return "orange";
    }
    //createBox()
})