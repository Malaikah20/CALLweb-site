//let first_Num = 20;
//let second_Num = 30;
//let sum = 0 ;
//traitement de la somme
//sum = first_Num + second_Num;
//affichage de la somme
//console.log("the sum of " + first_Num + " and " + second_Num + " is: " + sum + " "
    + "merci de votre calcule"
//);
//la fonction alert() permet d'afficher un message dans une boîte de dialogue


let first_Num = 0;
let rate_Num = 2500;
let result = 0 ;

first_Num = prompt("enter the first number in congolese franc: ");
rate_Num = prompt("enter the rate of the dollar: ");
//la fonction prompt() permet de demander à l'utilisateur de saisir une valeur mais cette valeur est toujours de type string
//il faut donc convertir cette valeur en type number pour pouvoir effectuer des opérations mathématiques

if(rate_Num == ""){
    rate_Num = 2500;
}

first_Num = parseInt(first_Num);
rate_Num = parseInt(rate_Num); //parseInt() permet de convertir une chaîne de caractères en nombre entier

// v erification de la validité des valeurs saisies
if(isNaN(first_Num) || isNaN(rate_Num)){
    alert("please enter a valid number");
    throw new Error("please enter a valid number");
}
result = first_Num / rate_Num;

alert("the quotient of " + first_Num + " is: " + result + " "
    + "dolar"
);
