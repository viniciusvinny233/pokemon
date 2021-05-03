    function recarregarPagina(){
        document.location.reload();
    }

    function btn1(){

    document.getElementById("final").innerHTML = "Você errou!";
    window.setTimeout(recarregarPagina, 2000);
    
    }

    function btn2(){

        document.getElementById("final").innerHTML = "Você errou!";
        window.setTimeout(recarregarPagina, 2000);
    }

    function btn3(){

        document.getElementById("final").innerHTML = "Você acertou!!!";
    }
    function btn4(){

        document.getElementById("final").innerHTML = "Você errou!";
        window.setTimeout(recarregarPagina, 2000);

    }
