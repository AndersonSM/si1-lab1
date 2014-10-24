/**
 * Created by Anderson Sales on 20/10/2014.
 */

var aprendizagem = angular.module('aprendizagem', []);
var confirmation;
var CONFIRMATION = "Deseja realmente remover todos os temas desta lista?";
var NENHUM_TEMA = "Nenhum tema adicionado.";
var aprendidosNenhum = {col: "aprendidos", tema: "Nenhum tema adicionado."};
var aprenderNenhum = {col: "aprender", tema: "Nenhum tema adicionado."};

aprendizagem.controller('aprendizagemListCtrl', function ($scope) {
    //listas das colunas
    $scope.aprendidos = [];
    $scope.aprendidos.push(aprendidosNenhum);

    $scope.aprender = [];
    $scope.aprender.push(aprenderNenhum);

    //quantidade de temas adicionados em cada coluna
    $scope.qtdAprendidos = 0;
    $scope.qtdAprender = 0;

    //valor do radio button para selecionar a coluna
    $scope.coluna = "aprender";

    //verifica se determinada lista está vazia
    $scope.isEmpty = function(lista){
        if(lista == "aprender"){
            if($scope.aprender.length == 1 && $scope.aprender[0].tema == aprenderNenhum.tema){
                return true;
            }
        } else {
            if($scope.aprendidos.length == 1 && $scope.aprendidos[0].tema == aprendidosNenhum.tema){
                return true;
            }
        }
        return false;
    }

    //remove todos os itens da lista A aprender
    $scope.removerAprender = function(){
        if($scope.isEmpty("aprender")){
            alert(NENHUM_TEMA);
        } else {
            confirmation = confirm(CONFIRMATION);
            if (confirmation) {
                $scope.zerarLista("aprender");
            }
        }
    };

    //remove todos os itens da lista Aprendidos
    $scope.removerAprendidos = function(){
        if($scope.isEmpty("aprendidos")){
            alert(NENHUM_TEMA);
        } else {
            confirmation = confirm(CONFIRMATION);
            if (confirmation) {
                $scope.zerarLista("aprendidos");
            }
        }
    };

    //adiciona um tema, depende do valor da var coluna.
    $scope.addTema = function(){
        //se coluna for "a aprender", add o tema na lista determinada
        if($scope.newTema !== "" && $scope.newTema != undefined) {
            if ($scope.coluna == "aprender") {
                //se o tamanho da lista for 1 e o tema for "Nenhum add", eu excluo ele
                if($scope.isEmpty("aprender")){
                    $scope.aprender.pop();
                }
                $scope.aprender.push({col: "aprender", tema: $scope.newTema});
                $scope.qtdAprender++;
                //se coluna for "tema aprendido", add o tema na lista determinada
            } else {
                //se o tamanho da lista for 1 e o tema for "Nenhum add", eu excluo ele
                if($scope.isEmpty("aprendidos")){
                    $scope.aprendidos.pop();
                }
                $scope.aprendidos.push({col: "aprendidos", tema: $scope.newTema});
                $scope.qtdAprendidos++;
            }
            $scope.newTema = "";
        } else {
            alert("Digite um tema válido.");
        }
    };

    //remove ou troca o tema de coluna
    $scope.mudaTema = function(item){
        //se o tema selecionado for "Nenhum add", alerta
        if(item.tema == aprenderNenhum.tema || item.tema == aprendidosNenhum.tema) {
            alert(NENHUM_TEMA);
        // TROCA DE COLUNA
        } else {
            if(item.col=="aprendidos"){
                if($scope.isEmpty("aprender")){
                    $scope.aprender.pop();
                }
                item.col = "aprender";
                $scope.aprender.push(item);
                $scope.aprendidos.splice($scope.aprendidos.indexOf(item),1);
                $scope.qtdAprendidos--;
                $scope.qtdAprender++;
                if($scope.aprendidos.length==0){
                    $scope.aprendidos.push(aprendidosNenhum);
                }

            } else {
                if($scope.isEmpty("aprendidos")){
                    $scope.aprendidos.pop();
                }
                item.col = "aprendidos";
                $scope.aprendidos.push(item);
                $scope.aprender.splice($scope.aprender.indexOf(item),1);
                $scope.qtdAprender--;
                $scope.qtdAprendidos++;
                if($scope.aprender.length==0){
                    $scope.aprender.push(aprenderNenhum);
                }
            }
        }

        $scope.removeTema = function(item){
            if(item.tema == aprenderNenhum.tema || item.tema == aprendidosNenhum.tema) {
                alert(NENHUM_TEMA);
            } else {
                if (item.col == "aprendidos") {
                    $scope.aprendidos.splice($scope.aprendidos.indexOf(item), 1);
                    $scope.qtdAprendidos--;
                    if ($scope.aprendidos.length == 0) {
                        $scope.aprendidos.push(aprendidosNenhum);
                    }
                } else {
                    $scope.aprender.splice($scope.aprender.indexOf(item), 1);
                    $scope.qtdAprender--;
                    if ($scope.aprender.length == 0) {
                        $scope.aprender.push(aprenderNenhum);
                    }
                }
            }
        }


        $scope.zerarLista = function(lista){
            if(lista == "aprender"){
                $scope.aprender = [];
                $scope.aprender.push(aprenderNenhum);
                $scope.qtdAprender = 0;
            } else {
                $scope.aprendidos = [];
                $scope.aprendidos.push(aprendidosNenhum);
                $scope.qtdAprendidos = 0;
            }
        }

      /* ARRAYS CONSOLE LOG
       *
        for(i=0; i < $scope.aprender.length; i++) {
            console.log($scope.aprender[i].tema);
        }
        console.log("----------")
        for(i=0; i < $scope.aprendidos.length; i++) {
            console.log($scope.aprendidos[i].tema);
        }
        console.log("\n")*/
    };
});
