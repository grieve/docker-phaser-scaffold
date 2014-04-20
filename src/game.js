var Phaser = require('phaser');
console.log(Phaser);

var Game = function(){
    this.handlers = {
    };
    Phaser.Game.prototype.constructor.call(
        this,
        800, 480,
        Phaser.AUTO,
        'stage',
        this
    );
};

Game.prototype = Object.create(Phaser.Game.prototype);

Game.prototype.preload = function(a){
};

Game.prototype.create = function(a){
};

Game.prototype.update = function(step){
};

module.exports = Game;
