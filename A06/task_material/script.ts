
/* Variable der Kontinente*/

var europe: string = "Europe";
var northamerica: string = "North America";
var southamerica: string = "South America";
var africa: string = "Africa";
var asia: string = "Asia";
var australia: string = "Australia";
var europe2018: number = 4209.3;
var europe2008: number = 4965.7;
var northamerica2018: number = 6035.6;
var northamerica2008: number = 6600.4;
var southamerica2018: number = 1261.5;
var southamerica2008: number = 1132.6;
var africa2018: number = 1235.5;
var africa2008: number = 1028;
var asia2018: number = 16274.2;
var asia2008: number = 12954.7;
var australia2018: number = 2100.5;
var australia2008: number = 1993;

/*Variable der Welt*/

var welt: number = europe2018 + northamerica2018 + southamerica2018 + africa2018 + asia2018 + australia2018;

/*Klick auf Kontinente*/

window.addEventListener("load", function () {
    document.querySelector(".eu").addEventListener("click", function () {emission(europe, europe2018, europe2008); });
    document.querySelector(".na").addEventListener("click", function () {emission(northamerica, northamerica2018, northamerica2008); });
    document.querySelector(".sa").addEventListener("click", function () {emission(southamerica, southamerica2018, southamerica2008); });
    document.querySelector(".af").addEventListener("click", function () {emission(africa, africa2018, africa2008); });
    document.querySelector(".as").addEventListener("click", function () {emission(asia, asia2018, asia2008); });
    document.querySelector(".au").addEventListener("click", function () {emission(australia, australia2018, australia2008); });

/*Berechnung*/

    function emission(kontinent, kontinent2018, kontinent2008) {
        document.querySelector("#Kontinentname").innerHTML = kontinent;
        document.querySelector("#Untertitel").innerHTML = kontinent;
        document.querySelector("#Emission2018").innerHTML = kontinent2018.toString(); 
        document.querySelector("#EmissionrelWelt").innerHTML = Math.round((kontinent2018 / welt) * 100) + "%";
        document.querySelector("#AnstieginProzent").innerHTML = Math.round(((kontinent2018 - kontinent2008) / kontinent2008) * 100) + "%";
        document.querySelector("#AbsoluterAnstieg").innerHTML = Math.round(kontinent2018 - kontinent2008).toString();
        document.querySelector(".Chart").setAttribute("style", "height:" + (kontinent2018 / welt) * 100 + "%");
}
});