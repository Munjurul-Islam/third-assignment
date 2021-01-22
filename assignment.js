function kilometerToMeter(km){
    var meter = km*1000;
    
    return meter;
}





function budgetCalculator(clock, phone, laptop){
    var clockPrice = 50*clock;
    var phonePrice = 100*phone;
    var laptopPrice = 500*laptop;
    var total = clockPrice + phonePrice + laptopPrice;

    return total;
}


function hotelCost(rent){
    var cost = 100;
    if(rent<= 10){
        cost = rent*100;
    }
    else if(rent<= 20){
        var first10Days = 10*100;
        var remainingDay = rent - 10;
        var second10Days = remainingDay*80;
        cost = first10Days + second10Days;
    }
    else {
        var first10Days = 10*100;
        var second10Days = 10*80;
        var remainingDay = rent - 20;
        var extraDays = remainingDay * 50;
        cost = first10Days + second10Days + extraDays;
    }
    return cost;
}








function megaFriend(str){
    var longestWord = '';

    for (i=0; i<str.length; i++){
        
        if(longestWord.length < str[i].length){
            longestWord = str[i];
        }
        
    }
    return longestWord;
}