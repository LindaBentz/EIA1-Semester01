
window.addEventListener("load", function(): void {
// Variablendeklaration //

    const eingabe: HTMLInputElement = document.querySelector("#eingabe") as HTMLInputElement;
    const liste: HTMLElement = document.querySelector("#ul");
    const addTask: HTMLElement = document.querySelector("#addTask");
    let zaehler: number = 0;

    /* Neue Aufgabe */



    addTask.addEventListener("click", function(): void {
        
        
        let aufgaben: HTMLLIElement = document.createElement("li");
        aufgaben.innerHTML = eingabe.value;
        liste.appendChild(aufgaben); 
        eingabe.value = "";
        zaehler = zaehler + 1;
        document.querySelector("h2").innerHTML = zaehler + " in total";

        
         /* Löschelement */

        const trash: HTMLElement = document.createElement("l");
        aufgaben.appendChild(trash);
        trash.classList.add("far", "fa-trash-alt");
 
         /* Funktion vom Löschen */
 
        trash.addEventListener("click", function(): void {
 
             aufgaben.classList.add("ausgeblendet");
             zaehler = zaehler - 1;
             document.querySelector("h2").innerHTML = zaehler + " in total";
         });

        
        /* Kreis für Checkbox */

        const cbohneHaken: HTMLElement = document.createElement("cb");
        aufgaben.appendChild(cbohneHaken);
        cbohneHaken.classList.add("far", "fa-circle");


        /* Funktion Kreis von Checkbox */

        cbohneHaken.addEventListener("click", function(): void {

            cbohneHaken.classList.add("ausgeblendet");
            cbmitHaken.classList.remove("ausgeblendet"); 

        });

        /* Haken in Checkbox */

        const cbmitHaken: HTMLElement = document.createElement("cb");
        aufgaben.appendChild(cbmitHaken);
        cbmitHaken.classList.add("far", "fa-check-circle", "ausgeblendet");

        
            
        /* Funktion der Checkbox mit Haken */

        cbmitHaken.addEventListener("click", function(): void {

            cbmitHaken.classList.add("ausgeblendet");
            cbohneHaken.classList.remove("ausgeblendet"); 
        });

    
    });

  
            

    
});

        
    
            