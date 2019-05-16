/* var request = new XMLHttpRequest();
var fileContentLines = null;
var numResults = 10;
var idString = "result";

function surge()
{

var lineIndex = Math.floor(randomFloat(1) * fileContentLines.length);
var line = fileContentLines[lineIndex];
for (i = numResults-1; i > 0; i--)
{
var oldPos = document.getElementById(idString+(i-1)).innerHTML;
var newPos = document.getElementById(idString+i);
newPos.innerHTML = oldPos;
}
document.getElementById(idString+"0").innerHTML = line;
}

function setup() {
console.log("Setting up...");
request.responseType = "text";
request.onload = function() {
console.log("Loading text file");
var fileContent = this.responseText;
fileContentLines = fileContent.split('\n');

var i;
for (i = 0; i < numResults; i++) {
var p = document.createElement("p");
var t = document.createTextNode("-");
p.appendChild(t);
p.id = idString+i;
document.getElementById("rlist").appendChild(p);
}
console.log("Loaded text file, "+fileContentLines.length+" lines");

};
request.open('GET', './content/wildMagic.txt');
request.send();
} */
