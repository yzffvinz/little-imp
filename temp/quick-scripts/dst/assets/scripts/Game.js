
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
    isOver: false,
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
  start: function start() {},
  update: function update(dt) {
    // 就会调用游戏失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  gameOver: function gameOver() {
    if (!this.isOver) {
      this.isOver = true;
      this.player.stopAllActions(); //停止 player 节点的跳跃动作

      this.player.getComponent('Player').xSpeed = 0;
      this.showPlayBtn();
    } // cc.director.loadScene('game');

  },
  startGame: function startGame() {
    cc.director.loadScene('game');
    this.isOver = false;
  },
  showPlayBtn: function showPlayBtn() {
    // 使用给定的模板在场景中生成一个新节点
    var playBtn = cc.instantiate(this.btnplayPrefab); // 将新增的节点添加到 Canvas 节点下面

    this.node.addChild(playBtn); // 为星星设置一个随机位置

    playBtn.setPosition(this.getPlayBtnPosition());
    playBtn.getComponent('Btnplay').game = this;
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsImJ0bnBsYXlQcmVmYWIiLCJtYXhTdGFyRHVyYXRpb24iLCJtaW5TdGFyRHVyYXRpb24iLCJzdGFyRHVyYXRpb24iLCJpc092ZXIiLCJncm91bmQiLCJOb2RlIiwicGxheWVyIiwic2NvcmUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJncm91bmRZIiwieSIsImhlaWdodCIsInNwYXduTmV3U3RhciIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwiZ2V0Q29tcG9uZW50IiwieFNwZWVkIiwic2hvd1BsYXlCdG4iLCJzdGFydEdhbWUiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInBsYXlCdG4iLCJpbnN0YW50aWF0ZSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0UGxheUJ0blBvc2l0aW9uIiwiZ2FtZSIsIm5ld1N0YXIiLCJNYXRoIiwicmFuZG9tIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwidjIiLCJyYW5kWCIsInJhbmRZIiwianVtcEhlaWdodCIsIm1heFgiLCJ3aWR0aCIsImdhaW5TY29yZSIsInN0cmluZyIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRTtBQUNSLGlCQUFTLElB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S0FBYixDQUFQO0FBQ0gsR0F4SEk7QUEwSExJLEVBQUFBLFNBQVMsRUFBRSxxQkFBWTtBQUNuQixTQUFLM0MsS0FBTCxJQUFjLENBQWQsQ0FEbUIsQ0FFbkI7O0FBQ0EsU0FBS0csWUFBTCxDQUFrQnlDLE1BQWxCLEdBQTJCLFlBQVksS0FBSzVDLEtBQTVDLENBSG1CLENBSW5COztBQUNBZixJQUFBQSxFQUFFLENBQUM0RCxXQUFILENBQWVDLFVBQWYsQ0FBMEIsS0FBS3pDLFVBQS9CLEVBQTJDLEtBQTNDO0FBQ0g7QUFoSUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgc3RhclByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBidG5wbGF5UHJlZmFiOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOaYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxuICAgICAgICBtYXhTdGFyRHVyYXRpb246IDAsXG4gICAgICAgIG1pblN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgc3RhckR1cmF0aW9uOiAwLFxuICAgICAgICBpc092ZXI6IGZhbHNlLFxuICAgICAgICAvLyDlnLDpnaLoioLngrnvvIznlKjkuo7noa7lrprmmJ/mmJ/nlJ/miJDnmoTpq5jluqZcbiAgICAgICAgZ3JvdW5kOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZVxuICAgICAgICB9LFxuICAgICAgICAvLyBwbGF5ZXIg6IqC54K577yM55So5LqO6I635Y+W5Li76KeS5by56Lez55qE6auY5bqm77yM5ZKM5o6n5Yi25Li76KeS6KGM5Yqo5byA5YWzXG4gICAgICAgIHBsYXllcjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcmU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogXCJTY29yZSAocGxheWVyKVwiLFxuICAgICAgICAgICAgdG9vbHRpcDogXCJUaGUgc2NvcmUgb2YgcGxheWVyXCIsXG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gc2NvcmUgbGFiZWwg55qE5byV55SoXG4gICAgICAgIHNjb3JlRGlzcGxheToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOi3s+i3g+mfs+aViOi1hOa6kFxuICAgICAgICBzY29yZUF1ZGlvOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hvb2sgb25sb2FkJyk7XG4gICAgICAgIC8vIOWIneWni+WMluiuoeWIhlxuICAgICAgICB0aGlzLnNjb3JlID0gMDtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG4gICAgICAgIHRoaXMuZ3JvdW5kWSA9IHRoaXMuZ3JvdW5kLnkgKyB0aGlzLmdyb3VuZC5oZWlnaHQgLyAyO1xuICAgICAgICB0aGlzLnNwYXduTmV3U3RhcigpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g5bCx5Lya6LCD55So5ri45oiP5aSx6LSl6YC76L6RXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG5cbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNPdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmlzT3ZlciA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyAvL+WBnOatoiBwbGF5ZXIg6IqC54K555qE6Lez6LeD5Yqo5L2cXG4gICAgICAgICAgICB0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLnhTcGVlZCA9IDA7XG4gICAgICAgICAgICB0aGlzLnNob3dQbGF5QnRuKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdnYW1lJyk7XG4gICAgfSxcblxuICAgIHN0YXJ0R2FtZSAoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgICAgICB0aGlzLmlzT3ZlciA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBzaG93UGxheUJ0biAoKSB7XG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxuICAgICAgICB2YXIgcGxheUJ0biA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYnRucGxheVByZWZhYik7XG4gICAgICAgIC8vIOWwhuaWsOWinueahOiKgueCuea3u+WKoOWIsCBDYW52YXMg6IqC54K55LiL6Z2iXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChwbGF5QnRuKTtcbiAgICAgICAgLy8g5Li65pif5pif6K6+572u5LiA5Liq6ZqP5py65L2N572uXG4gICAgICAgIHBsYXlCdG4uc2V0UG9zaXRpb24odGhpcy5nZXRQbGF5QnRuUG9zaXRpb24oKSk7XG4gICAgICAgIHBsYXlCdG4uZ2V0Q29tcG9uZW50KCdCdG5wbGF5JykuZ2FtZSA9IHRoaXM7XG4gICAgfSxcblxuICAgIHNwYXduTmV3U3RhciAoKSB7XG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XG5cbiAgICAgICAgLy8gc3RhcuWtmOWcqOaXtumXtFxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGxheUJ0blBvc2l0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xuICAgIH0sXG5cbiAgICBnZXROZXdTdGFyUG9zaXRpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcblxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOeUqOS6juWcqOWKqOS9nOe7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahOWFtuS7luaWueazlVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xuICAgIH0sXG59KTtcbiJdfQ==