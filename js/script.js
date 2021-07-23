(function(){
    // variables
    var txtTarea = document.getElementById("txtTarea");
    var btn_agregar = document.getElementById("btn_agregar");
    var ulLista = document.getElementById("ul_lista");

    // Eventos
    recorrerLista();
    btn_agregar.addEventListener("click",agregarNuevaTarea);
    
    
    txtTarea.addEventListener("click",comprobarInput);

    
    // Funciones    

    function agregarNuevaTarea(){
        var valorTxtTarea = txtTarea.value;
        //console.log(tarea);
        var nuevaLista = document.createElement("li");
        var enlace = document.createElement("a");
        var contenidoDelTxtTarea = document.createTextNode(valorTxtTarea);

        if (valorTxtTarea === "") {
            txtTarea.setAttribute("placeholder","Agrega una tarea valida");
            //txtTarea.setAttribute("class","error"); // Es lo mismo que el class name
            txtTarea.className = "error";
            return false; // de esta manera nos salimos de la función agregar tarea
        }

        enlace.appendChild(contenidoDelTxtTarea); // ponemos el contenido adentro del enlace
        enlace.setAttribute("href","#")

        nuevaLista.appendChild(enlace); // ponemos el enlace A adentro de la lista

        ulLista.appendChild(nuevaLista);

        txtTarea.value = ""; // limpiamos el input

        recorrerLista();
    }

    function recorrerLista(){
        for (let i = 0; i < ulLista.children.length; i++) {
            ulLista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    }

    function comprobarInput(){
        txtTarea.className = "";
        txtTarea.setAttribute("placeholder","Agrega tu tarea");
    }

}());