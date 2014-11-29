var Scene = require('./scene');

var LogoScene = function(opts){
    Scene.prototype.constructor.call(this, opts);
};

LogoScene.prototype = Object.create(Scene.prototype);

LogoScene.prototype.onPreload = function(){
    this.game.load.image('logo', 'img/phaser-logo-small.png');
};

LogoScene.prototype.onCreate = function(){
    this.logo = this.game.add.sprite(this.game.width*0.5, this.game.height*0.5, 'logo');
    this.logo.anchor.setTo(0.5, 0.5);
    this.sprites.push(this.logo);
};

LogoScene.prototype.onUpdate = function(){
    this.logo.rotation += 0.01;
};

module.exports = LogoScene;
