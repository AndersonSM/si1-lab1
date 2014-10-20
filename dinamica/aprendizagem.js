var aprendizagem = angular.module('aprendizagem', []);

aprendizagem.controller('aprendizagemListCtrl', function ($scope) {
    //listas das colunas
    $scope.aprendidos = [{col: "aprendidos", tema: "Nenhum tema adicionado."}];
    $scope.aprender = [{col: "aprender", tema: "Nenhum tema adicionado."}];
    //default vars pra nenhum tema adicionado
    $scope.aprendidosNenhum = {col: "aprendidos", tema: "Nenhum tema adicionado."};
    $scope.aprenderNenhum = {col: "aprender", tema: "Nenhum tema adicionado."};
    //quantidade de temas adicionados em cada coluna
    $scope.qtdAprendidos = 0;
    $scope.qtdAprender = 0;
    //valor do radio button para selecionar a coluna
    $scope.coluna = "aprender";

    //adiciona um tema, depende do valor da var coluna.
    $scope.addTema = function(){
        //se coluna for "a aprender", add o tema na lista determinada
        if($scope.coluna == "aprender"){
            //se o tamanho da lista for 1 e o tema for "Nenhum add", eu excluo ele
            if($scope.aprender.length==1 && $scope.aprender[0].tema == $scope.aprenderNenhum.tema){
                $scope.aprender.pop();
            }
            $scope.aprender.push({col:"aprender", tema:$scope.newTema});
            $scope.qtdAprender++;
        //se coluna for "tema aprendido", add o tema na lista determinada
        } else {
            //se o tamanho da lista for 1 e o tema for "Nenhum add", eu excluo ele
            if($scope.aprendidos.length==1 && $scope.aprendidos[0].tema == $scope.aprendidosNenhum.tema){
                $scope.aprendidos.pop();
            }
            $scope.aprendidos.push({col:"aprendidos", tema:$scope.newTema});
            $scope.qtdAprendidos++;
        }
    };

    //remove ou troca o tema de coluna
    $scope.removeTema = function(item){
        //se o tema selecionado for 'nulo', alerta
        if($scope.action == undefined) {
            alert("Você deve selecionar uma ação");
        //se o tema selecionado for "Nenhum add", alerta
        } else if(item.tema == $scope.aprenderNenhum.tema || item.tema == $scope.aprendidosNenhum.tema) {
            alert("Nenhum tema foi adicionado.");

        // TROCA DE COLUNA
        } else {
            if($scope.action == "change"){
                if(item.col=="aprendidos"){
                    if($scope.aprender.length==1 && $scope.aprender[0].tema == $scope.aprenderNenhum.tema){
                        $scope.aprender.pop();
                    }
                    item.col = "aprender";
                    $scope.aprender.push(item);
                    $scope.aprendidos.splice($scope.aprendidos.indexOf(item),1);
                    $scope.qtdAprendidos--;
                    $scope.qtdAprender++;
                    if($scope.aprendidos.length==0){
                        $scope.aprendidos.push($scope.aprendidosNenhum);
                    }

                } else {
                    if($scope.aprendidos.length==1 && $scope.aprendidos[0].tema == $scope.aprendidosNenhum.tema){
                        $scope.aprendidos.pop();
                    }
                    item.col = "aprendidos";
                    $scope.aprendidos.push(item);
                    $scope.aprender.splice($scope.aprender.indexOf(item),1);
                    $scope.qtdAprender--;
                    $scope.qtdAprendidos++;
                    if($scope.aprender.length==0){
                        $scope.aprender.push($scope.aprenderNenhum);
                    }
                }

            // REMOVE
            } else {
                if(item.col=="aprendidos"){
                    $scope.aprendidos.splice($scope.aprendidos.indexOf(item),1);
                    $scope.qtdAprendidos--;
                    if($scope.aprendidos.length==0){
                        $scope.aprendidos.push($scope.aprendidosNenhum);
                    }
                } else {
                    $scope.aprender.splice($scope.aprender.indexOf(item),1);
                    $scope.qtdAprender--;
                    if($scope.aprender.length==0){
                        $scope.aprender.push($scope.aprenderNenhum);
                    }
                }
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
