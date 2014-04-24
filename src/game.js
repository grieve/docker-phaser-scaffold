var _ = require('lodash');
var Phaser = require('phaser');
var LogoScene = require('./logo-scene');

var Game = function(){
    Phaser.Game.prototype.constructor.call(
        this,
        800, 480,
        Phaser.AUTO,
        'stage',
        {
            preload: _.bind(this.onPreload, this),
            create: _.bind(this.onCreate, this),
            update: _.bind(this.onUpdate, this)
        }
    );

    this.logoScene = new LogoScene({game: this});
};

Game.prototype = Object.create(Phaser.Game.prototype);

Game.prototype.onPreload = function(){
    this.logoScene.onPreload();
};

Game.prototype.onCreate = function(){
    this.logoScene.onCreate();

    var game = this;
    setTimeout(function(){
        game.logoScene.onDestroy();
    }, 5000);
};

Game.prototype.onUpdate = function(step){
    this.logoScene.onUpdate();
};

module.exports = Game;
