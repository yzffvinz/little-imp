
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2f96fXbfoxMv7LV1YQQXEVB', 'Player');
// scripts/Player.js

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
    // 主角跳跃高度
    jumpHeight: 0,
    // 主角跳跃持续时间
    jumpDuration: 0,
    // 最大移动速度
    maxMoveSpeed: 0,
    // 加速度
    accel: 0,
    // 跳跃音效资源
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    },
    action: null
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // 加速度方向开关dddddd
    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0;
    this.jumpAction = this.setJumpAction();
    this.node.runAction(this.jumpAction);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {},
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      // if speed reach limit, use max speed with current direction
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  setJumpAction: function setJumpAction() {
    // 跳跃上升
    var jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionOut()); // 下落

    var jumpDown = cc.moveBy(this.jumpDuration, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn()); // 添加一个回调函数，用于在动作结束时调用我们定义的其他方法

    var callback = cc.callFunc(this.playJumpSound, this); // 不断重复

    return cc.repeatForever(cc.sequence(jumpUp, jumpDown, callback));
  },
  playJumpSound: function playJumpSound() {
    // 调用声音引擎播放声音
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImp1bXBIZWlnaHQiLCJqdW1wRHVyYXRpb24iLCJtYXhNb3ZlU3BlZWQiLCJhY2NlbCIsImp1bXBBdWRpbyIsInR5cGUiLCJBdWRpb0NsaXAiLCJhY3Rpb24iLCJvbkxvYWQiLCJhY2NMZWZ0IiwiYWNjUmlnaHQiLCJ4U3BlZWQiLCJqdW1wQWN0aW9uIiwic2V0SnVtcEFjdGlvbiIsIm5vZGUiLCJydW5BY3Rpb24iLCJzeXN0ZW1FdmVudCIsIm9uIiwiU3lzdGVtRXZlbnQiLCJFdmVudFR5cGUiLCJLRVlfRE9XTiIsIm9uS2V5RG93biIsIktFWV9VUCIsIm9uS2V5VXAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJzdGFydCIsInVwZGF0ZSIsImR0IiwiTWF0aCIsImFicyIsIngiLCJqdW1wVXAiLCJtb3ZlQnkiLCJ2MiIsImVhc2luZyIsImVhc2VDdWJpY0FjdGlvbk91dCIsImp1bXBEb3duIiwiZWFzZUN1YmljQWN0aW9uSW4iLCJjYWxsYmFjayIsImNhbGxGdW5jIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJzZXF1ZW5jZSIsImF1ZGlvRW5naW5lIiwicGxheUVmZmVjdCIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLFVBQVUsRUFBRSxDQUZKO0FBR1I7QUFDQUMsSUFBQUEsWUFBWSxFQUFFLENBSk47QUFLUjtBQUNBQyxJQUFBQSxZQUFZLEVBQUUsQ0FOTjtBQU9SO0FBQ0FDLElBQUFBLEtBQUssRUFBRSxDQVJD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NEMsUUFBSCxDQUFZLEtBQUtDLGFBQWpCLEVBQWdDLElBQWhDLENBQWYsQ0FOdUIsQ0FPdkI7O0FBQ0EsV0FBTzdDLEVBQUUsQ0FBQzhDLGFBQUgsQ0FBaUI5QyxFQUFFLENBQUMrQyxRQUFILENBQVlYLE1BQVosRUFBb0JLLFFBQXBCLEVBQThCRSxRQUE5QixDQUFqQixDQUFQO0FBQ0gsR0F0RUk7QUF3RUxFLEVBQUFBLGFBQWEsRUFBRSx5QkFBWTtBQUN2QjtBQUNBN0MsSUFBQUEsRUFBRSxDQUFDZ0QsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUt6QyxTQUEvQixFQUEwQyxLQUExQztBQUNILEdBM0VJO0FBNkVMaUIsRUFBQUEsU0E3RUsscUJBNkVNeUIsS0E3RU4sRUE2RWE7QUFDZCxZQUFRQSxLQUFLLENBQUNDLE9BQWQ7QUFDSSxXQUFLbkQsRUFBRSxDQUFDb0QsS0FBSCxDQUFTQyxHQUFULENBQWFDLENBQWxCO0FBQ0ksYUFBS3pDLE9BQUwsR0FBZSxJQUFmO0FBQ0E7O0FBQ0osV0FBS2IsRUFBRSxDQUFDb0QsS0FBSCxDQUFTQyxHQUFULENBQWFFLENBQWxCO0FBQ0ksYUFBS3pDLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQTtBQU5SO0FBUUgsR0F0Rkk7QUF3RkxhLEVBQUFBLE9BeEZLLG1CQXdGSXVCLEtBeEZKLEVBd0ZXO0FBQ1osWUFBT0EsS0FBSyxDQUFDQyxPQUFiO0FBQ0ksV0FBS25ELEVBQUUsQ0FBQ29ELEtBQUgsQ0FBU0MsR0FBVCxDQUFhQyxDQUFsQjtBQUNJLGFBQUt6QyxPQUFMLEdBQWUsS0FBZjtBQUNBOztBQUNKLFdBQUtiLEVBQUUsQ0FBQ29ELEtBQUgsQ0FBU0MsR0FBVCxDQUFhRSxDQUFsQjtBQUNJLGFBQUt6QyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0E7QUFOUjtBQVFIO0FBakdJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIOS4u+inkui3s+i3g+mrmOW6plxuICAgICAgICBqdW1wSGVpZ2h0OiAwLFxuICAgICAgICAvLyDkuLvop5Lot7Pot4PmjIHnu63ml7bpl7RcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxuICAgICAgICAvLyDmnIDlpKfnp7vliqjpgJ/luqZcbiAgICAgICAgbWF4TW92ZVNwZWVkOiAwLFxuICAgICAgICAvLyDliqDpgJ/luqZcbiAgICAgICAgYWNjZWw6IDAsXG4gICAgICAgIC8vIOi3s+i3g+mfs+aViOi1hOa6kFxuICAgICAgICBqdW1wQXVkaW86IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uOiBudWxsLFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvLyDliqDpgJ/luqbmlrnlkJHlvIDlhbNkZGRkZGRcbiAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgLy8g5Li76KeS5b2T5YmN5rC05bmz5pa55ZCR6YCf5bqmXG4gICAgICAgIHRoaXMueFNwZWVkID0gMDtcblxuICAgICAgICB0aGlzLmp1bXBBY3Rpb24gPSB0aGlzLnNldEp1bXBBY3Rpb24oKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbih0aGlzLmp1bXBBY3Rpb24pO1xuXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBvbkRlc3Ryb3kgKCkge1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xuICAgIH0sXG5cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9LFxuXG4gICAgdXBkYXRlIChkdCkge1xuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcbiAgICAgICAgaWYgKHRoaXMuYWNjTGVmdCkge1xuICAgICAgICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWNjUmlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkICs9IHRoaXMuYWNjZWwgKiBkdDtcbiAgICAgICAgfVxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcbiAgICAgICAgaWYgKCBNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCApIHtcbiAgICAgICAgICAgIC8vIGlmIHNwZWVkIHJlYWNoIGxpbWl0LCB1c2UgbWF4IHNwZWVkIHdpdGggY3VycmVudCBkaXJlY3Rpb25cbiAgICAgICAgICAgIHRoaXMueFNwZWVkID0gdGhpcy5tYXhNb3ZlU3BlZWQgKiB0aGlzLnhTcGVlZCAvIE1hdGguYWJzKHRoaXMueFNwZWVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOagueaNruW9k+WJjemAn+W6puabtOaWsOS4u+inkueahOS9jee9rlxuICAgICAgICB0aGlzLm5vZGUueCArPSB0aGlzLnhTcGVlZCAqIGR0O1xuICAgIH0sXG5cbiAgICBzZXRKdW1wQWN0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIOi3s+i3g+S4iuWNh1xuICAgICAgICB2YXIganVtcFVwID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCB0aGlzLmp1bXBIZWlnaHQpKS5lYXNpbmcoY2MuZWFzZUN1YmljQWN0aW9uT3V0KCkpO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgdmFyIGp1bXBEb3duID0gY2MubW92ZUJ5KHRoaXMuanVtcER1cmF0aW9uLCBjYy52MigwLCAtdGhpcy5qdW1wSGVpZ2h0KSkuZWFzaW5nKGNjLmVhc2VDdWJpY0FjdGlvbkluKCkpO1xuICAgICAgICAvLyDmt7vliqDkuIDkuKrlm57osIPlh73mlbDvvIznlKjkuo7lnKjliqjkvZznu5PmnZ/ml7bosIPnlKjmiJHku6zlrprkuYnnmoTlhbbku5bmlrnms5VcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gY2MuY2FsbEZ1bmModGhpcy5wbGF5SnVtcFNvdW5kLCB0aGlzKTtcbiAgICAgICAgLy8g5LiN5pat6YeN5aSNXG4gICAgICAgIHJldHVybiBjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGp1bXBVcCwganVtcERvd24sIGNhbGxiYWNrKSk7XG4gICAgfSxcblxuICAgIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8g6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+5aOw6Z+zXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5qdW1wQXVkaW8sIGZhbHNlKTtcbiAgICB9LFxuXG4gICAgb25LZXlEb3duIChldmVudCkge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgb25LZXlVcCAoZXZlbnQpIHtcbiAgICAgICAgc3dpdGNoKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==