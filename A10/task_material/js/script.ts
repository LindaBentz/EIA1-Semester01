

interface Aufgaben {
    todosText: string;
    todosChecked: boolean;
}

let aufgabenArray: Aufgaben[] = []; 

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;

/* Hinzufügen zweier neuen Variablen*/

var openDOMElement: HTMLElement;
var doneDOMElement: HTMLElement;

window.addEventListener("load", function(): void {
    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");

    addButtonDOMElement.addEventListener("click", addTodo);
 
    drawListToDOM();
});

function drawListToDOM(): void {

    todosDOMElement.innerHTML = "";
 
    for (let index: number = 0; index < aufgabenArray.length; index++) {
 
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");
 
        todo.innerHTML =  "<span class='check " + aufgabenArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                             + aufgabenArray[index].todosText +
                             "<span class='trash fas fa-trash-alt'></span>";
 
        todo.querySelector(".check").addEventListener("click", function(): void {

            toggleCheckState(index);
        });
         todo.querySelector(".trash").addEventListener("click", function(): void {
            
            deleteTodo(index);
        });
        
        todosDOMElement.appendChild(todo);
    }

    /* Funktion für die insgesamten, offenen und erledigten Aufgaben */

    updateCounter();
    opencounter();
    donecounter();
}
 
function updateCounter(): void {
    counterDOMElement.innerHTML = aufgabenArray.length + " in total";
}

function opencounter(): void {
    let counterOffen: number = 0;
    for (let index: number = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == false)
        counterOffen++;
    }
    openDOMElement.innerHTML = counterOffen + " open";
}

function donecounter(): void {
    let counterErledigt: number = 0;
    for (let index: number = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == true)
        counterErledigt++;

        console.log(aufgabenArray);
    }
    doneDOMElement.innerHTML = counterErledigt + " done";
}

function addTodo(): void {
    if (inputDOMElement.value != "") {

        /* Hinzufügen einer neuen Aufgabe */

        aufgabenArray.push ({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        
        inputDOMElement.value = "";

        drawListToDOM();
    }
}
 
function toggleCheckState(index: number): void {

    /* todosChecked[index] = !todosChecked[index]; */

    aufgabenArray[index].todosChecked = !aufgabenArray[index].todosChecked;
    
    drawListToDOM();
}

function deleteTodo(index: number): void {
    
    /* Löschen einer Stelle im Array */

    aufgabenArray.splice(index, 1);

    drawListToDOM();
 }

 declare var Artyom: any;

window.addEventListener("load", function(): void {
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();
    
});