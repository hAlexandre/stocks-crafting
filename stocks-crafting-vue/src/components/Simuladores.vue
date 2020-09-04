<template>
<html>
<head>
  <!-- Global site tag (gtag.js) - Google Analytics -->

</head>
<body>

  <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
    <h3 > <b>Simulador e calculadora de juros compostos para aposentadoria</b></h3>       
    <div class="btn-toolbar mb-2 mb-md-0">                  
      </div>
  </div>

  
  <div class="row">
    <div class="col-md-4" style="padding-top: 0px">
      <h6>Quanto dinheiro você junta guardando um pouquinho todo mês?</h6>
      <div style="padding-top:5px">
        <h6> <b>Quanto vai guardar por mês? </b></h6>  
      </div>  
      <div class="input-group" >
        <input id="monthlyContribution" value="1000" type="text" class="form-control" aria-label="Text  put with dropdown button">
        <div class="input-group-append">
          <button class="btn btn-outline-secondary " type="button">reais por mês</button>      
        </div>
      </div>

      <h6> <b>Por quanto tempo? </b></h6>  
      <div class="input-group ">
        <input id="howLong" type="text" value="30" class="form-control" aria-label="Text input with dropdown button">
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
        <input id="interest" type="text" value="0,50" class="form-control" aria-label="Text input with dropdown button">
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
    

    <div class="col-md-8" v-if="simulationResult != null" style="padding-top: 00px">
        <h6>
          Investindo R${{(this.monthlyContribution).toFixed(2).replace(/['"]+/g, '').replace('.',',')}} todo mês a uma taxa de {{(this.simulationInterest.toFixed(2).replace(/['"]+/g, '').replace('.',','))}}{{(this.simulationInterestType)}} 
          por {{(this.simulationDuration)}} {{this.simulationPeridiocity}}
          você terá <h5><b>R${{this.simulationResult.total.toFixed(2).replace(/['"]+/g, '').replace('.',',')}}</b></h5>                  
        </h6>        
          
          <div class="col-md-12"  v-for="(year, i) in simulationResult.year" :key="i" style="padding-bottom:3px">            
                  
                  <button class="btn btn-primary" v-bind:id="'year'+i" type="button" data-toggle="collapse" :data-target="'#collapseExample'+i" aria-expanded="false" 
                  aria-controls="collapseExample" >
                    Ano {{parseInt(i)+1}} <!--Total = R${{(simulationResult.yearsTotal[i].toFixed(2))}}-->
                  </button>
                
          
                <div class="collapse col-md-10" v-bind:id="'collapseExample'+i" style="padding-left: 60px">                  
                      <div class="card card-body" v-for="(month, j) in year" :key="j" style="padding: 0px 5px 0px 5px">
                        <b>Ano {{parseInt(i)+1}} - {{parseInt(JSON.stringify(month.month))+1}}º mês </b>                        
                        <p style="margin: 2px">Você investiu <b>R${{JSON.stringify(month.totalInvested.toFixed(2)).replace(/['"]+/g, '').replace('.',',')}} </b> </p>
                        <p style="margin: 2px">Ganhou em juros <b>R${{JSON.stringify(month.passiveResult.toFixed(2)).replace(/['"]+/g, '').replace('.',',')}} </b> </p>
                        <p style="margin: 0px">Totalizando <b>R${{  JSON.stringify(month.total.toFixed(2)).replace(/['"]+/g, '').replace('.',',')  }} </b></p>                        
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
      if(this.simulationResult != null){
        for(var aux = 0 ; aux < this.simulationResult.yearsTotal.length ; aux++){
          if(document.getElementById("year"+aux).getAttribute("aria-expanded") == "true"){
            document.getElementById("year"+aux).click();
          }
          
        }
      }

      
      this.simulationResult = null;
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




























