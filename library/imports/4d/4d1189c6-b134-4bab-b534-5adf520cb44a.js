"use strict";
cc._RF.push(module, '4d118nGsTRLq7U0Wt9SDLRK', 'Game');
// scripts/Game.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    btnplayPrefab: {
      "default": null,
      type: cc.Prefab
    },
    // 星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    starDuration: 0,
    // 地面节点，用于确定星星生成的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    // player 节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    score: {
      "default": 0,
      displayName: "Score (player)",
      tooltip: "The score of player"
    },
    // score label 的引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    // 跳跃音效资源
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log('hook onload'); // 初始化计分

    this.score = 0;
    this.timer = 0;
    this.groundY = this.ground.y + this.ground.height / 2;
    this.spawnNewStar();
  },
  start: function start() {// console.log('hook start');
    // this.showPlayBtn();
  },
  update: function update(dt) {
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    this.player.stopAllActions(); //停止 player 节点的跳跃动作
  },
  spawnNewStar: function spawnNewStar() {
    // 使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); // star存在时间

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0; // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(newStar); // 为星星设置一个随机位置

    newStar.setPosition(this.getNewStarPosition());
    newStar.getComponent('Star').game = this;
  },
  getPlayBtnPosition: function getPlayBtnPosition() {
    return cc.v2(0, 0);
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; // 根据地平面位置和主角跳跃高度，随机得到一个星星的 y 坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50; // 根据屏幕宽度，随机得到一个星星 x 坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; // 返回星星坐标

    return cc.v2(randX, randY);
  },
  gainScore: function gainScore() {
    this.score += 1; // 更新 scoreDisplay Label 的文字

    this.scoreDisplay.string = 'Score: ' + this.score; // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法

    cc.audioEngine.playEffect(this.scoreAudio, false);
  }
});

cc._RF.pop();