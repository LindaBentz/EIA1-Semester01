/*Variablen für Texte*/


var eu: string = "Europa";
var sa: string = "Südamerika";
var na: string = "Nordamerika";
var af: string = "Afrika";
var as: string = "Asien";
var au: string = "Australien";


var texteinseins: string = "Die Emission von ";
var texteinszwei: string = " ist ";
var texteinsdrei: string = " kg CO2.";

var textzweieins: string = "Relativ zur Gesamtemission der Welt verursacht ";
var textzweizwei: string = " damit ";
var textzweidrei: string = " %.";

var textdreieins: string = "Für ";
var textdreizwei: string = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var textdreidrei: string = " % verändert.";

var textviereins: string = "2018 im Vergleich zu 2008 sind das ";
var textvierzwei: string = " kg CO2.";





/*Variablen der Kontinente*/
var europa2018: number = 4209.3;
var europa2008: number = 4965.7;

var nordamerika2018: number = 6035.6;
var nordamerika2008: number = 6600.4;

var suedamerika2018: number = 1261.5;
var suedamerika2008: number = 1132.6;

var afrika2018: number = 1235.5;
var afrika2008: number = 1028;

var asien2018: number = 16274.2;
var asien2008: number = 12954.7;

var australien2018: number = 2100.5;
var australien2008: number = 1993;

/*Variable der Welt*/

var welt: number = europa2018 + nordamerika2018 + suedamerika2018 + afrika2018 + asien2018 + australien2018; 

/*Konsolenausgabe*/

console.log(texteinseins + eu + texteinszwei + europa2018 + texteinsdrei);
console.log(textzweieins + eu + textzweizwei + Math.round((europa2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + eu + textdreizwei + Math.round(((europa2018 - europa2008) / europa2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(europa2018 - europa2008) + textvierzwei);

console.log(texteinseins + na + texteinszwei + nordamerika2018 + texteinsdrei);
console.log(textzweieins + na + textzweizwei + Math.round((nordamerika2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + na + textdreizwei + Math.round(((nordamerika2018 - nordamerika2008) / nordamerika2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(nordamerika2018 - nordamerika2008) + textvierzwei);

console.log(texteinseins + sa + texteinszwei + suedamerika2018 + texteinsdrei); 
console.log(textzweieins + sa + textzweizwei + Math.round((suedamerika2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + sa + textdreizwei + Math.round(((suedamerika2018 - suedamerika2008) / suedamerika2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(suedamerika2018 - suedamerika2008) + textvierzwei);

console.log(texteinseins + af + texteinszwei + afrika2018 + texteinsdrei);
console.log(textzweieins + af + textzweizwei + Math.round((afrika2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + af + textdreizwei + Math.round(((afrika2018 - afrika2008) / afrika2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(afrika2018 - afrika2008) + textvierzwei);

console.log(texteinseins + as + texteinszwei + asien2018 + texteinsdrei);
console.log(textzweieins + as + textzweizwei + Math.round((asien2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + as + textdreizwei + Math.round(((asien2018 - asien2008) / asien2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(asien2018 - asien2008) + textvierzwei);

console.log(texteinseins + au + texteinszwei + australien2018 + texteinsdrei);
console.log(textzweieins + au + textzweizwei + Math.round((australien2018 / welt) * 100) + textzweidrei);
console.log(textdreieins + au + textdreizwei + Math.round(((australien2018 - australien2008) / australien2008) * 100) + textdreidrei);
console.log(textviereins + Math.round(australien2018 - australien2008) + textvierzwei);






