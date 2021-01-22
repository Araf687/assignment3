//  https://github.com/Araf687/assignment3

// function to convert kilometer to meter
function kilometerToMeter(measurement)
{
    if(measurement>0 && typeof(measurement)=='number')
    {
        var convertToMeter=measurement*1000;
        return convertToMeter;
    }
    else{
        console.log("you have given wrong input.Please put the valid input in the function");
    }
}

// function to calculate your budget
function budgetCalculator(watchQuantity,phoneQuantity,laptopQuantity){

    if (watchQuantity<0 && typeof(watchQuantity)=='number'|| phoneQuantity<0 && typeof(phoneQuantity)=='number' || laptopQuantity<0 && typeof(laptopQuantity)=='number')
    {
        console.log("you have given wrong input.Please put the valid input in the function");
    }
    else{
        var watchPrice=50,phonePrice=100,laptopPrice=500;

        totalCost=(watchPrice * watchQuantity)+(phonePrice * phoneQuantity)+(laptopPrice *laptopQuantity);

        return totalCost;
    }
} 

// function for calculating the hotel cost
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
// function for finding the big string from the array
function megaFriend(inputArray){

    if(typeof(inputArray)=='object'){

        var max=inputArray[0].length;
        for(var i=1;i<inputArray.length;i++)
        {
            stringLength=inputArray[i].length;
            if(max<stringLength)
            {
                max=stringLength;
            }
        }
        return max;
    }
    else{
        console.log("you have given wrong input.Please put the valid input in the function");
    }
}
 