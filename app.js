var app = new Vue({
    el:'#app',
    data : {
        query: '',
        result: false
    },
    methods : {
        search: function() {
          fetch(`https://www.omdbapi.com/?t=${this.query}&y=&plot=short&r=json&apikey=3bda1ca2`)
          .then(result => result.json())
          .then(result => {
              this.result = result;
          }) 
        }
    }
})