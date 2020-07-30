"use strict";
cc._RF.push(module, 'f6c7fGss99Dk5QtQOU/Q+Dk', 'Btnplay');
// scripts/Btnplay.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.node.on('mouseup', function (event) {
      this.initGame();
    }.bind(this));
  },
  start: function start() {},
  update: function update(dt) {},
  initGame: function initGame() {
    this.node.destroy();
    this.game.startGame();
  }
});

cc._RF.pop();