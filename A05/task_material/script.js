/*Variablen für Texte*/
var eu = "Europa";
var sa = "Südamerika";
var na = "Nordamerika";
var af = "Afrika";
var as = "Asien";
var au = "Australien";
var texteinseins = "Die Emission von ";
var texteinszwei = " ist ";
var texteinsdrei = " kg CO2.";
var textzweieins = "Relativ zur Gesamtemission der Welt verursacht ";
var textzweizwei = " damit ";
var textzweidrei = " %.";
var textdreieins = "Für ";
var textdreizwei = " hat sich 2018 im Vergleich zu 2008 die Emission um ";
var textdreidrei = " % verändert.";
var textviereins = "2018 im Vergleich zu 2008 sind das ";
var textvierzwei = " kg CO2.";
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
//# sourceMappingURL=script.js.map