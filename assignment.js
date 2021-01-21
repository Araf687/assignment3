// function to convert kilometer to meter
function kilometerToMeter(Length)
{
    if(Length>0)
    {
        var convertToMeter=Length*1000;
        return convertToMeter;
    }
    else{
        console.log("you have given wrong input.Please put the valid input in the function");
    }
}

// function to calculate your budget
function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){

    if (watchQuantity<0 || phoneQuantity<0 || laptopQuantity<0){
        console.log("you have given wrong input.Please put the valid input in the function");
        return;

    }
    else{
        var watchPrice=50,phonePrice=100,laptopPrice=500;

        totalCost=(watchPrice * watchQuantity)+(phonePrice * phoneQuantity)+(laptopPrice *laptopQuantity);

        return totalCost;
    }
} 

function hotelCost(days){
    if(days>0 && typeof(days)=='number')
    {
        var costFor_1To10=100,costFor_11To20=80,costAfter_20=50,remainingDay;
        if(days<=10)
        {
            totalCost= costFor_1To10 *days;
        }
        else if(days<=20)
        {
            remainingDay=days-10;
            totalCost=(costFor_1To10 * 10) +(costFor_11To20 * remainingDay );
        }
        else{
            remainingDay=days-20;
            totalCost=(costFor_1To10 * 10)+(costFor_11To20 * 10)+(costAfter_20 * remainingDay);
        }
        return totalCost;
    }
    else
    {
        console.log("you have given wrong input.Please put the valid input in the function");
    }
    
} 
// function megaFriend(){}
console.log(kilometerToMeter(99));
console.log(budgetCalculator(1,0,3));
console.log(hotelCost(33.5));