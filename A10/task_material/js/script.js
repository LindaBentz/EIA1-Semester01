var aufgabenArray = [];
var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
/* Hinzufügen zweier neuen Variablen*/
var openDOMElement;
var doneDOMElement;
window.addEventListener("load", function () {
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + aufgabenArray[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + aufgabenArray[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = 0; index < aufgabenArray.length; index++) {
        _loop_1(index);
    }
    /* Funktion für die insgesamten, offenen und erledigten Aufgaben */
    updateCounter();
    opencounter();
    donecounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = aufgabenArray.length + " in total";
}
function opencounter() {
    var counterOffen = 0;
    for (var index = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == false)
            counterOffen++;
    }
    openDOMElement.innerHTML = counterOffen + " open";
}
function donecounter() {
    var counterErledigt = 0;
    for (var index = 0; index < aufgabenArray.length; index++) {
        if (aufgabenArray[index].todosChecked == true)
            counterErledigt++;
        console.log(aufgabenArray);
    }
    doneDOMElement.innerHTML = counterErledigt + " done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        /* Hinzufügen einer neuen Aufgabe */
        aufgabenArray.push({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    /* todosChecked[index] = !todosChecked[index]; */
    aufgabenArray[index].todosChecked = !aufgabenArray[index].todosChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    /* Löschen einer Stelle im Array */
    aufgabenArray.splice(index, 1);
    drawListToDOM();
}
window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=script.js.map