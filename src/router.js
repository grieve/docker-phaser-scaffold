var Exo = require('exoskeleton');

var Router = Exo.Router.extend({
    routes:{
        '': 'index',
        'about': 'about'
    },
    index: function(args){
        console.log(args);
    },
    about: function(args){
    },
    start: function(){
        Exo.history.start();
    }
});

module.exports = Router;

