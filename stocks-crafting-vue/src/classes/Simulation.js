export default class SimulationClass {

    year;
    total;
    totalYear;
    constructor(data) {
        Object.assign(this, data);
    
    }

    static execute(interestPeridiocity, interestValue, periodType, period, monthlyContribution) {
                

        let simulationResult = {
            year: {},
            total: 0,
            yearsTotal: [],
            passiveResult: 0
        }

        //console.log('interestPeridiocity =>' + interestPeridiocity);
        //console.log('interestValue =>' + interestValue);
        //console.log('periodType =>' + periodType);
        //console.log('period =>' + period );
        //console.log('monthlyContribution =>' + monthlyContribution );

        if(periodType === "anos") {
            period = 12 * period;
        }
        
        if(interestPeridiocity === "% ao ano") {
            console.log(interestValue);
            interestValue = 100 * (-1 + Math.pow( (1 + interestValue/100), 1/12));
            
        }
        
        

        
        
        var i = 0;
        var j = 0;
        var count = 0;
        var sum = 0;
        var passiveResult = 0;
        

        let anos = Math.ceil(period / 12);
        for( var cont = 0 ; cont < anos ; cont ++) {
            simulationResult.year[cont] = new Array();
        }
        simulationResult.yearsTotal = [];
        
        
        var totalSoFar = 0;
        while (count < period) {
            //console.log('i => ' + i + 'j => '+ j);
            sum = sum * (1 + interestValue/100) + monthlyContribution;
            //console.log(sum);          
            totalSoFar += monthlyContribution;
            passiveResult =  sum - totalSoFar ;
            let aux = {
                month: j,
                total: sum,
                totalInvested: totalSoFar,
                passiveResult: passiveResult
            }
            
            simulationResult.year[i].push(aux);
            
            count ++;

            if(j==11) { 
                j = 0;
                simulationResult.yearsTotal[i] = sum;
                
                i++;
                
            } else {
                j++;
            }
            
            
            //console.log(count);
        }
        
        simulationResult.total = sum;

        if(j != 0) {
            simulationResult.yearsTotal[i] = sum;
        }

        //console.log(JSON.stringify(simulationResult));
        



        return (simulationResult);
    }

}