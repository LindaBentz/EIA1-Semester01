// gibt fertige lösung im materialordner von A10 ! //
window.addEventListener("load", function () {
    // Variablendeklaration //
    var eingabe = document.querySelector("#eingabe");
    var liste = document.querySelector("#ul");
    var addTask = document.querySelector("#addTask");
    var zaehler = 0;
    /* Neue Aufgabe */
    addTask.addEventListener("click", function () {
        var aufgaben = document.createElement("li");
        aufgaben.innerHTML = eingabe.value;
        liste.appendChild(aufgaben);
        eingabe.value = "";
        zaehler = zaehler + 1;
        document.querySelector("h2").innerHTML = zaehler + " in total";
        /* Löschelement */
        var trash = document.createElement("l");
        aufgaben.appendChild(trash);
        trash.classList.add("far", "fa-trash-alt");
        /* Funktion vom Löschen */
        trash.addEventListener("click", function () {
            aufgaben.classList.add("ausgeblendet");
            zaehler = zaehler - 1;
            document.querySelector("h2").innerHTML = zaehler + " in total";
        });
        /* Kreis für Checkbox */
        var cbohneHaken = document.createElement("cb");
        aufgaben.appendChild(cbohneHaken);
        cbohneHaken.classList.add("far", "fa-circle");
        /* Funktion Kreis von Checkbox */
        cbohneHaken.addEventListener("click", function () {
            cbohneHaken.classList.add("ausgeblendet");
            cbmitHaken.classList.remove("ausgeblendet");
        });
        /* Haken in Checkbox */
        var cbmitHaken = document.createElement("cb");
        aufgaben.appendChild(cbmitHaken);
        cbmitHaken.classList.add("far", "fa-check-circle", "ausgeblendet");
        /* Funktion der Checkbox mit Haken */
        cbmitHaken.addEventListener("click", function () {
            cbmitHaken.classList.add("ausgeblendet");
            cbohneHaken.classList.remove("ausgeblendet");
        });
    });
});
//# sourceMappingURL=script.js.map