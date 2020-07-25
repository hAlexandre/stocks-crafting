<template>
<html>
<body>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h1 class="h2">Simulador de juros compostos</h1>       
    <div class="btn-toolbar mb-2 mb-md-0   ">                  
      </div>
  </div>

  <div class="row">
    <div class="col-md-4" style="padding-top: 20px">
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

    </div>
    

    <div class="col-md-8" v-if="simulationResult != null" style="padding-top: 20px">
        <h6>
          Investindo R${{this.monthlyContribution}} todo mês a uma taxa de {{this.simulationInterest}}{{this.simulationInterestType}} 
          você terá R${{this.simulationResult.total.toFixed(2)}} ao final de {{this.simulationDuration}} {{this.simulationPeridiocity}}                
        </h6>
        
          
        
          <div class="col-md-12 row"  v-for="(year, i) in simulationResult.year" :key="i">            
                <p>          
                  <button class="btn btn-primary row" type="button" data-toggle="collapse" :data-target="'#collapseExample'+i" aria-expanded="false" aria-controls="collapseExample">
                    Ano {{parseInt(i)+1}} <!--Total = R${{(simulationResult.yearsTotal[i].toFixed(2))}}-->
                  </button>
                </p>
          
                <div class="collapse col-md-8" v-bind:id="'collapseExample'+i" style="padding-left: 30px">                  
                      <div class="card card-body" v-for="(month, j) in year" :key="j">
                        Mês {{parseInt(JSON.stringify(month.month))+1}} => Valor total acumulado
                        {{JSON.stringify(month.total)}} => 
                        {{JSON.stringify(month.totalInvested)}}
                      </div>                  
               
            </div>   
            </div>
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
      
      this.simulationDuration = document.getElementById("howLong").value;

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
      this.simulationInterestType = null
  }
}


</script>

<style>


</style>




























