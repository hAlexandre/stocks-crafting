export default class SimulationClass {

    static execute(interestPeridiocity, interestValue, periodType, period, monthlyContribution) {
                

        let simulationResult = {
            year: {},
            total: 0
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
        
        

        let anos = Math.ceil(period / 12);
        for( var cont = 0 ; cont < anos ; cont ++) {
            simulationResult.year[cont] = new Array();
        }
        
        var totalSoFar = 0;
        while (count < period) {
            //console.log('i => ' + i + 'j => '+ j);
            sum = sum * (1 + interestValue/100) + monthlyContribution;
            //console.log(sum);          
            totalSoFar += monthlyContribution;
            let aux = {
                month: j,
                total: sum,
                totalInvested :totalSoFar
            }
            
            simulationResult.year[i].push(aux);
            

            if(j==11) { 
                j = 0;
                i++;                
            } else {
                j++;
            }
            
            count ++;
            //console.log(count);
        }
        
        simulationResult.total = sum;

        //console.log(JSON.stringify(simulationResult));
        



        return JSON.stringify(simulationResult);
    }

}