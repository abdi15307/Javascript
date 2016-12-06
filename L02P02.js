/**
 * Created by Eigenaar on 24-11-2016.
 */
/**opdracht1*/
var dag = new Date();
var dagennaam = new Array("zondag","maandag","dinsdag","woensdag","donderdag","vrijdag","zaterdag");
document.write("vandaag is " + dagennaam [dag.getDay()] + "."+"<br>");

/** opdracht2*/

document.write(6 - dag.getDay() + "dag tot aan het weekend "+"<br>");


/**opdrcaht3*/
document.write("<br>" + dag.getHours());

if(dag.getHours() > 6 && dag.getHours() < 10 ) {
    // voor ontbijt
    document.write("<br>" + "Lekker ontbijten "+"<br>" );
} else if(dag.getHours() > 10 && dag.getHours() < 13) {
    // De lunch
    document.write("<br>" + "Tijd voor lunch"+"<br>" );
} else if(dag.getHours() > 13 && dag.getHours < 17) {
    // tussendoor
    document.write("<br>" + "Tijd voor tussendoortje "+"<br>" );
} else if(dag.getHours() > 17 && dag.getHours < 20) {
    // diner
    document.write("<br>" + "Tijd voor diner "+"<br>");
}  else {
    //snack
    document.write("<br>" + "Snack time"+"<br>" );
}

//** opdracht 4 *
var hypotheekBetalen = new Date(2016, 12, 25);
var dag1 = new Date(2016, 12, 5);

if ( hypotheekBetalen.getTime() == dag1.getTime() ) {
    document.write("U moet vandaag de hypotheek betalen !!");
}
else {
    document.write("U hoeft de hypotheek nog niet te betalen"+"<br>");
}



document.write("Dit bedrag moet u per maand sparen: " + 1248/12 + " euro"+"<br>");

var today = new Date();

document.write("Het jaartal is: " + today.getFullYear());
document.write("Het is de  " +  today.getDate() + "  dag van de maand"+"<br>");

var huiswerk = new Date(2016, 12, 10);
var dag2 = new Date(2016, 12, 8);

if (dag2.getTime() >= huiswerk.getTime() ) {
    document.write("je bent te laat met het huiswerk inleveren");
}
else {
    document.write("je bent nog op tijd om het werk in te leveren");
}
