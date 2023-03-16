// Code your solution in this file!

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = function (){
    let result = console.log(drivers.slice(0,2));
    return result;
}
returnFirstTwoDrivers()


const returnLastTwoDrivers = function(){
    let result = console.log(drivers.slice(2,4));
    return result;
}
returnLastTwoDrivers()


function selectingDrivers(){
    const first = returnFirstTwoDrivers();
    const last = returnLastTwoDrivers();
}
selectingDrivers();



const fareMultiplier = function createFareMultiplier(a){
    return a * a;
}
fareMultiplier(4);



