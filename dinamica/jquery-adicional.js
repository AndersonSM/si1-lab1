/**
 * Created by Anderson Sales on 23/10/2014.
 */

$(document).ready(function(){
    $("#adicionar").click(function(){
        $("#temaTxt").val("");
    });

    $(".close").click(function(){
        $("#successPanel").fadeOut("slow");
    });

    $("#showHide1").click(function(){
        $("#aprenderList").slideToggle();
    });

    $("#showHide2").click(function(){
        $("#aprendidosList").slideToggle();
    });

});
