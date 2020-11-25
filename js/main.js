document.write("<h2>"+ "Alle dagen van de week zijn:" + "</h2>");

var dagen = ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag", "zaterdag", "zondag"];
document.write("<ul>");
for(var i=0; i < dagen.length; i++){
	document.write("<li>" + dagen[i] + "</li>");
}
document.write("</ul>");

document.write("<h2>" +"De werkdagen zijn:" + "</h2>");

document.write("<ul>");
for(var i=0; i < dagen.length -2; i++){
	document.write("<li>" + dagen[i] + "</li>");
}
document.write("</ul>");

document.write("<h2>" + "De weekenddagen zijn:" + "</h2>");

document.write("<ul>");
for(var i=0; i < dagen.length; i++){
	if(i == 5 || i == 6) {
		document.write("<li>" + dagen[i] + "</li>");
	}
}
document.write("</ul>");

document.write("<h2>" +  "Alle dagen van de week in omgekeerde volgorde zijn:" + "</h2>");

document.write("<ul>");
for(var i = dagen.length -1; i >= 0; i--){
	document.write("<li>" + dagen[i] + "</li>");
}
document.write("</ul>");