//Nur Kommentare zur neuen Aufgabe hinzugefügt

namespace Aufgabe10 { 

    

     interface TodoInterface {
        text: string;
        checked: boolean;
    }
    
     let todosArray: TodoInterface[] = [
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
    
    
     let inputDOMElement: HTMLInputElement; 
     let addButtonDOMElement: HTMLElement;
     let todosDOMElement: HTMLElement;
     // Variablen für COunter und Sprachsteuerung hinzugefügt
     let counterDOMElement: HTMLElement;
     let open: HTMLElement;
     let donecounter: HTMLElement;
     let artyomaktiv: boolean = false;
    
   
     window.addEventListener("load", function(): void {
    
        
        inputDOMElement = document.querySelector("#eingabe");
        addButtonDOMElement = document.querySelector("#addTask");
        todosDOMElement = document.querySelector("#todos");
        counterDOMElement = document.querySelector("#counter");


        open = document.querySelector("#open");
        donecounter = document.querySelector("#done");
        
        addButtonDOMElement.addEventListener("click", function(): void {
            addTodo(inputDOMElement.value);
        });
    
      
        drawListToDOM();
    });
    
     function drawListToDOM(): void {
        
        todosDOMElement.innerHTML = "";
    
        for (let index: number = 0; index < todosArray.length; index++) {
    
            
            let todo: HTMLElement = document.createElement("div");
            todo.classList.add("todo");
    
           
            todo.innerHTML =  "<span class='check " + todosArray[index].checked + "'><i class='fas fa-check'></i></span>"
                                + todosArray[index].text +
                                "<span class='trash fas fa-trash-alt'></span>";
    
            todo.querySelector(".check").addEventListener("click", function(): void {
      
                toggleCheckState(index);
            });
            todo.querySelector(".trash").addEventListener("click", function(): void {
        
                deleteTodo(index);
            });
    
            todosDOMElement.appendChild(todo);
            
            
            const key: string = inputDOMElement.value;
            const storageValue: string = inputDOMElement.value;
            localStorage.setItem(key, storageValue);
        }
    
        updateCounter();
    }
    //Anlegen von Variablen done und OpenTask für Counter: Auf Indexseite schon eine Aufgabe abgehakt
     var done: number = 1;
     var openTask: number = 2;
    
    //Funktion für .. done; .. open; 
     function updateCounter(): void {
        counterDOMElement.innerHTML = todosArray.length + " in total";
        open.innerHTML = openTask + " tasks open";
        donecounter.innerHTML = done + " tasks done";
    }
    
   
     function addTodo(text: string): void {
        
        if (inputDOMElement.value != "") {
            
            todosArray.unshift({
                text: inputDOMElement.value,
                checked: false
            });
            
            inputDOMElement.value = "";
    
           
            openTask ++;
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
    
    
     function toggleCheckState(index: number): void {
    
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
    
    
     function deleteTodo(index: number): void {
     
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
    
     window.addEventListener("load", function(): void {
        const artyom: any = new Artyom();
        artyom.addCommands({
            smart: true,
            indexes: ["Erstelle Aufgabe *"],
            action: function (i: any, wildcard: string): void {
                artyomaktiv = true;
                addTodo(wildcard);
            }
        });
    
        document.querySelector("#record").addEventListener("click", function(): void {
            artyom.dontObey();
            artyom.initialize({
                lang: "de-DE"
            });
            setTimeout(function (): void {
                artyom.obey();
            },         8000);
            startArtyom();
        });
        function startArtyom(): void {
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
    }