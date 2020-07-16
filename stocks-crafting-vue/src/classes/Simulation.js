export default class SimulationClass {

    static execute(interestPeridiocity, interestValue, periodType, period, monthlyContribution) {
                
        console.log('interestPeridiocity =>' + interestPeridiocity);
        console.log('interestValue =>' + interestValue);
        console.log('periodType =>' + periodType);
        console.log('period =>' + period );
        console.log('monthlyContribution =>' + monthlyContribution );

        if(periodType === "anos") {
            period = 12 * period;
        }
        
        if(interestPeridiocity === "% ao ano") {
            interestValue = 100 * (-1 + Math.pow( (1 + this.interestValue/100), 1/12));
        }
        
        var simulationResult = {
            years: { },
            total: 0            
        };

        var anos = Math.ceil(period/12);
        for (var a = 0 ; a < anos ; a++) { 
            simulationResult.years[a] = [];             
        }
        
        var i = 0;
        var j = 0;
        var count = 0;
        var sum = 0;

        while (count < period) {
            sum = sum * (1 + interestValue/100) + monthlyContribution;

            simulationResult.years[i].push({
                totalValue: sum;
            });
            
            j++;
            count ++;

            
            
            if(j==11) { 
                i = 0;
                i++;
            }
        }
        
        
        console.log(JSON.stringify(simulationResult));



        return simulationResult();
    }

}