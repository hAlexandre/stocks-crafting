<template>
<html>
<body>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Simuladores</h1>       
  <div class="btn-toolbar mb-2 mb-md-0">        

          
        </div>
      </div>
  <div class="col-md-5">
    <h6>1 - Quanto dinheiro você terá após guardar um pouquinho todo mês?</h6>
    <div style="padding-top:5px">
      <h6> <b>Quanto vai guardar por mês? </b></h6>  
    </div>  
    <div class="input-group" >
      <input id="monthlyContribution" type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary " type="button">reais por mês</button>      
      </div>
    </div>

    <h6> <b>Por quanto tempo? </b></h6>  
    <div class="input-group ">
      <input id="howLong" type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" style="padding-left:57px" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{investmentPeriod}}</button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="javascript:void(0)" @click="investmentPeriod='meses'">meses</a>
          <a class="dropdown-item" href="javascript:void(0)" @click="investmentPeriod='anos'">anos</a>               
        </div>
      </div>    
    </div>

    <h6> <b>Qual a taxa?</b>  CDI em 10 de julho = 0,38% ao mês</h6> 
    <div class="input-group ">
      <input id="interest" type="text" class="form-control" aria-label="Text input with dropdown button">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary dropdown-toggle" style="padding-left:25px" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{interestTitle}}</button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="javascript:void(0)" @click="interestTitle='% ao mês'" >% ao mês</a>
          <a class="dropdown-item" href="javascript:void(0)" @click="interestTitle='% ao ano'">% ao ano</a>               
        </div>
      </div>    
    </div>
    <div class="float-right" style="padding:5px 0px 0px 0px"> 
      <button type="submit" class="btn btn-secondary" @click="simulate()">Simular</button>
    </div>

    <div style="padding-top:38px">
      <h6>
        Guardando R${{this.monthlyContribution}} todo mês por {{this.simulationPeridiocity}} a uma taxa de {{this.simulationInterest}}{{this.simulationInterestType}}
               
      </h6>
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
      simulationResults: null,      
      interestTitle: "% ao mês",
      investmentPeriod: "anos",
      monthlyContribution: 0,
      isSimulating: null
    }
  },
  methods: {
    simulate() {      
      this.isSimulating = true;
      this.simulationDuration = document.getElementById("howLong").value;

      this.simulationPeridiocity = this.investmentPeriod;
      this.monthlyContribution = parseFloat(document.getElementById("monthlyContribution")
        .value.replace(",","."));
      this.simulationInterestType = this.interestTitle;
      this.simulationInterest = parseFloat(document.getElementById("interest")
        .value.replace(",","."));  
      
      
      
      
      this.simulationResults = Simulation.execute(this.simulationInterestType, 
                                  this.simulationInterest, this.investmentPeriod, 
                                  this.simulationDuration, this.monthlyContribution);
      

      
      

    }
  },
  mounted(){     
      this.interestTitle = '% ao mês';
      this.investmentPeriod = 'anos'      
      this.isSimulating = false;
      this.simulationTotal = 0,     
      this.simulationInterest = 0,
      this.simulationInterestType = null
  }
}


</script>

<style>


</style>




























