var birthYea = prompt("Zhasyn qanshada? ");

if (birthYea >= 18){ 
    alert("Sizdin jasynyz " + 18 + "den asqan");
}
if(birthYea <= 18){
    alert("Sizdin jasynyz " + 18 + "ge tolmagan");
}

var temperature = prompt("ne kiemin?");

if (temperature <= -10){
    alert("shuba, gamazh, taqiya kigen durys");
}
if(temperature >= +20){
    alert("shorty, fudbolka, kepka kigen durys");
}