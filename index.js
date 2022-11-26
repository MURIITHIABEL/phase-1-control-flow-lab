function scuberGreetingForFeet(fare){
  if (fare <= 400){
    return "This one is on me!";
 }
 else if (fare > 2000 && fare < 2500){
 return "I will gladly take your thirty bucks.";
 }
 else if(fare > 2500){
 return "No can do.";
}

}

function ternaryCheckCity(destination){
  if (destination === "NYC") {
    return "Ok, sounds good.";
}
else{
    return "No go.";
}
}


function switchOnCharmFromTip(tip){
  if (tip === "generous") {
    return "Thank you so much.";
} else if (tip === "not as generous") {
    return "Thank you.";
} else {
    return "Bye.";
}
}