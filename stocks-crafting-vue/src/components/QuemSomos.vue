<template>
<html>
<body>

  <div class="row">
    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      <h1 class="h2">Em breve, postagens sobre educação financeira, investimentos e muito mais!</h1>       
    </div>
    <div>
      <p>O que gostaria de ler? Envie sugestões de conteúdo para <span style="color: rgb(44, 130, 201);"><u>contato.amigosdodinheiro@gmail.com</u></span></p>
    </div>          
    
  </div>

</body>
</html>
</template>

<script>

import Simulation from '../classes/Simulation.js'
export default {
  name: 'App',
  data( ){
    return {
      simulationTotal: 0,     
      simulationInterest: 0,
      simulationInterestType: null,
      simulationPeridiocity: "",
      simulationDuration: 0,      
      simulationResult: null,      
      interestTitle: "% ao mês",
      investmentPeriod: "anos",
      monthlyContribution: 0,
      isSimulating: null
    }
  },
  methods: {
    simulate() {      
      
      this.simulationDuration = parseInt(document.getElementById("howLong").value);

      this.simulationPeridiocity = this.investmentPeriod;
      this.monthlyContribution = parseFloat(document.getElementById("monthlyContribution")
        .value.replace(",","."));
      this.simulationInterestType = this.interestTitle;
      this.simulationInterest = parseFloat(document.getElementById("interest")
        .value.replace(",","."));  
                        
      this.simulationResult = Simulation.execute(this.simulationInterestType, 
                                  this.simulationInterest, this.investmentPeriod, 
                                  this.simulationDuration, this.monthlyContribution);
      console.log(JSON.stringify(this.simulationResult));
      console.log(JSON.stringify(this.simulationResult.yearsTotal));
      
      
      this.isSimulating = true;
    }
  },
  mounted(){     
      this.interestTitle = '% ao mês';
      this.investmentPeriod = 'anos'      
      this.isSimulating = false;
      this.simulationTotal = 0,     
      this.simulationInterest = 0,
      this.simulationInterestType = null,
      this.simulationDuration = document.getElementById("howLong").value;
      

  }
}


</script>

<style>


</style>




























