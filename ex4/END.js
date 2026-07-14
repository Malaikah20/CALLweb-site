/*
function calculate() {
    let goods_1 = prompt("first goods ?");
    let montant_1 = Number(prompt("price of first goods ?"));
    let goods_2 = prompt("second goods ?");
    let montant_2 = Number(prompt("price of second goods ?"));
    let goods_3 = prompt("third goods ?");
    let montant_3 = Number(prompt("price of third goods ?"));
    let goods_4 = prompt("fourth goods ?");
    let montant_4 = Number(prompt("price of fourth goods ?"));
    let goods_5 = prompt("fifth goods ?");
    let montant_5 = Number(prompt("price of fifth goods ?"));


    let rate = Number(prompt("what is a rate? "));

    let result_1 = montant_1 / rate ;
    let result_2 = montant_2 / rate ;
    let result_3 = montant_3 / rate ;
    let result_4 = montant_4 / rate ;
    let result_5 = montant_5 / rate ;

  
    document.getElementById("result") .innerHTML = `
    rate : ${rate}
    <br>
    montant_1 : ${montant_1}
    <br>
    result : ${result_1}
    <br>
    montant_2 : ${montant_2}
    <br>
    result : ${result_2}
    <br>
    montant_3 : ${montant_3}
    <br>
    result : ${result_3}
    <br>
    montant_4 : ${montant_4}
    <br>
    result : ${result_4}
    <br>
    montant_5 : ${montant_5}


    `;
} 
*/



//pour simplifier se programme on

function calculate(){
    let goods = [];
    let montant = [];
    let rate = [];
    let result = [];
 
    for (let i = 0;i <2; i++){
        goods[i] = (prompt("goods name"))
        montant[i] = Number(prompt("goods price"))
        rate[i] = Number(prompt("what rate"))
        result[i] = montant[i] / rate[i]
    }

    for (let i = 0;i <2; i++) {
        document.getElementById("result") .innerHTML += `
        goods : ${goods[i]}
        <br>
        result : ${result[i]}$
        <br>
    `;
    }
}