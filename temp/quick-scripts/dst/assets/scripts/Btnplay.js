
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Btnplay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0J0bnBsYXkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJub2RlIiwib24iLCJldmVudCIsImluaXRHYW1lIiwiYmluZCIsInN0YXJ0IiwidXBkYXRlIiwiZHQiLCJkZXN0cm95IiwiZ2FtZSIsInN0YXJ0R2FtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTDtBQUVBQyxFQUFBQSxNQVJLLG9CQVFLO0FBQ04sU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFXQyxLQUFYLEVBQW1CO0FBQ3ZDLFdBQUtDLFFBQUw7QUFDQyxLQUZtQixDQUVsQkMsSUFGa0IsQ0FFYixJQUZhLENBQXhCO0FBR0gsR0FaSTtBQWNMQyxFQUFBQSxLQWRLLG1CQWNJLENBQ1IsQ0FmSTtBQWlCTEMsRUFBQUEsTUFqQkssa0JBaUJHQyxFQWpCSCxFQWlCTyxDQUFFLENBakJUO0FBbUJMSixFQUFBQSxRQW5CSyxzQkFtQk87QUFDUixTQUFLSCxJQUFMLENBQVVRLE9BQVY7QUFDQSxTQUFLQyxJQUFMLENBQVVDLFNBQVY7QUFDSDtBQXRCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5vbignbW91c2V1cCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRHYW1lKClcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcblxuICAgIHN0YXJ0ICgpIHtcbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge30sXG5cbiAgICBpbml0R2FtZSAoKSB7XG4gICAgICAgIHRoaXMubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGFydEdhbWUoKTtcbiAgICB9XG59KTtcbiJdfQ==