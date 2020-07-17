
// 1. converting feet to mile.

function feetToMile(inputFeet){

    if(inputFeet <= 0){
        return "Invalid input!"
    }

    var mile = inputFeet * 0.000189394;
    return mile;
}
console.log("Total miles:", feetToMile(50000));


// 2. total wood (cubic feet) calculation. 

function woodCalculator(chair, table, bed){
    var perChair = 10;
    var perTable = 12;
    var perBed = 50;

    var ChairForWood = chair * perChair;
    var tableForWood = table * perTable;
    var bedForWood = bed * perBed;

    var totalCubicFeet = ChairForWood + tableForWood + bedForWood;
    return totalCubicFeet;
}
result = woodCalculator(12,2,2)
console.log("Total wood needed: ", result, "CFT.")


// 3. brick calculation.



function brickCalculator(floor){

    var perFeet = 1000;
    
    if(floor <= 0){
        return "Invalid input!"
    }
    else if(floor<=10){
        var totalFeet = floor * 15;
        var brickFor_10_floor = totalFeet * perFeet;
        return brickFor_10_floor;
    }
    else if (floor>10 && floor<=20){
        var totalFeet = (floor-10) * 12;
        var brickFor_20_floor = totalFeet * perFeet;
        return brickFor_20_floor + 150000;
    }
    else{
        var totalFeet = (floor-20) * 10;
        var brickFor_more_floor = totalFeet * perFeet;
        return brickFor_more_floor + 270000;
    }
}
console.log("Total brick needed:", brickCalculator(30))


// 4. finding tiny friend.

var nameList = ["Mujahid", "jhankarMahbub", "RaselAhmed", "ManikRoy", "SadiaSultana", "Karina"];

function tinyFriend(nameList){

    var smallName = nameList[0]; 
    
    for(var i = 0; i < nameList.length; i++){
        var name = nameList[i];
        if(name<smallName){
            smallName = name
        }
    }    
    return smallName;  
}
var result = tinyFriend(nameList)
console.log("Smallest name:", result)