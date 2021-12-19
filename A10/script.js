//Nur Kommentare zur neuen Aufgabe hinzugefügt
var Aufgabe10;
(function (Aufgabe10) {
    var todosArray = [
        {
            text: "Lorem",
            checked: true
        },
        {
            text: "Ipsum",
            checked: false
        },
        {
            text: "Dolor",
            checked: false
        }
    ];
    var inputDOMElement;
    var addButtonDOMElement;
    var todosDOMElement;
    // Variablen für COunter und Sprachsteuerung hinzugefügt
    var counterDOMElement;
    var open;
    var donecounter;
    var artyomaktiv = false;
    window.addEventListener("load", function () {
        inputDOMElement = document.querySelector("#eingabe");
        addButtonDOMElement = document.querySelector("#addTask");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");
        open = document.querySelector("#open");
        donecounter = document.querySelector("#done");
        addButtonDOMElement.addEventListener("click", function () {
            addTodo(inputDOMElement.value);
        });
        drawListToDOM();
    });
    function drawListToDOM() {
        todosDOMElement.innerHTML = "";
        var _loop_1 = function (index) {
            var todo = document.createElement("div");
            todo.classList.add("todo");
            todo.innerHTML = "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                + todosArray[index].text +
                "<span class='trash fas fa-trash-alt'></span>";
            todo.querySelector(".check").addEventListener("click", function () {
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function () {
                deleteTodo(index);
            });
            todosDOMElement.appendChild(todo);
            var key = inputDOMElement.value;
            var storageValue = inputDOMElement.value;
            localStorage.setItem(key, storageValue);
        };
        for (var index = 0; index < todosArray.length; index++) {
            _loop_1(index);
        }
        updateCounter();
    }
    //Anlegen von Variablen done und OpenTask für Counter: Auf Indexseite schon eine Aufgabe abgehakt
    var done = 1;
    var openTask = 2;
    //Funktion für .. done; .. open; 
    function updateCounter() {
        counterDOMElement.innerHTML = todosArray.length + " in total";
        open.innerHTML = openTask + " tasks open";
        donecounter.innerHTML = done + " tasks done";
    }
    function addTodo(text) {
        if (inputDOMElement.value != "") {
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            inputDOMElement.value = "";
            openTask++;
            drawListToDOM();
        }
        // Neue Aufgabe wird hizugefügt durch Sprachsteuerung
        if (artyomaktiv == true) {
            todosArray.unshift({
                text: text,
                checked: false
            });
            artyomaktiv = false;
            openTask++;
            drawListToDOM();
        }
    }
    function toggleCheckState(index) {
        if (todosArray[index].checked == true) {
            todosArray[index].checked = false;
            done--;
            openTask++;
        }
        else if (todosArray[index].checked == false) {
            todosArray[index].checked = true;
            done++;
            openTask--;
        }
        drawListToDOM();
    }
    function deleteTodo(index) {
        if (todosArray[index].checked == true) {
            done--;
        }
        else if (todosArray[index].checked == false) {
            openTask--;
        }
        todosArray.splice(index, 1);
        drawListToDOM();
    }
    //Einbinden von Artyom in ToDo Liste
    window.addEventListener("load", function () {
        var artyom = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i, wildcard) {
                artyomaktiv = true;
                addTodo(wildcard);
            }
        });
        document.querySelector("#record").addEventListener("click", function () {
            artyom.dontObey();
            artyom.initialize({
                lang: "de-DE"
            });
            setTimeout(function () {
                artyom.obey();
            }, 8000);
            startArtyom();
        });
        function startArtyom() {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true,
                speed: 1
            });
        }
    });
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=script.js.map