fileVizApp = angular.module('fileVizApp', ['ngResource', 'ngRoute', 'ui.bootstrap']);

angular.element(document).ready(function() {
    if(canGame()) {

        var prompt = "To begin using your gamepad, connect it and press any button!";
        $("#gamepadPrompt").text(prompt);

        $(window).on("gamepadconnected", function() {
            $("#gamepadPrompt").html("Gamepad connected!");
            console.log("connection event");
        });

        $(window).on("gamepaddisconnected", function() {
            console.log("disconnection event");
            $("#gamepadPrompt").text(prompt);
        });

    }
    
    $().get('#');
    
    $(document).on("keydown", function(e) {
          if (e.keyCode == 87 || e.keyCode == 119) {
           // Do it
            var currSelected = $(".gamebutton[selected='true'");
            currSelected.attr("selected", "false");
            currSelected.next().attr("selected", "true");
            
          }
     });
    
    $('.gamebutton').first().attr("selected", "true");
    
});



function canGame() {
    return "getGamepads" in navigator;
}