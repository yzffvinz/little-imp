
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFyUHJlZmFiIiwidHlwZSIsIlByZWZhYiIsImJ0bnBsYXlQcmVmYWIiLCJtYXhTdGFyRHVyYXRpb24iLCJtaW5TdGFyRHVyYXRpb24iLCJzdGFyRHVyYXRpb24iLCJncm91bmQiLCJOb2RlIiwicGxheWVyIiwic2NvcmUiLCJkaXNwbGF5TmFtZSIsInRvb2x0aXAiLCJzY29yZURpc3BsYXkiLCJMYWJlbCIsInNjb3JlQXVkaW8iLCJBdWRpb0NsaXAiLCJvbkxvYWQiLCJjb25zb2xlIiwibG9nIiwidGltZXIiLCJncm91bmRZIiwieSIsImhlaWdodCIsInNwYXduTmV3U3RhciIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJnYW1lT3ZlciIsInN0b3BBbGxBY3Rpb25zIiwibmV3U3RhciIsImluc3RhbnRpYXRlIiwiTWF0aCIsInJhbmRvbSIsIm5vZGUiLCJhZGRDaGlsZCIsInNldFBvc2l0aW9uIiwiZ2V0TmV3U3RhclBvc2l0aW9uIiwiZ2V0Q29tcG9uZW50IiwiZ2FtZSIsImdldFBsYXlCdG5Qb3NpdGlvbiIsInYyIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJnYWluU2NvcmUiLCJzdHJpbmciLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFDUixpQkFBUyxJQUREO0FBRVJDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZELEtBREo7QUFLUkMsSUFBQUEsYUFBYSxFQUFFO0FBQ1gsaUJB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QUF6QixFQUFtQ00sVUFBbEUsR0FBK0UsRUFBM0YsQ0FIa0IsQ0FJbEI7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtYLElBQUwsQ0FBVVksS0FBVixHQUFrQixDQUE3QjtBQUNBSixJQUFBQSxLQUFLLEdBQUcsQ0FBQ1YsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQWpCLElBQXdCLENBQXhCLEdBQTRCWSxJQUFwQyxDQU5rQixDQU9sQjs7QUFDQSxXQUFPakQsRUFBRSxDQUFDNkMsRUFBSCxDQUFNQyxLQUFOLEVBQWFDLEtBQWIsQ0FBUDtBQUNILEdBcEdJO0FBc0dMSSxFQUFBQSxTQUFTLEVBQUUscUJBQVk7QUFDbkIsU0FBS3JDLEtBQUwsSUFBYyxDQUFkLENBRG1CLENBRW5COztBQUNBLFNBQUtHLFlBQUwsQ0FBa0JtQyxNQUFsQixHQUEyQixZQUFZLEtBQUt0QyxLQUE1QyxDQUhtQixDQUluQjs7QUFDQWQsSUFBQUEsRUFBRSxDQUFDcUQsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtuQyxVQUEvQixFQUEyQyxLQUEzQztBQUNIO0FBNUdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHN0YXJQcmVmYWI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgYnRucGxheVByZWZhYjoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICAvLyDmmJ/mmJ/kuqfnlJ/lkI7mtojlpLHml7bpl7TnmoTpmo/mnLrojIPlm7RcbiAgICAgICAgbWF4U3RhckR1cmF0aW9uOiAwLFxuICAgICAgICBtaW5TdGFyRHVyYXRpb246IDAsXG4gICAgICAgIHN0YXJEdXJhdGlvbjogMCxcbiAgICAgICAgLy8g5Zyw6Z2i6IqC54K577yM55So5LqO56Gu5a6a5pif5pif55Sf5oiQ55qE6auY5bqmXG4gICAgICAgIGdyb3VuZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGVcbiAgICAgICAgfSxcbiAgICAgICAgLy8gcGxheWVyIOiKgueCue+8jOeUqOS6juiOt+WPluS4u+inkuW8uei3s+eahOmrmOW6pu+8jOWSjOaOp+WItuS4u+inkuihjOWKqOW8gOWFs1xuICAgICAgICBwbGF5ZXI6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3JlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6IFwiU2NvcmUgKHBsYXllcilcIixcbiAgICAgICAgICAgIHRvb2x0aXA6IFwiVGhlIHNjb3JlIG9mIHBsYXllclwiLFxuICAgICAgICB9LFxuXG4gICAgICAgIC8vIHNjb3JlIGxhYmVsIOeahOW8leeUqFxuICAgICAgICBzY29yZURpc3BsYXk6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICAvLyDot7Pot4Ppn7PmlYjotYTmupBcbiAgICAgICAgc2NvcmVBdWRpbzoge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdob29rIG9ubG9hZCcpO1xuICAgICAgICAvLyDliJ3lp4vljJborqHliIZcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XG4gICAgICAgIHRoaXMudGltZXIgPSAwO1xuICAgICAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcbiAgICAgICAgdGhpcy5zcGF3bk5ld1N0YXIoKTtcbiAgICB9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnaG9vayBzdGFydCcpO1xuICAgICAgICAvLyB0aGlzLnNob3dQbGF5QnRuKCk7XG4gICAgfSxcblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy8g5bCx5Lya6LCD55So5ri45oiP5aSx6LSl6YC76L6RXG4gICAgICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRpbWVyICs9IGR0O1xuICAgIH0sXG5cbiAgICBnYW1lT3ZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpOyAvL+WBnOatoiBwbGF5ZXIg6IqC54K555qE6Lez6LeD5Yqo5L2cXG4gICAgfSxcblxuICAgIHNwYXduTmV3U3RhciAoKSB7XG4gICAgICAgIC8vIOS9v+eUqOe7meWumueahOaooeadv+WcqOWcuuaZr+S4reeUn+aIkOS4gOS4quaWsOiKgueCuVxuICAgICAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XG5cbiAgICAgICAgLy8gc3RhcuWtmOWcqOaXtumXtFxuICAgICAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy50aW1lciA9IDA7XG5cbiAgICAgICAgLy8g5bCG5paw5aKe55qE6IqC54K55re75Yqg5YiwIENhbnZhcyDoioLngrnkuIvpnaJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAvLyDkuLrmmJ/mmJ/orr7nva7kuIDkuKrpmo/mnLrkvY3nva5cbiAgICAgICAgbmV3U3Rhci5zZXRQb3NpdGlvbih0aGlzLmdldE5ld1N0YXJQb3NpdGlvbigpKTtcbiAgICAgICAgbmV3U3Rhci5nZXRDb21wb25lbnQoJ1N0YXInKS5nYW1lID0gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0UGxheUJ0blBvc2l0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGNjLnYyKDAsIDApO1xuICAgIH0sXG5cbiAgICBnZXROZXdTdGFyUG9zaXRpb24gKCkge1xuICAgICAgICB2YXIgcmFuZFggPSAwO1xuICAgICAgICAvLyDmoLnmja7lnLDlubPpnaLkvY3nva7lkozkuLvop5Lot7Pot4Ppq5jluqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoQgeSDlnZDmoIdcbiAgICAgICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDUwO1xuICAgICAgICAvLyDmoLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ8geCDlnZDmoIdcbiAgICAgICAgdmFyIG1heFggPSB0aGlzLm5vZGUud2lkdGggLyAyO1xuICAgICAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xuICAgICAgICAvLyDov5Tlm57mmJ/mmJ/lnZDmoIdcbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgfSxcblxuICAgIGdhaW5TY29yZTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNjb3JlICs9IDE7XG4gICAgICAgIC8vIOabtOaWsCBzY29yZURpc3BsYXkgTGFiZWwg55qE5paH5a2XXG4gICAgICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XG4gICAgICAgIC8vIOa3u+WKoOS4gOS4quWbnuiwg+WHveaVsO+8jOeUqOS6juWcqOWKqOS9nOe7k+adn+aXtuiwg+eUqOaIkeS7rOWumuS5ieeahOWFtuS7luaWueazlVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuc2NvcmVBdWRpbywgZmFsc2UpO1xuICAgIH0sXG59KTtcbiJdfQ==