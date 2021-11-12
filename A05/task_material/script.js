/*Variablen der Kontinente*/
var europa2018 = 4209.3;
var europa2008 = 4965.7;
var nordamerika2018 = 6035.6;
var nordamerika2008 = 6600.4;
var suedamerika2018 = 1261.5;
var suedamerika2008 = 1132.6;
var afrika2018 = 1235.5;
var afrika2008 = 1028;
var asien2018 = 16274.2;
var asien2008 = 12954.7;
var australien2018 = 2100.5;
var australien2008 = 1993;
/*Variable der Welt*/
var welt = europa2018 + nordamerika2018 + suedamerika2018 + afrika2018 + asien2018 + australien2018;
/*Konsolenausgabe*/
console.log("Die Emission von Europa ist: " + europa2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + Math.round((europa2018 / welt) * 100) + "%.");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((europa2018 - europa2008) / europa2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(europa2018 - europa2008) + " kg CO2.");
console.log("Die Emission von Nordamerika ist: " + nordamerika2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + Math.round((nordamerika2018 / welt) * 100) + "%.");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((nordamerika2018 - nordamerika2008) / nordamerika2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(nordamerika2018 - nordamerika2008) + " kg CO2.");
console.log("Die Emission von Südamerika ist: " + suedamerika2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + Math.round((suedamerika2018 / welt) * 100) + "%.");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((suedamerika2018 - suedamerika2008) / suedamerika2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(suedamerika2018 - suedamerika2008) + " kg CO2.");
console.log("Die Emission von Afrika ist: " + afrika2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + Math.round((afrika2018 / welt) * 100) + "%.");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((afrika2018 - afrika2008) / afrika2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(afrika2018 - afrika2008) + " kg CO2.");
console.log("Die Emission von Asien ist: " + asien2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + Math.round((asien2018 / welt) * 100) + "%.");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((asien2018 - asien2008) / asien2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(asien2018 - asien2008) + " kg CO2.");
console.log("Die Emission von Australien ist: " + australien2018 + " kg CO2.");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + Math.round((australien2018 / welt) * 100) + "%.");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round(((australien2018 - australien2008) / australien2008) * 100) + "% verändert.");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round(australien2018 - australien2008) + " kg CO2.");
//# sourceMappingURL=script.js.map