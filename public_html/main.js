var jeej = new Vue({
  el: '#tuto',
  data: {
    montant: '23.50',
    saisie : 'Cecie est une croquettes',
    text : 'Test de texte court en jeej',
    nbr_mot : 5,
  },
  filters: {
    euros: function(valeur) {
      return valeur + ' €';
    },
    pourcentage: function(valeur, decimales) {
      if(decimales === undefined) {
        decimales = 2;
      }
      return Math.round(valeur * Math.pow(10, decimales)) / Math.pow(10, decimales) + ' %';
    },
    ajoute: function(valeur, saisie) {
      return valeur + saisie;
    }, 
   limite: function(valeur, nbrMots) {
      return valeur.split(' ').slice(0, nbrMots).join(' ');
    }
  }
});

new Vue({
    el: '#k',
    data: {
        nb_1: 0,
        nb_2: 0,
        result: 0,
        textjeej: 'jeej',
    },
    methods: {
        add: function(){           
            return this.result=parseInt(this.nb_1)+ parseInt(this.nb_2);
        }
    }
    
});	

new Vue({
  el: '#calc',
  data: {
    current: 0,
    total: 0,
    operator: 'opératuer',
    buttons: [
    ['7', '8', '9', '+'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '*'],
    ['0', 'C', '=', '/']
  ],
  history: []
 },
 methods: {
     select: function(input){
         switch(input) {
            case "+": 
            case "-": 
            case "*": 
            case "/":
            case "=":
                this.calc(input);
                break;
            case "C":
                this.reset();
                break;
            default:
                this.changeCurrent(input);
        }
     },
     changeCurrent : function(input){
         if(this.current == 0){ this.current = input;
         }else{ this.current += '' + input;
     }
 },
   reset: function(){
       this.total =0 ;
       this.operator = false ;
       this.current = 0 ;
       
   },
   calc : function (operator){
       if(!this.operator) {
            if(this.current != 0) {
                this.total = parseFloat(this.current);
            }
        } else {
            switch(this.operator) {
                case "+": 
                    this.total += parseFloat(this.current); 
                    break;
                case "-": 
                    this.total -= parseFloat(this.current); 
                    break;
                case "*": 
                    this.total *= parseFloat(this.current); 
                    break;
                case "/": 
                    this.total /= parseFloat(this.current); 
                    break;
            }
        }
        this.current = 0;
        if(["+", "-", "*", "/"].indexOf(operator) > - 1) this.operator = operator;
        else this.operator = false;
    },
    addHistory: function(text){
        this.history.unshift(text);
    }
   }
});

new Vue({
    el: '#magic',
    data:{
        number : parseInt(Math.random()*100),
        try_number : 0, 
        text: 'eej',
    },
});

new Vue({
    el: '#interface',
    data: {
        affichage : true,
    },
    methods: {
        show1: function(){
            return this.affichage = !this.affichage ;
        },
    },  
});