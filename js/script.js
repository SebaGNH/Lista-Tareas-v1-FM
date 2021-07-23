(function(){
    // variables
    var tareaInput = document.getElementById("tareaInput");
    var btn_agregar = document.getElementById("btn-agregar");
    var lista = document.getElementById("lista");

    // Eventos
    recorrerLista();
    btn_agregar.addEventListener("click",(param) => {
            var tarea = tareaInput.value;
            //console.log(tarea);
            var nuevaTarea = document.createElement("li");
            var enlace = document.createElement("a");
            var contenido = document.createTextNode(tarea);

            if (tarea === "") {
                tareaInput.setAttribute("placeholder","Agrega una tarea valida");
                //tareaInput.setAttribute("class","error"); // Es lo mismo que el class name
                tareaInput.className = "error";
                return false; // de esta manera nos salimos de la función agregar tarea
            }

            enlace.appendChild(contenido); // ponemos el contenido adentro del enlace
            enlace.setAttribute("href","#")

            nuevaTarea.appendChild(enlace); // ponemos el enlace A adentro de la lista

            lista.appendChild(nuevaTarea);

            tareaInput.value = ""; // limpiamos el input

            recorrerLista();
        });
    
    
    tareaInput.addEventListener("click", (param) => {
        comprobarInput();
        } );

    
    // Funciones    
    function recorrerLista(){
        for (let i = 0; i < lista.children.length; i++) {
            lista.children[i].addEventListener("click", function(){
                this.parentNode.removeChild(this);
            });
        }
    }

    var comprobarInput = function(){
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder","Agrega tu tarea");
    }

}());