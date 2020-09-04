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

  <tbody>
  <!--  <tr v-for="post in postList" :key="post">
        <td v-html="post.postTitle"></td>
        <td v-html="post.postContent"></td>
    </tr>-->
  </tbody>

</body>
</html>
</template>

<script>


export default {
  name: 'App',
  data( ){
    return {
      postList: null
    }
  },
  methods: {
    
    listPosts(){
      
      this.$blogService.getPosts().then(response => {
          if(response.erro){
            console.log("ERROOO");
          } else {
            this.postList = response.dados.map(function(objeto){
              return {
                        postTitle: objeto.TITULO,
                        postId: objeto.ID,
                        postContent: objeto.CONTEUDO                        
                      }
                      
            }, this.$server)
          }
      }).catch(response => {
        console.log(response, "ERROROROROR");
      })
    }
  },
  mounted(){     
      
      this.listPosts();
      console.log(this.postList.toString());

  }
}


</script>

<style>


</style>




























