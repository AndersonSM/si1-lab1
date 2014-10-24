/**
 * Created by Anderson Sales on 23/10/2014.
 */

$(document).ready(function(){
    $("#adicionar").click(function(){
        $("#temaTxt").val("");
    });

    $("#close1").click(function(){
        $("#successPanel").fadeOut("slow");
    });

    $("#close2").click(function(){
        $("#warningPanel").fadeOut("slow");
    });

    $("#showHide1").click(function(){
        $("#aprenderList").slideToggle();
    });

    $("#showHide2").click(function(){
        $("#aprendidosList").slideToggle();
    });

});
