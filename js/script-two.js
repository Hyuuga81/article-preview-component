$(document).ready(function() {
    $(".share").on("click", function() {
        $(".overlay").toggleClass("hide");
    });
    
    $(".share-dark").on("click", function() {
        $(".overlay").addClass("hide");
    });
});