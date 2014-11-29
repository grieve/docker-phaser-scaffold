var _ = require('lodash');

var Scene = function(opts){
    this.game = opts.game;
    this.sprites = [];
};

Scene.prototype.onPreload = function(){
};

Scene.prototype.onCreate = function(){
};

Scene.prototype.onDestroy = function(){
    _.each(this.sprites, function(sprite){
        sprite.kill();
    });
};

module.exports = Scene;
